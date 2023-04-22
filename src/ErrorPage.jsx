import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'
const ErrorPage = () => {
    useEffect(()=>{
        let styleobject=document.querySelector('.navContainer')
        // console.log(styleobject);
        styleobject.style.display="none"
    },[])
  return (
    <div className='errorContainer'>
      <h1>Error page</h1>
      <h2>404</h2>
      <Link to="/"><button className='btn btn-danger'>Go Back Home</button>
</Link>
    </div>
  )
}

export default ErrorPage
