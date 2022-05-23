import React from 'react'
import '../../css/slide7.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

function Slide7() {
  return (
    <div className="container-fluid content-slide7">
        <div className="container">
            <div className="container">
                <div className="container">
                    <h1 className='fw-bold'>
                    Latest Blog & News
                    </h1>
                    <div className="image-slide1">
                        <div class="row justify-content-evenly">
                            <div class="col-lg-4 col-md-6">
                                <div className="card-slide7">
                                    <img src={img1} alt="img1" />
                                    <div className="card-body7">
                                        <h4>Why you have to digitalize in 2021</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                                        <a href="#">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div className="card-slide7">
                                    <img src={img2} alt="img1" />
                                    <div className="card-body7">
                                        <h4>Our internal process and longerm vision</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                                        <a href="#">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div className="card-slide7">
                                    <img src={img3} alt="img1" />
                                    <div className="card-body7">
                                        <h4>Helping the next generation of leaders</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                                        <a href="#">Learn more &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide7