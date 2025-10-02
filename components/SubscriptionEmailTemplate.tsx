import React from 'react';

interface SubscriptionEmailTemplateProps {
  email: string;
}

export const SubscriptionEmailTemplate: React.FC<SubscriptionEmailTemplateProps> = ({ email }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Newsletter Subscription</title>
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
            background: linear-gradient(135deg, #256439 0%, #53A107 100%);
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
          
          .notification-badge {
            background: linear-gradient(135deg, #29C5EF 0%, #256439 100%);
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
            color: #256439;
            margin-bottom: 20px;
            line-height: 1.2;
          }
          
          .description {
            font-size: 18px;
            color: #6c757d;
            margin-bottom: 30px;
            line-height: 1.7;
          }
          
          .subscriber-info {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-left: 5px solid #256439;
            padding: 25px;
            border-radius: 8px;
            margin: 30px 0;
          }
          
          .info-label {
            font-size: 14px;
            font-weight: 600;
            color: #256439;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          
          .info-value {
            font-size: 18px;
            font-weight: 600;
            color: #2c3e50;
            background: white;
            padding: 12px 16px;
            border-radius: 6px;
            border: 2px solid #e9ecef;
            word-break: break-all;
          }
          
          .timestamp {
            font-size: 14px;
            color: #6c757d;
            margin-top: 15px;
            font-style: italic;
          }
          
          .action-section {
            background: linear-gradient(135deg, #256439 0%, #183B10 100%);
            color: white;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
            border-radius: 12px;
          }
          
          .action-title {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .action-description {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 25px;
            line-height: 1.6;
          }
          
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #FCAF15 0%, #E88074 100%);
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            transition: transform 0.2s ease;
          }
          
          .cta-button:hover {
            transform: translateY(-2px);
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin: 30px 0;
          }
          
          .stat-item {
            text-align: center;
            padding: 20px;
            background: white;
            border: 2px solid #f1f3f4;
            border-radius: 12px;
          }
          
          .stat-number {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 700;
            color: #256439;
            display: block;
          }
          
          .stat-label {
            font-size: 14px;
            color: #6c757d;
            font-weight: 500;
            margin-top: 5px;
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
          
          .social-links {
            margin: 20px 0;
          }
          
          .social-link {
            display: inline-block;
            margin: 0 10px;
            width: 40px;
            height: 40px;
            background: #256439;
            border-radius: 50%;
            text-decoration: none;
            color: white;
            line-height: 40px;
            text-align: center;
            font-size: 16px;
          }
          
          .divider {
            height: 2px;
            background: linear-gradient(90deg, #256439 0%, #53A107 50%, #29C5EF 100%);
            margin: 30px 0;
            border-radius: 1px;
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
            
            .stats-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          {/* Header */}
          <div className="header">
            <div className="logo">Empowered Nutrition</div>
            <div className="tagline">with Inna</div>
          </div>

          {/* Main Content */}
          <div className="content">
            <div className="notification-badge">
              🎉 New Subscription Alert
            </div>
            
            <h1 className="main-title">
              New Newsletter Subscription!
            </h1>
            
            <p className="description">
              Great news! You have a new subscriber to your Empowered Nutrition newsletter. 
              Someone is excited to receive your weekly health tips, recipes, and insights.
            </p>

            <div className="divider"></div>

            {/* Subscriber Information */}
            <div className="subscriber-info">
              <div className="info-label">Subscriber Email Address</div>
              <div className="info-value">{email}</div>
              <div className="timestamp">
                Subscribed on {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>

            {/* Stats Section */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">+1</span>
                <div className="stat-label">New Subscriber</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">📧</span>
                <div className="stat-label">Ready for Content</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">🌱</span>
                <div className="stat-label">Health Journey</div>
              </div>
            </div>

            {/* Action Section */}
            <div className="action-section">
              <h2 className="action-title">What's Next?</h2>
              <p className="action-description">
                This subscriber will automatically receive your next newsletter. 
                Consider sending a welcome email or adding them to your CRM system.
              </p>
              <a href="mailto:{email}" className="cta-button">
                Send Welcome Email
              </a>
            </div>

            {/* Additional Info */}
            <div style={{
              background: '#e8f5e8',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #c3e6c3',
              marginTop: '30px'
            }}>
              <h3 style={{
                color: '#256439',
                marginBottom: '10px',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                💡 Pro Tip
              </h3>
              <p style={{
                color: '#2c3e50',
                fontSize: '14px',
                margin: '0',
                lineHeight: '1.5'
              }}>
                New subscribers are most engaged in their first 48 hours. Consider sending a 
                personalized welcome sequence or your most popular content to make a great first impression!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <p className="footer-text">
              This notification was sent from your Empowered Nutrition website newsletter subscription form.
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
