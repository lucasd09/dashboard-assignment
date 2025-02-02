"use client"

import { Card } from "@/components/ui/card"
import { MetricsCard } from "../_components/metrics-card"
import { OverviewChart } from "../_components/overview-chart"
import { PieChart } from "../_components/pie-chart"
import { BarChart } from "../_components/bar-chart"
import { OverviewTable } from "../_components/overview-table"

export default function Page() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Analytics</h1>
          <div className="text-sm text-muted-foreground">Detailed insights into your crypto portfolio</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <MetricsCard
          title="Total Portfolio Value"
          value="$124,892"
          change={{ value: "$3,340", percentage: "+2.7%", isPositive: true }}
        />
        <MetricsCard
          title="Total Profit/Loss"
          value="$24,892"
          change={{ value: "$1,340", percentage: "+5.6%", isPositive: true }}
        />
        <MetricsCard
          title="Best Performing Asset"
          value="ETH"
          change={{ value: "$2,340", percentage: "+12.3%", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Portfolio Performance</h2>
          <OverviewChart />
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
          <PieChart />
        </Card>
      </div>

      <Card className="p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Returns</h2>
        <BarChart />
      </Card>

      <div>
        <h2 className="text-lg font-semibold mb-4">Asset Performance</h2>
        <OverviewTable />
      </div>
    </div>
  )
}

