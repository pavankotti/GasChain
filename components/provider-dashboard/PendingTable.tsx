import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function PendingTable({ verifications }: { verifications: any[] }) {
  return (
    <Card className="relative group overflow-hidden">
      <CardHeader>
        <CardTitle>Pending Verifications</CardTitle>
        <CardDescription>KYC documents awaiting verification</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-2">ID</th>
                <th className="text-left py-3 px-2">User</th>
                <th className="text-left py-3 px-2">Documents</th>
                <th className="text-left py-3 px-2">Submitted Date</th>
                <th className="text-left py-3 px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {verifications.map((v: any) => (
                <tr key={v.id} className="border-b">
                  <td className="py-3 px-2 font-medium">{v.id}</td>
                  <td className="py-3 px-2">{v.user}</td>
                  <td className="py-3 px-2">{v.documentCount} documents</td>
                  <td className="py-3 px-2">{v.submittedDate}</td>
                  <td className="py-3 px-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/provider/verification/${v.id}`}>View</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
