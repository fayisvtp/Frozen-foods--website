import React from 'react'
import image from './assets/notfound.jpg'


function ErrorPage() {
  return (
    <div className="w-100 d-flex flex-item-center">
  <img src={image} alt="404" className="img-fluid " style={{ borderRadius: '0', width:'70%' }} />
</div>

  )
}

export default ErrorPage
