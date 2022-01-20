import React from 'react'
import './Main.css'
import pics5 from './Image/blue.png'
import pic1 from './Image/idn.png'
import pic2 from './Image/group.png'
import pic3 from './Image/nub1.png'
const Main = () => {
    return (
        <div className='earn'>
           <h1>How to earn with kudi</h1>
           <div className='blue'>
              <div className='pic1'>
                 <img src={pics5} alt="" />
                 <img id='wow'  src={pic1} alt="" />
                 <div className='box'>
                      <h2>Affiliate</h2>
                     <p>What you do as an affliate is to share these
                      ADs to your Facebook page daily and get paid
                      based on your activites and package</p>
                 </div>
              </div>
              <div>
                 <img src={pic2} alt="" />
                 <div className='box'>
                      <h2>Referer</h2>
                      <p>On kudi.com we reward every member's hard
                      work; Each package on has its own referral
                      bonus</p>
                 </div>
              </div>
              <div className='pic1'>
                 <img src={pics5} alt="" />
                 <img id='wow' src={pic3} alt="" />
                 <div className='box'>
                      <h2>Membership</h2>
                      <p>Practically anyone can be a member kudi.com
                      as all you need is an internet enabled device.</p>
                 </div>
              </div>
           </div>
        </div>
    )
}

export default Main
