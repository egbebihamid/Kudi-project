import React from 'react'
import './Lastone.css'
import loca from './Image/location.png'
import email from './Image/email.png'
const Lastone = () => {
    return (
        <div className='over'>
            <div className='ove'>
                <h1>KD</h1>
                <p>kudi</p>
                <div className='allots'>
                   <p>The program is one which rewards users for</p>
                   <p>delivering on certain tasks the</p>
                   <p>company allots.</p>
                </div>
              <div className='address'>
                  <div>
                       <p>Address</p><hr />
                     <div className='the'>
                         <p> <img src={loca} alt="" /> For complaints and question,</p>
                         <p>kindly contact us through the email</p>
                         <p>links below:</p>
                         <p> <img src={email} alt="" /> hello@kudi.com</p>
                         <p>skype: kudi</p>
                     </div>
                  </div>
                  <div>
                      <p>Anout Us</p><hr />
                      <div className='the'>
                          <i class="far fa-square soy">  </i>  <span>About Us</span><br />
                          <i class="far fa-square soy"> </i>  <span>Contact</span><br /> 
                          <i class="far fa-square soy">  </i>  <span>Privacy policy</span><br />
                          <i class="far fa-square soy"> </i>  <span>Terms & Condition</span><br />
                      </div>
                  </div>
                  <div>
                      <p>Resources</p><hr />
                      <div className='the'>
                          <i class="far fa-square soy"> </i> <span>How It Work</span><br />
                          <i class="far fa-square soy"> </i>  <span>Affiliate</span><br />
                          <i class="far fa-square soy"> </i> <span>Coupon Vendor</span><br />
                          <i class="far fa-square soy"> </i> <span>FAQs</span><br />
                      </div>
                  </div>
              </div>  
            </div>
        </div>
    )
}

export default Lastone
