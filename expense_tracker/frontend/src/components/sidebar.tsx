'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, DollarSign, Table, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'


// Sidebar component for the dashboard layout

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: DollarSign, label: 'Gastos Fijos', href: '/gastos-fijos' },
    { icon: Table, label: 'Tabla de Gastos', href: '/tabla-gastos' },
    { icon: CreditCard, label: 'TC Info', href: '/info-tc' },
]

export function Sidebar() {
    const pathname = usePathname() // Get the current pathname from the router

    
return (
    <div className="flex h-full flex-col gap-3 p-4">
    <div className="text-xl font-bold ">Expenses App</div>
    <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
        <Button
            key={item.href}
            variant={pathname === item.href ? 'secondary' : 'ghost'}
            className={cn(
            'justify-start',
            pathname === item.href && 'bg-secondary/60'
            )}
            asChild
        >
            <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
            </Link>
        </Button>
        ))}
    </nav>
    </div>
)
}