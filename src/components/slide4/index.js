import React from 'react'
import '../../css/slide4.css'
import end from '../../assets/end.png'
import right4 from '../../assets/right4.png'

function Slide4() {
  return (

                <div className="container position-relative content-slide4">
                    <div className="row badge">
                        <img className='position-absolute top-0 start-100 translate-middle' src={end} alt="" />
                    </div>
                    <div className="d-flex">
                        <h6 className='btn btn1 btn-outline-warning'>Business strategy</h6>
                        <h6 className='btn ms-4 btn2'>Digitalization</h6>
                        <h6 className='btn ms-4 btn3'>Risk assessment</h6>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 side-left side-left-slide4">
                            <h1>Helping clients with research and strategy for their business</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque. </p>
                            <p>Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
                            <a href="#">Learn more &rarr;</a>
                        </div>
                        <div className="col-md-6 side-right-slide4">
                            <img src={right4} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

  )
}

export default Slide4