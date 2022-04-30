import React from 'react'
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <div className='welcome'>
       <a name="welcome"></a>
      <div className='welcome-dark'>

        <div className='title'>
          <span>MEDFLIX</span> <br />
          <p>Unlimited movies, TV shows, and more.</p>
          <p>Watch anywhere. Cancel anytime.</p>
          <Link to="/movielist">
          <button>START YOUR 48H TRIAL NOW &nbsp;&nbsp; ▶ </button></Link>
        </div>
        <div className='register'>
          <h1>Sign In</h1>
          <input type="text" id="fname" name="" placeholder=" Email or phone number" />
          <input type="text" id="fname" name="" placeholder=" Password" />
          <button>Sign In</button>
          Not a member? &nbsp;Don't wait and <a href='#Sign UP'>Register now</a>
        </div>

      </div>

      <div className='part-two'>
      <a name="Sign UP"></a>
      <div className='new-account'>
        
      <h1>Sign Up</h1>
          <div className='name'>
          <input type="text" placeholder=" First name" />
          <input type="text" placeholder=" Last name" />
          </div>
          <input type="text" placeholder=" Email" />
          <input type="text" placeholder=" Confirm Email" />
          <input type="text" placeholder=" phone number" />
          <input type="text" placeholder=" Password" />
          <button>Get Started</button>
      </div>

      </div>



      <div className='footer'>
        <p>CONNECT WITH US</p> 
        <a href="#" class="fa-brands fa-facebook"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fa-brands fa-instagram-square"></a>
        <a href="#" class="fa-brands fa-youtube"></a>
        <p>All rights reserved <br/>
      © Mohamed Jradi Entertainment</p>
      <a href='#welcome' id='haut' class="fa-solid fa-circle-arrow-up"></a>
      </div>

    </div>
  )
}

export default Welcome