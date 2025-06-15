import React from 'react'
import { Link } from 'react-router-dom'


const Section = () => {
  return (
    <div className="container">
        <div className="row">
            <div className=" left p-5 col-8 mt-5">
                <h1 className='connect' ><span>Connect</span> with your loved Ones</h1>
                <p className='fs-3'>Cover a distance by Chehra</p> <br />
                <Link to={'/auth'}><button className='btn p-2 fs-4' >Get Started</button></Link> 
            </div>
            <div className="col-4 mt-5">
                <img className='mobile' style={{height:"100%"}} src="/images/mobile.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section