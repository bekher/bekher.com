import React from "react"
import SocialIcon from "./SocialIcon"

import "./footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <h3 className="footer-link">
        <SocialIcon type="linkedin" />
      </h3>
      <h3 className="footer-link">
        <SocialIcon type="github" />
      </h3>

      <h3 className="footer-link">
        <SocialIcon type="twitter" />
      </h3>

      <h3 className="footer-link">
        <SocialIcon type="instagram" />
      </h3>
    </div>
  </footer>
)

export default Footer
