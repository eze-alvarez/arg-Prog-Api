import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)
export default function IntervaloBarra ({ temperaturas }) {
  const scores = [temperaturas[0], temperaturas[3], temperaturas[6], temperaturas[9], temperaturas[12], temperaturas[15], temperaturas[18], temperaturas[21]]
  // const scores = [17, 20, 22, 26, 30, 35, 27, 23]
  const labels = ['12 am', '3 am', '6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm']

  const options = {
    fill: true,
    animations: false,
    scales: {
      y: {
        min: 0
      }
    },
    responsive: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: 'Mis datos',
          tension: 0.2,
          data: scores,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(60, 221, 28, 0.7)',
          color: 'rgba(245, 237, 239, 0.9)'
        }
      ],
      labels
    }
  }, [])

  return (
    <>
      <Bar
        data={data}
        options={options}
        style={{
          height: '100%',
          width: 'auto'
        }}
      />
    </>
  )
}
