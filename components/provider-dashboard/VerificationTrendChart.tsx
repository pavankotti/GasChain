"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function VerificationTrendChart({ data }: { data: any[] }) {
  return (
    <Card className="relative group overflow-hidden">
      <CardHeader>
        <CardTitle>KYC Verification Trends</CardTitle>
        <CardDescription>Monthly verification statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="approved" fill="#22c55e" name="Approved" />
              <Bar dataKey="rejected" fill="#ef4444" name="Rejected" />
              <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
