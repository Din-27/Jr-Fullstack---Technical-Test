import React from 'react'
import '../../css/slide6.css'
import avatar from '../../assets/avatar.png'
import right6 from '../../assets/slide6.png'

function Slide6() {
  return (
              <div className="container slide6">
                <div className="row d-flex align-items-center">
                        <div className="col-md-6 side-left side-left-slide6">
                            <h1>Finsweet was a dream to work with</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
                            <div className="row mt-5 content-row">
                                <div className="col-md-2 me-3 content-left">
                                    <img src={avatar} alt="" />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <h5>Chikelu Neo</h5>
                                    <p>CEO at MazeAI</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 side-right">
                            <img src={right6} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>

  )
}

export default Slide6