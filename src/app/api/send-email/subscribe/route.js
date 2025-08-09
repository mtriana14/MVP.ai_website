export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }
    const subscriberRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : {},
      }),
    });

    const subscriberData = await subscriberRes.json();

    if (!subscriberRes.ok) {
      return new Response(JSON.stringify(subscriberData), {
        status: subscriberRes.status,
      });
    }

    if (process.env.MAILERLITE_GROUP_ID && subscriberData.data?.id) {
      await fetch(
        `https://connect.mailerlite.com/api/subscribers/${subscriberData.data.id}/groups/${process.env.MAILERLITE_GROUP_ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.MAILERLITE_TOKEN}`,
            Accept: "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
