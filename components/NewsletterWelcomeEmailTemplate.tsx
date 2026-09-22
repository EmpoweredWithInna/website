import React from "react";

export function NewsletterWelcomeEmailTemplate() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Notes from Inna</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: "32px 16px",
          backgroundColor: "#f3eee4",
          color: "#173b32",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <p
            style={{
              margin: "0 0 12px",
              color: "#9a5848",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.6px",
              textTransform: "uppercase",
            }}
          >
            Empowered Wellness with Inna
          </p>
          <h1
            style={{
              margin: "0 0 20px",
              fontFamily: "Georgia, serif",
              fontSize: "34px",
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Welcome to Notes from Inna.
          </h1>
          <p style={{ margin: "0 0 18px", color: "#4f625c", lineHeight: 1.7 }}>
            Thank you for joining. You’ll receive practical nutrition ideas,
            functional-health insights, and new resources from Inna.
          </p>
          <p style={{ margin: 0, color: "#4f625c", lineHeight: 1.7 }}>
            Here’s to feeling informed, supported, and empowered in your next
            step.
          </p>
          <p style={{ margin: "28px 0 0", fontWeight: 700 }}>Inna Benyukhis</p>
          <p style={{ margin: "5px 0 0", color: "#6f7e79", fontSize: "13px" }}>
            Certified Nutritional Therapy Practitioner
          </p>
        </div>
      </body>
    </html>
  );
}
