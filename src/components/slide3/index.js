import React from 'react'
import '../../css/slide3.css'
import right from '../../assets/right.png'

function Slide3() {
  return (
            <div className="container slide3">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 side-left">
                            <h1>The energy of a start-up combined with 30 years of experience.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                            <div className="row content-row">
                                <div className="col-md-6 content-left">
                                    <h1>15+</h1>
                                    <h5>Awards received</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                                </div>
                                <div className="col-md-6">
                                    <h1>500+</h1>
                                    <h5>Awards received</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 side-right">
                            <img className='img-fluid' src={right} alt="" />
                        </div>
                    </div>
            </div>
  )
}

export default Slide3