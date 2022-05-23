import React from 'react'
import '../../css/slide5.css'
import imgRight from '../../assets/slide.png'


function Slide5() {
  return (
    <div class="d-flex content-slide5">
            <div class="col-md-6 right-slide5">
                <img src={imgRight} alt="" />
            </div>
            <div class="col-md-6 left-slide5">
                <h1>Energy of a start-up combined with 30 years of experience.</h1>
                <button className='btn btn-outline-warning btn-light'>See Job Vacancies</button>
            </div>
    </div>
  )
}

export default Slide5