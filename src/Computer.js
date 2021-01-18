import React from 'react'

function Computer() {
    return (
        <div>


<div className="catagary_section_2">
         <div className="container-fluid">
            <div className="row">

            
               <div className="col-md-4" style={{border:'1px solid black'}}>
                  <div className="box_man">
                     <h3 className="mobile_text">Mobile</h3>
                     <div className="mobile_img"><img src="Mobile.png"/></div>
                     <div className="cart_main_1">
                         <button className="btn btn-danger">Add to Cart</button>&emsp;
                        <span className="proname">Samsung</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                        
                     </div>
                    </div>
               </div>
               


               <div className="col-md-4" style={{border:'1px solid black'}}>
                  <div className="box_man">
                     <h3 className="mobile_text">Watch</h3>
                     <div className="watch_img"><img src="watch.png"/></div>
                     <div className="cart_main_2">
                     <button className="btn btn-danger">Add to Cart</button>&emsp;
                        <span className="proname">Samsung</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                        
                     </div>
                  </div>
               </div>

               <div className="col-md-4" style={{border:'1px solid black'}}>
                  <div className="box_man">
                     <h3 className="mobile_text">Camera</h3>
                     <div className="camera_img"><img src="camera.png"/></div>
                     <div className="cart_main_3">
                     <button className="btn btn-danger">Add to Cart</button>&emsp;
                        <span className="proname">Samsung</span>&emsp;
                        <span className="price">$500</span>&emsp;
                        <span><s>$1000</s></span>&emsp;
                        
                     </div>
                  </div>
               </div>


            </div>
         </div>
      </div>
      




     
            
        </div>
    )
}

export default Computer
