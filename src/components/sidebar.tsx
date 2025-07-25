"use client";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Home, Users, Settings, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    {
        name: 'Users',
        href: '/users',
        icon: <Users />
    },
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

export function AppSideBar() {
    const pathname = usePathname()
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