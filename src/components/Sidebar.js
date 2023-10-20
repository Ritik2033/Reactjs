import React, { useState, useEffect,useRef } from 'react'
import png from '../assest/png.png'
import '../css/Sidebar.css'
import con2 from '../assest/con2.jpg'


function Sidebar() {

    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
       
      };
    
      useEffect(() => {
        const closeSidebarOnOutsideClick = (event) => {
          console.log('event target:', event.target);
          if (sidebarVisible && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            console.log("Closing sidebar");
            setSidebarVisible(false);
          }
        };
      
     
        document.addEventListener('click', closeSidebarOnOutsideClick);
      
        return () => {
         
          document.removeEventListener('click', closeSidebarOnOutsideClick);
        };
      }, [sidebarVisible]);
      


    return (
        <>

            <div className="Sidebar" ref={sidebarRef}>
                <div class={`navbar ${sidebarVisible ? 'visible' : ''}`}  >
                    <div className="scroll-content">
                        <div class="logo-container">
                            <img src={con2} alt="Logo" class="logo" />
                            <div class="status-tick"></div>
                        </div>
                        <div className="option">
                            <ul type="none" className="list">
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-chart-line my-custom-class"></i>
                                        <span className="span">Home</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-chart-line my-custom-class"></i><span className="span">Analysis</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-check-circle my-custom-class"></i><span className="span">Task</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-shape-polygon-plus my-custom-class"></i><span className="span">Manage Project</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-clock my-custom-class"></i><span className="span">Farms</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-close-circle my-custom-class"></i><span className="span">Certification</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-cube my-custom-class"></i><span className="span">Association</span></div></li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-format-list-bulleted my-custom-class"></i><span className="span">Association Line</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-shape-polygon-plus my-custom-class"></i><span className="span">Association Group</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-star my-custom-class"></i><span className="span">Association feature</span></div>
                                </li>
                                <li className="listitem">
                                    <div class="menuitem"><i class="mdi mdi-cog my-custom-class"></i><span className="span">Configuration Setting</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    

                </div>

                
                <div class="appbar">


                    <div className="menubar" onClick={toggleSidebar}><box-icon name='list-ul' style={{ fontSize: '35px', }}></box-icon></div>
                    <div className="profile">
                        <div className="item">
                            <img className="img" src={png} alt='profile image' />
                            <i className="logouticon" class="mdi mdi-logout" style={{ fontSize: '35px', color: 'yellow', }} ></i>
                        </div>

                    </div>




                </div>

                <div>
                    
                </div>

            </div>

        </>
    )
}

export default Sidebar
