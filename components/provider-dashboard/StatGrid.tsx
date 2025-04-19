import { StatCard } from "./StatCard"

interface Stat {
  name: string
  value: string
  change: string
  icon: React.ElementType
}

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.name} {...stat} />
      ))}
    </div>
  )
}
