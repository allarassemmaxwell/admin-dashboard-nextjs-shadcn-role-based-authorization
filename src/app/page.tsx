import { MetricCards, type Metrice } from "../components/metric-cards";
import { UsersTable } from "@/components/users-table";
import { Users, DollarSign, CreditCard, Activity } from "lucide-react";
import { AdBanner } from "@/components/ad-banner";
import { QuickLinks } from "@/components/quick-links";
import { getSubscriptionBreakdown, getSubscriptionsCount, getActiveSubsByPlanPerMonth, getUserCount, getUserList } from "@/app/admin/actions";
import { ChartPie } from "@/components/chart-pie";
import { ChartLine } from "@/components/chart-line";


export default async function Home() {
    const subscriptions = await getSubscriptionsCount();
    const subsBreakdown = await getSubscriptionBreakdown();
    const subsPerMonth = await getActiveSubsByPlanPerMonth();
    const userCount = await getUserCount();
    const usersClerk = await getUserList();
    
    const metrics: Metrice[] = [
        {
            title: 'Users',
            value: userCount,
            change:"+60% from last month",
            icon: <Users  className="h-4 w-4 text-muted-foreground"/>
        },
        {
            title: 'Subscriptions',
            value: subscriptions,
            change: "+100% from last month",
            icon: <CreditCard  className="h-4 w-4 text-muted-foreground"/>

        },
        {
            title: 'Revenue',
            value: "$200",
            change: "+200% from last year",
            icon: <DollarSign  className="h-4 w-4 text-muted-foreground"/>

        },
        {
            title: 'Last Month Subscriptions',
            value: 30,
            change: "+10% from last week",
            icon: <Activity  className="h-4 w-4 text-muted-foreground"/>

        }
    ]
    return (
        <main className="container mx-auto p-4 space-y-4">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <MetricCards metrics={metrics} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <ChartLine data={subsPerMonth} />
                </div>
                <div className="flex flex-row space-y-4">
                    <AdBanner />
                    <QuickLinks />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <div className="bg-card rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-bold mb-4">Recent Users</h2>
                        <UsersTable data={usersClerk.data} />
                    </div>
                </div>
                <ChartPie data={subsBreakdown} />
            </div>
        </main>
    );
}
