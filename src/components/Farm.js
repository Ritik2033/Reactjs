import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import style from '../css/farm.module.css';
import leaf from '../assest/leaf.png';
import square2 from '../assest/square2.png';
import product from '../assest/product.jpg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function Farm() {
  const chartData = {
    series: [{
      name: "Wheat",
      data: [80, 60, 40, 20, 30, 60, 70, 80, 100, 110]
    },
    {
      name: "Rice",
      data: [120, 100, 80, 60, 50, 55, 65, 70, 85, 90]
    },
    {
      name: "Sugarcane",
      data: [100, 80, 60, 40, 50, 55, 65, 70, 85, 90]
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
          <h3>Hello,John |</h3>
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
              <p className={style.Crop}>Crop</p>
              <div class="col" className={style.table1}>
                <p className={style.heading}>Name</p>
                <p className={style.paraghraph}>Area</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Wheat</p>
                <p className={style.currentyactive}>2.5 Acre</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Rice</p>
                <p className={style.currentyactive}>1.8 Acre</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Cotton</p>
                <p className={style.currentyactive}>0.9 Acre</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Sugarcane</p>
                <p className={style.currentyactive}>1.2 Acre</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" className={style.first} style={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '450px'
            }}>
              <p className={style.Crop}>Animal</p>
              <div class="col" className={style.table1}>
                <p className={style.heading}>Name</p>
                <p className={style.paraghraph}>Quantity</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Cow</p>
                <p className={style.currentyactive}>30</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Sheep</p>
                <p className={style.currentyactive}>50</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Pig</p>
                <p className={style.currentyactive}>10</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Goat</p>
                <p className={style.currentyactive}>68</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6" className={style.first} style={{
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', borderRadius: '15px', height: '450px',
            }}>
              <p className={style.Crop}>Buildings</p>
              <div class="col" className={style.table1}>
                <p className={style.heading}>Name</p>
                <p className={style.paraghraph}> Capacity</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Ararat Cottage</p>
                <p className={style.currentyactive}>30 tons</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Casa Bastidas</p>
                <p className={style.currentyactive}>50 tons</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Archbishop's House</p>
                <p className={style.currentyactive}>10 tons</p>
              </div>
              <hr />
              <div class="col" className={style.table1}>
                <p className={style.table3}>Museo Tostado</p>
                <p className={style.currentyactive}>68 tons</p>
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

export default Farm
