import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import style from '../css/farm.module.css';
import leaf from '../assest/leaf.png';
import land2 from '../assest/land2.png';
import square2 from '../assest/square2.png';
import product from '../assest/product.jpg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function Screentwo() {
  const chartData = {
    series: [{
      name: "Wheat",
      data: [180, 60, 0, 120, 230, 160, 0, 110, 100, 0]
    },
    {
      name: "Rice",
      data: [120, 100, 180, 160, 0, 55, 165, 170, 185, 90]
    },
    {
      name: "Sugarcane",
      data: [0, 80, 60, 0, 50, 55, 165, 170, 0, 90]
    }
    ],
  };

  const chartOptions = {
    chart: {
      type: 'bar',
      stacked: true, // Enable stacked columns
      height: '400px',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Crop Details',
      align: 'center',
      margin: 20,
      style: {
        fontSize: '20px',
        color: 'rgba(91, 87, 87, 0.8)'
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#008000', '#50C878', '#7CFC00'],
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#303030']
      }
    },
    xaxis: {
      categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      position: 'bottom',
      labels: {
        style: {
          colors: ['#9AA0A6'],
          fontSize: '14px'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: ['#9AA0A6'],
          fontSize: '14px'
        }
      },
      axisBorder: {
        show: false
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        title: {
          formatter: function () {
            return 'Production'
          }
        }
      }
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 5,
    },
  };

  const pieChartData = {
    series: [281, 79],
  };

  const pieChartOptions = {
    chart: {
      type: 'donut',
      height: '300px',
    },
    labels: ['Wheat', 'Rice'],
    title: {
      align: 'center',
      margin: 20,
      style: {
        fontSize: '20px',
        color: 'rgba(91, 87, 87, 0.8)',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#32CD32', '#ffff00'],
  };




  const [exporting, setExporting] = useState(false);

  const exportToPDF = async () => {
    const content = document.querySelector('.data');
    const canvas = await html2canvas(content, {
      scale: 2,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight);
    pdf.save('data.pdf');
  };

  return (
    <div class="data">

      <div className={style.farm}>
        <div className={style.head}>
          <h3>Hello, Maple |</h3>
          <select id="Year" className={style.yeardropdown}>
            <option value="apple">2023</option>
            <option value="banana">2022</option>
            <option value="cherry">2021</option>
            <option value="orange">2020</option>
            <option value="strawberry">2019</option>
          </select>

          <div className={style.print}>
            <button type="submit" onClick={exportToPDF} >Print</button>
          </div>
        </div>



        <div class="row" >

          <div class="col-lg-4 col-md-6">
            <div class="row justify-content-between" className={style.box}>
              <div>
                <img src={leaf} alt="logo" className={style.image} />
              </div>

              <div>
                <h5>Crop name</h5>
              </div>

              <div className={style.name}>
                Granja de arroz
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="row justify-content-between" className={style.box}>
              <div>
                <img src={square2} alt="logo" className={style.image} />
              </div>

              <div>
                <h5>Area</h5>
              </div>

              <div className={style.name}>
                50 Acre
              </div>

            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="row justify-content-between" className={style.box}>
              <div>
                <img src={product} alt="logo" className={style.image} />
              </div>

              <div>
                <h5>Last Production</h5>
              </div>

              <div className={style.name}>
                50 ton
              </div>

            </div>
          </div>
        </div>

        <div className={style.part2}>

          <div class="row" className={style.class7}>
            <div class="col-lg-4 col-md-6" className={style.first} style={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '450px'
            }}>
              <p className={style.Cropp}>DETAILS</p>
              <div class="col" className={style.table1}>
                <p className={style.heading}>Documents</p>

              </div>
              <hr />
              <div class="col" className={style.table1}>
                <div><p className={style.table3}>Passport</p></div>
                <div className={style.document}><button className={style.currentyactives}>View</button>
                <button className={style.table33}>Download</button></div>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <div><p className={style.table3}>License</p></div>
                <div className={style.document}><button className={style.currentyactives}>View</button>
                <button className={style.table33}>Download</button></div>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <div><p className={style.table3}>Resident</p></div>
                <div className={style.document}><button className={style.currentyactives}>View</button>
                <button className={style.table33}>Download</button></div>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <div><p className={style.table3}>Signature</p></div>
                <div className={style.document}><button className={style.currentyactives}>View</button>
                <button className={style.table33}>Download</button></div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" className={style.first} style={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '450px'
            }}>
              <p className={style.Cropp}>OUTPUTS</p>
              <div class="col" className={style.table11}>
                <ReactApexChart options={pieChartOptions} series={pieChartData.series} type="donut" height={300} />
                <span className={style.centeredpercentage}>78%</span>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" className={style.first} style={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '450px',
            }}>
              <p className={style.Cropp}>GEOFENCED AREA</p>
              <div className={style.land}>
                <img src={land2} alt="logo" className={style.landimage} />
              </div>

            </div>
          </div>

        </div>

        <div className={style.class10}>
          <div className="number">

            <ReactApexChart options={chartOptions} series={chartData.series} type="bar" height={450} />
          </div>

        </div>





      </div>




    </div>
  )
}

export default Screentwo
