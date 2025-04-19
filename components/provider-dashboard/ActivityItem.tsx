// ActivityItem.tsx
import { CheckCircle2, Clock, XCircle } from "lucide-react"

export function ActivityItem({ activity }: { activity: any }) {
  const statusIcon =
    activity.status === "approved"
      ? <CheckCircle2 className="h-5 w-5" />
      : activity.status === "rejected"
        ? <XCircle className="h-5 w-5" />
        : <Clock className="h-5 w-5" />

  const statusColor =
    activity.status === "approved"
      ? "bg-green-100 text-green-600"
      : activity.status === "rejected"
        ? "bg-red-100 text-red-600"
        : "bg-amber-100 text-amber-600"

  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${statusColor}`}>
          {statusIcon}
        </div>
        <div>
          <p className="font-medium">{activity.user}</p>
          <p className="text-sm text-muted-foreground">{activity.action}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">{activity.id}</p>
        <p className="text-xs text-muted-foreground">{activity.time}</p>
      </div>
    </div>
  )
}
