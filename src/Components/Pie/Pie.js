import React from 'react';
import { Pie } from 'react-chartjs-2';
// import '../../Components/Pie/Pie.css'

const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  labels: ['Showmax' ],
  datasets: [
    {
      label: '# of Votes',
      data: [12],
    //   data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#ACB9FF',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(255, 206, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
      ],
     
      borderColor: [
        '#ACB9FF',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(255, 206, 86, 1)',
        // 'rgba(75, 192, 192, 1)',
        // 'rgba(153, 102, 255, 1)',
        // 'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div className='header'>
      <h1 className='title' style={{textAlign:"left",marginLeft:"30px",marginBottom:"20px"}}>Pie Chart</h1>
      <span className="subscriptionPie" style={{display:"flex",marginLeft:"30px"}}><p style={{marginRight:"30px"}}>Monthly Subscription</p> <p>October 2013</p></span>
      {/* <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js'
        >
          Github Source
        </a>
      </div> */}
    </div>
    <Pie data={data} />
  </>
);

export default PieChart;