"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function StatusPieChart({ data }: { data: any[] }) {
  return (
    <Card className="relative group overflow-hidden">
      <CardHeader>
        <CardTitle>KYC Status Distribution</CardTitle>
        <CardDescription>Current verification status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
