import React from 'react';
import './Head2.css';

function Head2() {
    return (
        <div >
            

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

            
            <div className="border">
               <div class="carousel-item active">
                   <div className="container">
                     <div className="row border1">
                         
                        <div className="col-md-4">
                           <div className="image_1"><img src="img1.png" /></div>
                        </div>
                        <div className="col-md-4">
                           <h1 className="banner_taital">Big Sale<br/>Offer</h1>
                           <button className="btn btn-danger"><h4>Buy Now</h4></button> &emsp;
                           <button class="btn btn-dark"><h4>Contact Us</h4></button>
                        </div>
                        <div className="col-md-4">
                           <div className="image_2"><img src="lap&mouse.png" /></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
          </div>

          <a className="carousel-control-prev " href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next " href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>       
                
                  
               
            
             
          </div>
      </div>
                
            
        
        )
}

export default Head2
