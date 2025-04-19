import { StatGrid } from "@/components/provider-dashboard/StatGrid"
import { VerificationTrendChart } from "@/components/provider-dashboard/VerificationTrendChart"
import { StatusPieChart } from "@/components/provider-dashboard/StatusPieChart"
import { PendingTable } from "@/components/provider-dashboard/PendingTable"
import { ActivityFeed } from "@/components/provider-dashboard/ActivityFeed"

import { FileCheck2, Clock, FileX, ShieldCheck, ShieldX } from "lucide-react"

const stats = [
  { name: "Total Requests", value: "1,540", change: "+12%", icon: FileCheck2 },
  { name: "Pending", value: "212", change: "+3%", icon: Clock },
  { name: "Approved", value: "1,234", change: "+10%", icon: ShieldCheck },
  { name: "Rejected", value: "94", change: "-5%", icon: ShieldX },
]

const kycData = [
  { name: "Jan", approved: 230, rejected: 23, pending: 50 },
  { name: "Feb", approved: 280, rejected: 19, pending: 40 },
  { name: "Mar", approved: 310, rejected: 20, pending: 35 },
  { name: "Apr", approved: 270, rejected: 25, pending: 60 },
]

const pieData = [
  { name: "Approved", value: 1234, color: "#22c55e" },
  { name: "Pending", value: 212, color: "#f59e0b" },
  { name: "Rejected", value: 94, color: "#ef4444" },
]

const pendingVerifications = [
  { id: "USR-001", user: "Amit Verma", documentCount: 3, submittedDate: "2025-04-16" },
  { id: "USR-002", user: "Sneha Singh", documentCount: 2, submittedDate: "2025-04-17" },
  { id: "USR-003", user: "Rohit Sharma", documentCount: 4, submittedDate: "2025-04-18" },
]

const recentActivity = [
  { id: "USR-001", user: "Amit Verma", action: "Approved Aadhaar & PAN", status: "approved", time: "2h ago" },
  { id: "USR-002", user: "Sneha Singh", action: "Rejected PAN", status: "rejected", time: "5h ago" },
  { id: "USR-003", user: "Rohit Sharma", action: "Submitted documents", status: "pending", time: "8h ago" },
]

export default function ProviderDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VerificationTrendChart data={kycData} />
        <StatusPieChart data={pieData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PendingTable verifications={pendingVerifications} />
        <ActivityFeed activity={recentActivity} />
      </div>
    </div>
  )
}
