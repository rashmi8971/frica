import React from 'react';
import './Computer.css';

function Computer3() {
    return (
        <div>

<span class="border border-dark" >
      <div class="computers_section_2">
         <div class="container-fluid">
            <div class="computer_main">
               <div class="row" style={{border:'1px solid black'}}>

                  <div class="col-md-4">
                     <div class="computer_img"><img src="computer.png" /></div>
                     <h4 class="computer_text">COMPUTER</h4>
                     <div class="computer_text_main">
                     <span className="proname">Samsung</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                     </div>
                     <button className="btn btn-danger">Add To Cart</button>
                  </div>

                  <div class="col-md-4">
                     <div class="computer_img"><img src="laptop.png" /></div>
                     <div className="com_2">
                     <h4 class="computer_text">LAPTOP</h4>
                     <div class="computer_text_main">
                     <span className="proname">Laptop</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                     </div>
                     <button className="btn btn-danger">Add To Cart</button>
                  </div>
                  </div>

                  <div class="col-md-4">
                     <div class="computer_img"><img src="mac.png" /></div>
                     <div className="com_3">
                     <h4 class="computer_text">macOS</h4>
                     <div class="computer_text_main">
                     <span className="proname">mac-book</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                     </div>
                     <button className="btn btn-danger">Add To Cart</button>
                  </div>
                  </div>

               </div>
            </div>
         </div>
         
      </div>
      </span>
            
        </div>
    )
}

export default Computer3
