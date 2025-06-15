import React from 'react'
import Signup from './Signup.jsx'

// Placeholder Signup component - replace with your actual Signup component


const Auth = () => {
  return (
    <>
      <style>{`
        /* Auth Page Styles */
        .main {
          min-height: 100vh;
          background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #3730a3 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero {
          display: flex;
          min-height: 100vh;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          gap: 4rem;
        }

        .left-box {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 600px;
        }

        .left-box img {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .right-box {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 500px;
          gap: 2rem;
        }

        .lock-icon {
          background-color: #8b5cf6;
          padding: 15px;
          border-radius: 50%;
          color: white;
          font-size: 1.5rem;
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }

        .auth-links {
          display: flex;
          gap: 1rem;
        }

        .auth-link {
          padding: 12px 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          text-decoration: none;
          color: white;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
        }

        .auth-link:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            gap: 2rem;
            padding: 1rem;
          }
          
          .left-box {
            max-width: 400px;
          }
          
          .right-box {
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .auth-links {
            flex-direction: column;
            width: 100%;
          }
          
          .auth-link {
            text-align: center;
            width: 100%;
          }
        }
      `}</style>

      <div className='main'>
        <div className="hero">
          <div className="left-box">
            <img src="/images/logo3.png" alt="ConnectCall Logo" />
          </div>
          <div className="right-box">
            <div>
              <i className="fa-solid fa-lock lock-icon"></i>
            </div>
           
            <Signup />
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth