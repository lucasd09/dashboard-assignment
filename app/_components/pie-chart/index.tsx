"use client"

import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartLegend, ChartConfig } from "@/components/ui/chart"

const data = [
  { name: "Bitcoin", value: 400 },
  { name: "Ethereum", value: 300 },
  { name: "USDT", value: 200 },
  { name: "Cardano", value: 100 },
]

const config: ChartConfig = {
  bitcoin: {
    label: "Bitcoin",
    color: "hsl(var(--chart-1))",
  },
  ethereum: {
    label: "Ethereum",
    color: "hsl(var(--chart-2))",
  },
  usdt: {
    label: "USDT",
    color: "hsl(var(--chart-3))",
  },
  cardano: {
    label: "Cardano",
    color: "hsl(var(--chart-4))",
  },
}

export function AnalyticsPieChart() {
  return (
    <>
      <ChartContainer
        className="h-[300px] w-full"
        config={config}
      >
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.toLowerCase()})`} />
            ))}
          </Pie>
          <ChartTooltip />
        </PieChart>
      </ChartContainer>
      <ChartLegend />
    </>
  )
}

