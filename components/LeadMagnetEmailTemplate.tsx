import React from 'react';

interface LeadMagnetEmailTemplateProps {
  email: string;
  downloadUrl: string;
}

export const LeadMagnetEmailTemplate: React.FC<LeadMagnetEmailTemplateProps> = ({ email, downloadUrl }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your 7-Day Gut-Brain Reset Meal Plan</title>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Lato', Arial, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background-color: #f8f9fa;
            padding: 20px;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          
          .header {
            background: linear-gradient(135deg, #41ab5d 0%, #238b45 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
          }
          
          .logo {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            letter-spacing: -0.5px;
          }
          
          .tagline {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
          }
          
          .content {
            padding: 40px 30px;
          }
          
          .welcome-badge {
            background: linear-gradient(135deg, #41ab5d 0%, #238b45 100%);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            display: inline-block;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .main-title {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 700;
            color: #41ab5d;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          
          .description {
            font-size: 18px;
            color: #6c757d;
            margin-bottom: 30px;
            line-height: 1.7;
          }
          
          .download-section {
            background: linear-gradient(135deg, #41ab5d 0%, #238b45 100%);
            color: white;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            border-radius: 12px;
          }
          
          .download-title {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .download-description {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 25px;
            line-height: 1.6;
          }
          
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #FCAF15 0%, #E88074 100%);
            color: white;
            padding: 18px 40px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 700;
            font-size: 18px;
          }
          
          .benefits-section {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 12px;
            margin: 30px 0;
          }
          
          .benefits-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 600;
            color: #41ab5d;
            margin-bottom: 15px;
          }
          
          .benefit-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            font-size: 15px;
            color: #2c3e50;
          }
          
          .benefit-icon {
            color: #41ab5d;
            margin-right: 10px;
            font-weight: bold;
          }
          
          .divider {
            height: 2px;
            background: linear-gradient(90deg, #41ab5d 0%, #238b45 50%, #41ab5d 100%);
            margin: 30px 0;
            border-radius: 1px;
          }
          
          .next-steps {
            background: #e8f5e8;
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #c3e6c3;
            margin-top: 30px;
          }
          
          .next-steps h3 {
            color: #41ab5d;
            margin-bottom: 15px;
            font-size: 18px;
            font-weight: 600;
          }
          
          .next-steps p {
            color: #2c3e50;
            font-size: 15px;
            margin-bottom: 15px;
            line-height: 1.6;
          }
          
          .discovery-link {
            display: inline-block;
            background: #41ab5d;
            color: white;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 20px;
            font-weight: 600;
            font-size: 14px;
          }
          
          .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
          }
          
          .footer-text {
            font-size: 14px;
            color: #6c757d;
            margin-bottom: 15px;
          }
          
          .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
          }
          
          .signature-name {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 600;
            color: #41ab5d;
          }
          
          .signature-title {
            font-size: 14px;
            color: #6c757d;
          }
          
          @media (max-width: 600px) {
            .container {
              margin: 10px;
              border-radius: 8px;
            }
            
            .header, .content, .footer {
              padding: 25px 20px;
            }
            
            .main-title {
              font-size: 26px;
            }
            
            .cta-button {
              padding: 15px 30px;
              font-size: 16px;
            }
          }  
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <div className="logo">Empowered Nutrition</div>
            <div className="tagline">with Inna</div>
          </div>

          <div className="content">
            <div className="welcome-badge">
              🎉 Your Free Guide Is Here!
            </div>
            
            <h1 className="main-title">
              Your 7-Day Gut-Brain Reset Meal Plan
            </h1>
            
            <p className="description">
              Thank you for taking the first step toward better gut health and mental clarity! 
              Your personalized 7-Day Gut-Brain Reset Meal Plan is ready for you.
            </p>

            <div className="divider"></div>

            <div className="download-section">
              <h2 className="download-title">Download Your Free Guide</h2>
              <p className="download-description">
                Click the button below to access your complete 7-day meal plan with recipes, 
                shopping lists, and lifestyle tips.
              </p>
              <a href={downloadUrl} className="cta-button">
                📥 Download My Meal Plan
              </a>
            </div>

            <div className="benefits-section">
              <h3 className="benefits-title">What's Inside Your Guide:</h3>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>7-day step-by-step gut-friendly meal plan</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Recipes packed with prebiotics, probiotics & brain-supporting nutrients</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Easy shopping list for stress-free prep</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Tips to boost mood and energy naturally</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Bonus: Quick lifestyle hacks for better digestion</span>
              </div>
            </div>

            <div className="next-steps">
              <h3>🌟 Ready for Personalized Support?</h3>
              <p>
                If you're looking for deeper guidance on your health journey, I'd love to help! 
                Schedule a free 15-minute discovery call to discuss your unique health goals.
              </p>
              <a href="https://calendly.com/inna-ntp/free-restart-discovery-call" className="discovery-link">
                Book Your Free Call →
              </a>
            </div>

            <div className="signature">
              <p style={{ marginBottom: '15px', color: '#6c757d' }}>
                Here's to your health and vitality!
              </p>
              <div className="signature-name">Inna</div>
              <div className="signature-title">Certified Nutritional Therapy Practitioner</div>
            </div>
          </div>

          <div className="footer">
            <p className="footer-text">
              You're receiving this email because you requested the 7-Day Gut-Brain Reset Meal Plan 
              from Empowered Nutrition with Inna.
            </p>
            
            <p style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0'
            }}>
              © {new Date().getFullYear()} Empowered Nutrition with Inna. All rights reserved.<br/>
              Functional Nutrition • Root-Cause Healing • Women's Health Transformation
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};
