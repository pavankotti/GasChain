import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatCardProps {
  name: string
  value: string
  change: string
  icon: React.ElementType
}

export function StatCard({ name, value, change, icon: Icon }: StatCardProps) {
  return (
    <Card className="relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}
