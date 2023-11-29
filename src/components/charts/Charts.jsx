import React from 'react'
import './charts.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Charts = () => {
  const data = [
    {
      name: 'January',
      Now: 4000,
      Then: 2400,
      Total: 6400,
    },
    {
      name: 'February',
      Now: 3000,
      Then: 1398,
      Total: 4398,
    },
    {
      name: 'March',
      Now: 2000,
      Then: 9800,
      Total: 11800,
    },
    {
      name: 'April',
      Now: 2780,
      Then: 3908,
      Total: 6688,
    },
    {
      name: 'May',
      Now: 1890,
      Then: 4800,
      Total: 6690,
    },
    {
      name: 'June',
      Now: 2390,
      Then: 3800,
      Total: 6190,
    },
    {
      name: 'July',
      Now: 3490,
      Then: 4300,
      Total: 2100,
    },
  ];
  return (
    <div className='chart'>
      <p className="title">Last 7 Months(Revenue)</p>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Then" stackId="a" fill="#8884d8" />
          <Bar dataKey="Total" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Now" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Charts