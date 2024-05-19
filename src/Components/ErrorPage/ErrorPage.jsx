import React, { useContext } from 'react'
import "./ErrorPage.css"
import AuthContext from '../../Context/AuthContext'
import { Link } from 'react-router-dom';

function ErrorPage() {

    const {mobile} = useContext(AuthContext);
  return (
    <div className='error-page'>
        <div className={mobile ? 'mobile-error-page-content' : 'error-page-content'}>
            <div className={mobile ? 'mobile-error-page-text' : 'error-page-text'}>
                <div>404</div>
                <h4>Page Not Found</h4>
                <p>The resource requested could not be found on this server!</p>
            </div>
            <div className={mobile ? 'mobile-error-page-button':'error-page-button'}>
            <Link to={"/"}>
                <p className='error-page-back-text'>Go To Homepage</p>
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default ErrorPage