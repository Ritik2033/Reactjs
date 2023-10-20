import React from 'react'
import '../css/Dashboard.css'
import dot3 from '../assest/dot3.jpg'
import logo21 from '../assest/logo21.png'
import logo22 from '../assest/logo22.png'
import logo24 from '../assest/logo24.png'


export default function Dashboard() {
    return (
        <>

            <div className="d-flex justify-center row">

                <div className="part1">

                    <div cols="12" >
                        <div >
                            <div >
                                <div className="box" tabindex="0">


                                    <div className="dots">

                                        <div></div>
                                    </div>

                                    <img src={dot3} alt="Dot2 Image" className="dot2-img" />

                                    <div className="text-container farmer-link">
                                        <span className="farmer-btn">Farmer</span>
                                    </div>

                                    <div className="text-container2">
                                        <span className="pending-text">262</span>
                                        <span className="className3">-18%</span>
                                    </div>
                                    <div className="text-container3">
                                        <span className="pending-text2">Count</span>
                                    </div>

                                </div>
                            </div>
                            <div  >
                                <div className="box" tabindex="0" >
                                    <div className="dots">

                                        <div></div>
                                    </div>

                                    <img src={dot3} alt="Dot2 Image" className="dot2-img" />

                                    <div className="text-container farmer-link">
                                        <span className="farmer-btn">Farms</span>
                                    </div>


                                    <div className="text-container2">
                                        <span className="pending-text">182</span>
                                        <span className="className3">-1%</span>
                                    </div>
                                    <div className="text-container3">
                                        <span className="pending-text2">Count</span>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                    <div  >
                        <div >
                            <div >
                                <div className="box" tabindex="0" >
                                    <div className="dots">

                                        <div></div>
                                    </div>

                                    <img src={dot3} alt="Dot2 Image" className="dot2-img" />

                                    <div className="text-container farmer-link">
                                        <span className="farmer-btn"><u>Projects</u></span>
                                    </div>

                                    <div className="text-container2">

                                        <span className="pending-text">1298</span>
                                        <span className="className3">+42%</span>
                                    </div>
                                    <div className="text-container3">
                                        <span className="pending-text2">Total completed</span>
                                    </div>

                                </div>
                            </div>
                            <div >
                                <div className="box" tabindex="0" >
                                    <div className="dots">

                                        <div></div>
                                    </div>

                                    <img src={dot3} alt="Dot2 Image" className="dot2-img" />

                                    <div className="text-container farmer-link">
                                        <span className="farmer-btn">Certification</span>
                                    </div>

                                    <div className="text-container2">
                                        <span className="pending-text">84</span>
                                        <span className="className3">-18%</span>
                                    </div>
                                    <div className="text-container3">
                                        <span className="pending-text2">Count</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>



                <div className="col" cols="12" sm="6">
                    <div className="part2">
                        <div className="tall-rectangle">
                            <div className="classNamees">
                                <span className="rectangle-title">Total Certification</span>
                                <img src={logo21} alt="Logo 21" className="logo21" />
                                <div class="row">
                                    <div>
                                        <img src={logo21} alt="Logo 21" className="logo21" />
                                    </div>

                                    <div>
                                        <span className="rectangle-subtitle" style={{ color: "rgb(91, 87, 87)" }}>Project</span>


                                        <span className="rectangle-detail">Total Count</span>
                                    </div>


                                </div>

                                <span className="green-number">1644</span>
                                <div className="kyc-container">
                                    <img src={logo22} alt="Logo 22" className="logo22" />

                                    <span className="completed-kyc-text" style={{ color: "rgb(91, 87, 87)" }}>Total Certification</span>

                                    <span className="rectangle23">Total Count</span>
                                    <span className="green-num">1298</span>
                                </div>
                                <img src={logo24} alt="Logo 21" className="logo24" />

                                <span className="pending-subtitle" style={{ color: "rgb(91, 87, 87)" }}>Fincas</span>

                                <span className="rectangle24">Total Count</span>
                                <span className="gree">84</span>
                                <span className="complaint-apps-title">Completed</span>
                                <div className="complaint-container">
                                    <img src={logo21} alt="Logo 21" className="complaint-logo21" />

                                    <span className="complaint-title" style={{ color: "rgb(91, 87, 87)" }}>Total Certification</span>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
