import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
          <div className='mainbox'>
            <ul>
              <li><b>Vist my Portfolio website by clicking the link below</b> </li>
              <li><a  href="https://vamsi-portfolio.onrender.com">PORTFOLIO</a></li>
              <li>Phone:9490387526</li>
            </ul>
          <hr></hr>
   <div className='sb_footer-below'>
    <div className='sb_footer-copyright'>
        <p> 
        @{new Date().getFullYear()} VamsiCreations. All right reserved.        
        </p>
    </div>
   </div>
          </div>
        
      </footer>
    </>
  )
}

export default Footer
