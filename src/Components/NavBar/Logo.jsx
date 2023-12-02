import React from 'react'
import "./Logo.css"
import { Link } from 'react-router-dom'


function Logo() {
  return (
    <div className="logo">
        <Link to={"/subscription"}>
        <img
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          alt="logo"
        />
        </Link>
      </div>
  )
}

export default Logo