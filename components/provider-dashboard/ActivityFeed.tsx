// ActivityFeed.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ActivityItem } from "./ActivityItem"

export function ActivityFeed({ activity }: { activity: any[] }) {
  return (
    <Card className="relative group overflow-hidden">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions on the platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activity.map((item) => (
          <ActivityItem key={item.id} activity={item} />
        ))}
      </CardContent>
    </Card>
  )
}
