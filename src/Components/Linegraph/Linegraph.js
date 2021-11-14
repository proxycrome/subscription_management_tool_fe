import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
  labels: [],
  datasets: [
    {
      label: 'Subscription',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
    //   backgroundColor: 'rgb(255, 99, 132)',
    backgroundColor: '#A6CEE3',
    borderColor: '#A6CEE3'
    //   borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const LineChart = () => (
  <>
    <div className='header'>
      {/* <h1 className='title'>Line Chart</h1> */}
      {/* <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a>
      </div> */}
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;