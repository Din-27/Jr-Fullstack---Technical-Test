import React from 'react'
import '../../css/hero.css'
import hero from '../../assets/hero-right.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'

function Hero() {
  return (
    <div className="Hero">
        <div className="container hero1">
                <div class="content-hero">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6 side-left">
                            <h1 className='title-hero'>Prosper with our bespoke solutions</h1>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Suspendisse varius enim in eros elementum tristique
                            </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className='btn btn-outline-warning btn-left'>See Our Services</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className='btn btn-outline-transparent btn-all'>See All Services</button>
                                    </div>
                                </div>
                            <div className='container-fluid mt-4'>
                            <p className='title-support'>Work with 100+ Companies</p>
                                <div class="row justify-content-around logo">
                                    <div class="col-lg-4 logo1">
                                        <img src={logo1} alt="" />
                                    </div>
                                    <div class="col-lg-4 logo2">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <div class="col-lg-4 logo3">
                                        <img src={logo3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 image-hero">
                            <img src={hero} className='img-fluid' alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero