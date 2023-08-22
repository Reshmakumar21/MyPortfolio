import './FooterStyles.css'

import React from 'react'
import {FaHome, FaMailBulk, FaPhone} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:
                        "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:
                        "#fff", marginRight:"2rem"}}/>  
                    +91 1234567890</h4>  
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:
                        "#fff", marginRight:"2rem"}}/>  
                    info@mail.com</h4>  
                </div>
            </div>

            <div className='right'>
                <h4>About the company</h4>
                <p>This is me Reshma. I enjoy doing 
                    web development</p>
            </div>
        </div>
    </div>
  )
}

export default Footer