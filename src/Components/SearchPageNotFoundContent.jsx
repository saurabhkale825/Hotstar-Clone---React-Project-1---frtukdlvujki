import React, { useContext } from 'react'
import "./SearchPageNotFoundContent.css"
import AuthContext from "../Context/AuthContext"

function SearchPageNotFoundContent() {

  const {mobile} = useContext(AuthContext);
  return (
    
    <div className={mobile ? 'mobile-search-page-not-found-content' : 'search-page-not-found-content'}>
      <img src='https://img.hotstar.com/image/upload/v1656431463/web-images/no-result-search.svg'
      alt='image-not-found'/>
    
    <div>Couldn't find Search</div>
    <p>Try searching for something else or try with a different spelling</p>
    </div>
    
  )
}

export default SearchPageNotFoundContent