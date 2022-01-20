import React from 'react'
import './Our.css'
import pic4 from './Image/woman.png'
const Our = () => {
    return (
        <div className='task'>
            <div className='appr'>
                <h1>Our Approach</h1>
                <h4>The program rewards user for delivering on certain tasks</h4>
            </div>
            <div className='img_text'>
                <div className='imgwoman'>
                    <img src={pic4} alt="" />

                </div>
                <div className='maintext'>
                    <p className='com'>Kudi.com provides people with opportunity to take advantage<br></br> of advantage of the internet and turn our everyday soical media into a tool<br></br> for making passive income.</p>

                    <div class="grid-2">
                            <div className='boxdiv'>
                                <h5>Membership</h5>
                                <p>Signup to join Kudi for online opportunity that pays.</p>
                            </div>
                            <div className='boxdiv'>
                                <h5>Choose a package</h5>
                                <p>Select subscription packages. They’re proportional to the wages earned by subscribers.</p>    
                            </div>
                            <div className='boxdiv'>
                                <h5>Share ADs</h5>
                                <p>What you do as an affliate is to share these ADs to your Facebook page daily and get paid.</p>
                            </div>
                            <div className='boxdiv'>
                            <h5>Get Paid</h5>
                                <p>Your activity earning will increase based on the package you are on.</p>
                            </div>
                    </div>

                    

                </div>
            </div>
        </div>
        
    )
}

export default Our
