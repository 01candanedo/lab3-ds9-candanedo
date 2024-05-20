import "./../globals.css";
import * as React from "react"
import CustomDrawer from "@/components/customs/drawer";
import Link from "next/link"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <CustomDrawer />
            <main className="flex-1 ml-64 min-h-screen">
                {children}
            </main>
        </div>
    );
}
