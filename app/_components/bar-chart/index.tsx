"use client"

import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Bar, XAxis, YAxis, CartesianGrid, BarChart } from "recharts"

const data = [
  { name: "Jan", return: 4000 },
  { name: "Feb", return: 3000 },
  { name: "Mar", return: 2000 },
  { name: "Apr", return: 2780 },
  { name: "May", return: 1890 },
  { name: "Jun", return: 2390 },
  { name: "Jul", return: 3490 },
]

export function AnalyticsBarChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer
        className="h-[300px] w-full"
        config={{
          return: {
            label: "Return",
            color: "#5A29E4",
          },
        }}
      >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            stroke="hsl(var(--muted-foreground))"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            stroke="hsl(var(--muted-foreground))"
          />
          <ChartTooltip />
          <Bar dataKey="return" fill="#5A29E4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

