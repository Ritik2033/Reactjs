import React from 'react'
import style from '../css/Projectdetails.module.css';
export default function Projectdetails() {
  return (
    <div className={style.page14}>
        <div className={style.header}>

            <div className={style.head} >
                <h5>Irrigation System</h5>
                <button><i class="mdi mdi-headset"></i>SUPPORT</button>
            </div>

            <div className={style.divider} class="row">
                <div class="col-12 col-md-3">
                       <div className={style.A}>
                            <h6>Total Members</h6>
                            <box-icon name='dots-vertical-rounded' size="30px"></box-icon>
                       </div>
                       <div className={style.A}>
                            <h5>2,420$</h5>
                            <p><i class="mdi mdi-arrow-up"></i>+240</p>
                       </div>
                </div>


                <div class="col-12 col-md-3">
                       <div className={style.A}>
                            <h6>Total Budgets</h6>
                            <box-icon name='dots-vertical-rounded' size="30px"></box-icon>
                       </div>
                       <div className={style.A}>
                            <h5>3824$</h5>
                            <p><i class="mdi mdi-arrow-up"></i>+140</p>
                       </div>
                </div>


                <div class="col-12 col-md-3">
                       <div className={style.A}>
                            <h6>Expected Revenue</h6>
                            <box-icon name='dots-vertical-rounded' size="30px"></box-icon>
                       </div>
                       <div className={style.A}>
                            <h5>4000$</h5>
                            <p><i class="mdi mdi-arrow-up"></i>+240</p>
                       </div>
                </div>


                <div class="col-12 col-md-3">
                       <div className={style.A}>
                            <h6>Current Revenue</h6>
                            <box-icon name='dots-vertical-rounded' size="30px"></box-icon>
                       </div>
                       <div className={style.A}>
                            <h5>4000$</h5>
                            <p><i class="mdi mdi-arrow-down"></i>+1000</p>
                       </div>
                </div>

                
            </div>

        </div>
      
    </div>
  )
}
