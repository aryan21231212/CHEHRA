import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  const [usernamee, setusername] = useState("")
  const [passwordd, setpassword] = useState("")
  const [error, seterror] = useState("")

  const submitDefault = async (e)=>{
    e.preventDefault()
    let response = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: usernamee,
        password: passwordd,
      }),
    });

    let data = await response.json()
    if(data.message =="success"){
      localStorage.setItem('jwt-token',data.token)
      navigate('/home')
    }
    if(data.message =="Username not found!"){
      seterror(data.message)
    }
    if(data.message =="Invalid password"){
      seterror(data.message)
    }

}

  return (
    <>
      <style>{`
        .video-call-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .form-wrapper {
          width: 100%;
          max-width: 400px;
        }

        .brand-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .brand-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .brand-subtitle {
          color: #93c5fd;
          margin: 0;
        }

        .form-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0.5rem;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus {
          outline: none;
          ring: 2px solid #60a5fa;
          border-color: transparent;
          transform: translateY(-1px);
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: linear-gradient(90deg, #2563eb 0%, #7c3aed 100%);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px) scale(1.02);
        }

        .submit-button:focus {
          outline: none;
          ring: 4px solid rgba(59, 130, 246, 0.5);
        }

        .signin-link {
          text-align: center;
          margin-top: 1.5rem;
        }

        .signin-link p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .signin-link span {
          color: #93c5fd;
          cursor: pointer;
          transition: color 0.3s ease;
          margin-left: 0.25rem;
        }

        .signin-link span:hover {
          color: #dbeafe;
        }

        @media (max-width: 480px) {
          .form-container {
            padding: 1.5rem;
          }
          
          .brand-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="video-call-container">
        <div className="form-wrapper">
          <div className="brand-header">
            <h1 className="brand-title">Welcome Back</h1>
            <p className="brand-subtitle">Sign in to start your video conversations</p>
          </div>
          
          <form onSubmit={submitDefault}>
          <div className="form-container">
            <div className="form-fields">
              <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                className="form-input"
                onChange={(e)=>setusername(e.target.value)}
                value={usernamee}
              />
              
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="form-input"
                onChange={(e)=>setpassword(e.target.value)}
                value={passwordd}
              />

              <div style={{color:"red",fontSize:"1.2rem"}}>
                {error}
              </div>
              
              <button type='submit' className="submit-button">
                Join Video Call
              </button>
            </div>
          </div>
          </form>
          
          
          <div className="signin-link">
            <p>
              Don't have an account?
            <Link to={'/auth'}><span>Create one here</span></Link>  
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin