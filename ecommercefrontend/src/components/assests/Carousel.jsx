import React from 'react';
import Image from "../../Images/3.jpg";
import Image2 from "../../Images/5.jpg";
import Image3 from "../../Images/4.jpg";



function Carousel(props) {
    return (
        <div>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"550px",width:"100%"}} src={Image3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"550px",width:"100%"}} src={Image} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"550px",width:"100%"}}  src={Image2}class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    );
}

export default Carousel;