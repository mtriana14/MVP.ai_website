"use client";

export default function PrivacyPage() {
  return (
    <div className="bg-[#1A2E5C]" style={{    minHeight: "100vh", color: "white" }}>
      {/* HEADER */}
     

      {/* PAGE CONTENT */}
      <div
        style={{
          padding: "40px 70px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "900px",
            lineHeight: "1.5",
            marginBottom: "40px",
            opacity: 0.9,
          }}
        >
          At MVP.ai, we value your privacy and ensure your data is
          securely handled. Below you can read our full privacy policy:
        </p>

        {/* PDF VIEWER CONTAINER */}
        <div
          style={{
            height: "80vh",
            borderRadius: "12px",
            overflow: "hidden",
            background: "white",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.2)",
          }}
        >
          <iframe
            src="/privacy.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Estilo base de los links
const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "400",
  opacity: 0.9,
  transition: "0.2s",
  fontFamily: "Inter, sans-serif",
  letterSpacing: "0.3px",
};
