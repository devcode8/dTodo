import React from 'react'

function Footer() {
    const footerStyle={
        position:"absolute",
        textAlign:"center",
        bottom:"30px",
        width:"100%",
        height:"2.5rem",
        color:"white"
    }
  return (
    <div style={footerStyle}>
        <p>Copyright © {new Date().getFullYear()} </p>
        <p>Made with ❤️ by Dev Chauhan</p>
    </div>
  )
}

export default Footer;