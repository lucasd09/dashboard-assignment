import { MetricsCard } from "./_components/metrics-card";
import { OverviewChart } from "./_components/overview-chart";
import { OverviewTable } from "./_components/overview-table";

export default function Page() {
  return <div className="p-6 space-y-2">
    <div className="mb-6 flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">Resumed numbers of your crypto wallet</div>
      </div>
    </div>
    <div className="grid gap-4 md:grid-cols-3">
      <MetricsCard
        title="Your Balance"
        value="$74,892"
        change={{ value: "$1,340", percentage: "-2.1%", isPositive: false }}
      />
      <MetricsCard
        title="Your Deposits"
        value="$54,892"
        change={{ value: "$1,340", percentage: "+13.2%", isPositive: true }}
      />
      <MetricsCard
        title="Accrued Yield"
        value="$20,892"
        change={{ value: "$1,340", percentage: "+1.2%", isPositive: true }}
      />
    </div>
    <h1 className="text-lg font-semibold">Overview</h1>
    <OverviewChart />
    <OverviewTable />
  </div>
}