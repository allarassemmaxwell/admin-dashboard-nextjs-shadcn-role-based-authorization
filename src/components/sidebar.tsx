"use client";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, Users, Settings, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs"



export function AppSideBar() {
    const pathname = usePathname()
    const { user } = useUser()
    const metadata = user?.publicMetadata
    const role = metadata?.role

    const sideBarItems: {
        name: string,
        href: string,
        icon: React.ReactNode
    }[] = [
        {
            name: 'Dashboard',
            href: '/',
            icon: <Home />
        },
        ...(role && role === "admin" ? [
                { name: "Users", href: "/admin/users", icon: <Users /> }
            ] : []),
        {
            name: 'Support',
            href: '/',
            icon: <GitPullRequest />
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: <Settings />
        }
    ]
    return (
        <Sidebar side="left">
            <SidebarHeader>
                {/* <SidebarTrigger /> */}
                <h1 className="text-2xl font-bold text-primary">Admin Portal</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {sideBarItems.map((item, index) => (
                        <SidebarMenuItem key={index} >
                            <SidebarMenuButton asChild isActive={pathname === item.href}>
                                <Link href={item.href}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
