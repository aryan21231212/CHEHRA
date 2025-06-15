import React, { useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, TextField } from '@mui/material';

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  
  let handleJoinVideoCall = async () => {
    navigate(`/${meetingCode}`)
  }

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .navBar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navBar h2 {
          color: #2c3e50;
          font-weight: 600;
          font-size: 1.8rem;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .meetContainer {
          display: flex;
          min-height: calc(100vh - 80px);
          align-items: center;
          justify-content: center;
          padding: 2rem;
          gap: 4rem;
        }

        .leftPanel {
          flex: 1;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }

        .leftPanel h2 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #ffffff, #f8f9fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .meeting-input-container {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .meeting-input-container .MuiTextField-root {
          flex: 1;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
        }

        .meeting-input-container .MuiTextField-root .MuiOutlinedInput-root {
          border-radius: 12px;
          font-size: 1.1rem;
        }

        .meeting-input-container .MuiTextField-root .MuiInputLabel-root {
          font-size: 1.1rem;
        }

        .join-button {
          background: linear-gradient(45deg, #667eea, #764ba2) !important;
          color: white !important;
          padding: 12px 24px !important;
          border-radius: 12px !important;
          font-size: 1.1rem !important;
          font-weight: 600 !important;
          text-transform: none !important;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
          transition: all 0.3s ease !important;
          min-width: 120px !important;
        }

        .join-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6) !important;
        }

        .logout-button {
          background: linear-gradient(45deg, #ff6b6b, #ee5a52) !important;
          color: white !important;
          padding: 8px 20px !important;
          border-radius: 25px !important;
          text-transform: none !important;
          font-weight: 500 !important;
          box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3) !important;
          transition: all 0.3s ease !important;
        }

        .logout-button:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4) !important;
        }

        .rightPanel {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 500px;
        }

        .rightPanel img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .rightPanel img:hover {
          transform: scale(1.05);
        }

        .feature-highlights {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          flex: 1;
          min-width: 200px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .feature-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .meetContainer {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .leftPanel h2 {
            font-size: 2rem;
          }

          .meeting-input-container {
            flex-direction: column;
            gap: 1rem;
          }

          .navBar {
            padding: 1rem;
          }

          .navBar h2 {
            font-size: 1.4rem;
          }

          .feature-highlights {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .leftPanel h2 {
            font-size: 1.5rem;
          }

          .meetContainer {
            padding: 1rem;
          }
        }
      `}</style>

      <div className="navBar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Chehra</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button 
            className="logout-button"
            onClick={() => {
              localStorage.removeItem("jwt-token")
              navigate("/auth")
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Connect Face to Face with Chehra</h2>
            <div className="meeting-input-container">
              <TextField 
                onChange={(e) => setMeetingCode(e.target.value)} 
                id="outlined-basic" 
                label="Enter Meeting Code" 
                variant="outlined"
                placeholder="e.g., abc-def-ghi"
                fullWidth
              />
              <Button 
                onClick={handleJoinVideoCall} 
                variant='contained'
                className="join-button"
                disabled={!meetingCode.trim()}
              >
                Join
              </Button>
            </div>

           
          </div>
        </div>

        <div className='rightPanel'>
          <img src='/images/logo3.png' alt="Chehra Video Calling" />
        </div>
      </div>
    </>
  )
}

export default withAuth(HomeComponent)