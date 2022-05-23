import React from 'react'
import '../../css/footer.css'

function Footer() {
  return (
    <div className="container-fluid footer-slide">
        <div className="container">
            <div className="container">
                <div className="container">
                    <div class="row content-row">
                        <div class="col-lg-3 col-md-6 side-footer">
                            <h5>finsweet</h5>
                            <h3>Bespoke software solutions</h3>
                            <div class="row ">
                                <div class="col-lg-2 col-md-6">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                            <div className="c mt-5">
                                <p>© All rights reserved – Finsweet</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 row-2-fot">
                            <ul className='content-ul text-left'>
                                <h6>Company</h6>
                                <a href="#"><li>About Us</li></a>
                                <a href="#"><li>Careers</li></a>
                                <a href="#"><li>Services</li></a>
                                <a href="#"><li>Blog</li></a>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 connect-foot">
                            <ul>
                                <h6>Connect</h6>
                                <a href="#"><li>hi@finsweet.com</li></a>
                                <a href="#"><li>+(123) 456-7890</li></a>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 join-foot">
                            <ul>
                                <h6>Join Newsletter</h6>
                                <li>
                                    <input type="text" placeholder='Type email here' />
                                    <button>subcribe</button>
                                </li>
                                <div className="d-flex feddback">
                                    <div className="col-6">
                                        <a href="#"><p>Privacy Policy</p></a>
                                    </div>
                                    <div className="col-8"><a href="#"><p>Terms & Conditions</p></a></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer