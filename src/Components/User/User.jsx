import React, { useContext } from 'react'
import "./User.css"
import { Link } from 'react-router-dom'
import Sidebar from "../NavBar/Sidebar"
import Footer from "../NavBar/Footer"
import LoginUser from './LoginUser'
import ToUnlogUser from './ToUnlogUser'
import AuthContext from '../../Context/AuthContext'


function User() {

  const{login} = useContext(AuthContext);
  

  return (
    <>
    <div className='user-page'>
    <Sidebar />
    <Link to={"/user"}>
    <div className='user'>
        { login ?<ToUnlogUser/>:<LoginUser/>}
    </div>
    </Link>
    </div>
    <Footer/>
    </>
  )
}

export default User;