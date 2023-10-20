import React from 'react'

import dot3 from '../assest/dot3.jpg'
import logo21 from '../assest/logo21.png'
import logo22 from '../assest/logo22.png'
import logo24 from '../assest/logo24.png'
import '../css/farmer.css'
export default function farmer() {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row " >
          <div className="col-12 col-md-6">
            <div className="box ">
              <div className="imagedot">
                <img src={dot3} alt="Dot2 Image" className="" />
                <box-icon name='dots-vertical-rounded' size="40px"></box-icon>

              </div>
              <div className="title">
                <p>Farmer</p>
              </div>
              <div className="number">
                <p>256</p>
              </div>
              <div>
                Count
              </div>

            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="box ">
              <div className="imagedot">
                <img src={dot3} alt="Dot2 Image" className="" />
                <box-icon name='dots-vertical-rounded' size="40px"></box-icon>

              </div>
              <div className="title">
                <p>Projects</p>
              </div>
              <div className="number">
                <p>1256</p>
              </div>
              <div>
                Count
              </div>

            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="box ">
              <div className="imagedot">
                <img src={dot3} alt="Dot2 Image" className="" />
                <box-icon name='dots-vertical-rounded' size="40px"></box-icon>

              </div>
              <div className="title">
                <p>Farms</p>
              </div>
              <div className="number">
                <p >182</p>
              </div>
              <div>
                Count
              </div>

            </div>
          </div>


          <div className="col-12 col-md-6">
            <div className="box ">
              <div className="imagedot">
                <img src={dot3} alt="Dot2 Image" className="" />
                <box-icon name='dots-vertical-rounded' size="40px"></box-icon>

              </div>
              <div className="title">
                <p>Certification</p>
              </div>
              <div className="number">
                <p className="Z">84</p>
              </div>
              <div>
                Count
              </div>

            </div>
          </div>


        </div>

        <div className="details col-12 col-md-6">

          <div className="col-6">

            <h4 className="head">Certification</h4>
            <div className="A">
              <div className="B">

                <img src={logo21} alt="Logo 21" className="image" />
                <div className="para">
                  <p className="p">Projects<br/><span className="s">Total Count</span></p>
                </div>

              </div>

              <div>
                <span className="Z">1656</span>
              </div>


            </div>

            <div className="A">
              <div className="B">

                <img src={logo22} alt="Logo 21" className="image" />
                <div className="para">
                  <p className="p">Certification<br/><span className="s">Total Count</span></p>
                </div>

              </div>

              <div>
                <span className="Z">1256</span>
              </div>


            </div>

            <div className="A">
              <div className="B">

                <img src={logo24} alt="Logo 21" className="image" />
                <div className="para">
                  <p className="p">farms<br/><span className="s">Total Count</span></p>
                </div>

              </div>

              <div>
                <span className="Z">84</span>
              </div>


            </div>
              
          </div>
          <div className="divider"></div>
          <div className="col-6">
            <h4 className="head">Completed</h4>

            <div className="A">
              <div className="B">

                <img src={logo21} alt="Logo 21" className="image" />
                <div className="para">
                  <p className="p">Certification</p>
                </div>

              </div>

              


            </div>

          </div>

        </div>



      </div>




    </>
  )
}
