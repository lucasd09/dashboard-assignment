"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function NotificationsTab() {
  const [notifications, setNotifications] = useState(false)

  return <TabsContent value="notifications">
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Enable Notifications</Label>
          <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
        </div>
        <div className="space-y-2">
          <Label>Notification Types</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="price-alerts" />
              <Label htmlFor="price-alerts">Price Alerts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="news" />
              <Label htmlFor="news">News Updates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="account" />
              <Label htmlFor="account">Account Activity</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </TabsContent>
}