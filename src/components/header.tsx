import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-2xl">
            <div className="container flex h-14 items-center justify-between">
                <SidebarTrigger />
                <button>Sign In</button>
            </div>
        </header>
    )
}
