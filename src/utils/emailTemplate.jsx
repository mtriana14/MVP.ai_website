export const EmailTemplate = ({ values }) => {
  const signupTime = new Date().toUTCString();
  const { email, isAdmin } = values;

  if (isAdmin) {
    return `
    <!DOCTYPE html>
  <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Admin Mail</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      margin: 40px auto;
      padding: 20px 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .logo {
      max-width: 140px;
      display: block;
      margin: 0 auto 20px;
    }
    h2 {
      color: #2c3e50;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #555555;
    }
    .footer {
      font-size: 12px;
      color: #aaaaaa;
      text-align: center;
      margin-top: 20px;
    }
    .highlight {
      font-weight: bold;
      color: #1a73e8;
    }
    ul {
      padding-left: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
<img src="https://res.cloudinary.com/demo/image/upload/v1700000000/logo.svg" alt="MVP.ai Logo" class="logo">

    <h2>📢 New User Signup Notification</h2>
    <p>A new user has successfully signed up on <strong>MVP.ai</strong>.</p>

    <p><span class="highlight">User Details:</span></p>
    <ul>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Signup Time:</strong> ${signupTime}</li>
    </ul>

    <p>Please follow up if any action is required.</p>

    <div class="footer">
      This is an automated message from MVP.ai internal system.
    </div>
  </div>
</body>
</html>

  `;
  }

  return `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>User Mail</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      background-color: #ffffff;
      margin: 40px auto;
      padding: 20px 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h1 {
      color: #2c3e50;
    }
    p {
      font-size: 16px;
      color: #555555;
    }
    .footer {
      font-size: 12px;
      color: #aaaaaa;
      text-align: center;
      margin-top: 20px;
    }
    .logo {
      max-width: 120px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
<img src="https://res.cloudinary.com/demo/image/upload/v1700000000/logo.svg" alt="MVP.ai Logo" class="logo">
    <h1>Welcome!</h1>
    <p>You've successfully joined <strong>MVP.ai</strong>.</p>
    <p>We're excited to have you on board. If you have any questions, feel free to reach out to our team.</p>
    <p>Let's build something amazing together!</p>
    <div class="footer">
      © 2025 MVP.ai — All rights reserved.
    </div>
  </div>
</body>
</html>
`;
};
