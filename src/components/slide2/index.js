import React from 'react'
import '../../css/slide2.css'
import imgc1 from '../../assets/imgc1.png'
import imgc2 from '../../assets/imgc2.png'
import imgc3 from '../../assets/imgc3.png'

function Slide2() {
  return (
        <div className="container-fluid content-slide2 slide2">
            <div className="container slide2-content-2 ">
                <div className="row">
                            <div className="title-slide2 col-md-6">
                                <p>We are building software solution that solves your business challenges</p>
                            </div>
                            <div className="p2-slide2 col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                            </div>
                </div>
            <div class="row img-content-slide2">
                        <div class="col-lg-4 col-md-12">
                            <div class="card" style={{width: "20rem"}}>
                                <div>
                                    <img src={imgc1} className='imgc1' alt="imgc1" />
                                    <h5>Invoicing</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card" style={{width: "20rem"}}>
                                <div>
                                    <img src={imgc2} className='imgc2' alt="imgc1" />
                                    <h5>Support</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card" style={{width: "20rem"}}>
                                <div>
                                    <img src={imgc3} className='imgc3' alt="imgc1" />
                                    <h5>Surveying</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                </div>
                            </div>
                        </div>
            </div>
            </div>
        </div>
  )
}

export default Slide2