import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccountTab from "./_components/account-tab"
import AppearanceTab from "./_components/appearance-tab"
import NotificationsTab from "./_components/notifications-tab"
import SecurityTab from "./_components/security-tab"

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <AccountTab />
        <AppearanceTab />
        <NotificationsTab />
        <SecurityTab />
      </Tabs>
    </div>
  )
}

