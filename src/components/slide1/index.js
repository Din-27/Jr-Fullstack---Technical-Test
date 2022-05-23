import React from 'react'
import '../../css/slide1.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Slide1() {
  return (
    <div className="container slide1">
                <div class="content-slide1">
                    <div className="title-slide1">
                        <p>We help more than 1500 companies from all sectors</p>
                    </div>
                    <div className="p1-slide1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros 
                            blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et 
                            pellentesque.
                        </p>
                    </div>
                    <div className="image-slide1">
                        <div class="row justify-content-evenly">
                            <div class="col-lg-4 col-md-6">
                                <img src={img1} alt="img1" />
                                <h4>Business strategy</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                <a href="#">Learn more &rarr;</a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <img src={img2} alt="img1" />
                                <h4>Digitalization</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                <a href="#">Learn more &rarr;</a>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <img src={img3} alt="img1" />
                                <h4>Risk assessment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,</p>
                                <a href="#">Learn more &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>       
  )
}

export default Slide1