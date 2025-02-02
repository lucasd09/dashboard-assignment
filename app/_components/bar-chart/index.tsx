"use client"

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", return: 4000 },
  { name: "Feb", return: 3000 },
  { name: "Mar", return: 2000 },
  { name: "Apr", return: 2780 },
  { name: "May", return: 1890 },
  { name: "Jun", return: 2390 },
  { name: "Jul", return: 3490 },
]

export function BarChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="return" fill="#5A29E4" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

