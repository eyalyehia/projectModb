import React from 'react'
import './home.css'

export const VodStrip = (props) => {
  return (
    <div className='container-fluid p-0'>
        <div id="carouselExampleSlidesOnly" className=" carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div style={{backgroundImage: "url(Images/popcoren.jpeg)"}}  className="d-block w-100 strip" alt="..."></div>
    </div>
    <div className="carousel-item">
    <div style={{backgroundImage: "url(Images/cinema.jpeg)"}}  className="d-block w-100 strip" alt="..."></div>
    </div>
    <div className="carousel-item">
    <div style={{backgroundImage: "url(Images/netflix.webp)"}}  className="d-block w-100 strip" alt="..."></div>
    </div>
  </div>
  </div>
</div>
  )
}

 
