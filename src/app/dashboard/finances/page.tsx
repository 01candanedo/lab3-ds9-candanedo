"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {

    function ArrowLeftIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
            </svg>
        )
    }

    function BarChart(props: any) {
        return (
            <div {...props}>
                <ResponsiveBar
                    data={[
                        { name: "Jan", count: 111 },
                        { name: "Feb", count: 157 },
                        { name: "Mar", count: 129 },
                        { name: "Apr", count: 150 },
                        { name: "May", count: 119 },
                        { name: "Jun", count: 72 },
                    ]}
                    keys={["count"]}
                    indexBy="name"
                    margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                    padding={0.3}
                    colors={["#2563eb"]}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 16,
                    }}
                    axisLeft={{
                        tickSize: 0,
                        tickValues: 4,
                        tickPadding: 16,
                    }}
                    gridYValues={4}
                    theme={{
                        tooltip: {
                            chip: {
                                borderRadius: "9999px",
                            },
                            container: {
                                fontSize: "12px",
                                textTransform: "capitalize",
                                borderRadius: "6px",
                            },
                        },
                        grid: {
                            line: {
                                stroke: "#f3f4f6",
                            },
                        },
                    }}
                    tooltipLabel={({ id }) => `${id}`}
                    enableLabel={false}
                    role="application"
                    ariaLabel="A bar chart showing data"
                />
            </div>
        )
    }


    function CalendarClockIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h5" />
                <path d="M17.5 17.5 16 16.3V14" />
                <circle cx="16" cy="16" r="6" />
            </svg>
        )
    }


    function Package2Icon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
            </svg>
        )
    }


    function SearchIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        )
    }

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <svg className="fill-[#A9CEDB]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <svg className="fill-[#A9CEDB]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>

            <div className="flex flex-col z-20 w-full">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center gap-4">
                        <h1 className="font-semibold text-lg md:text-xl">Finances</h1>
                        <div className="ml-auto flex items-center gap-2">
                            <Button className="hidden sm:flex" variant="outline">
                                Today
                            </Button>
                            <Button className="hidden md:flex" variant="outline">
                                This Month
                            </Button>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button className="w-[280px] justify-start text-left font-normal mr-12" id="date" variant="outline">
                                        <CalendarClockIcon className="mr-2 h-4 w-4" />
                                        June 01, 2023 - June 30, 2023
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="end" className="w-auto p-0">
                                    <Calendar initialFocus mode="range" numberOfMonths={2} />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                                <CardHeader>
                                    <CardDescription>Daily Sales</CardDescription>
                                    <CardTitle>$2,389.00</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <BarChart className="aspect-[9/4]" />
                                </CardContent>
                            </Card>
                            <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                                <CardHeader>
                                    <CardDescription>Weekly Sales</CardDescription>
                                    <CardTitle>$14,543.00</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <BarChart className="aspect-[9/4]" />
                                </CardContent>
                            </Card>
                            <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                                <CardHeader>
                                    <CardDescription>Monthly Sales</CardDescription>
                                    <CardTitle>$58,276.00</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <BarChart className="aspect-[9/4]" />
                                </CardContent>
                            </Card>
                        </div>
                        <div className="border shadow-2xl rounded-lg">
                            <Table className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>SKU</TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-right">Profit</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="hover:bg-primary hover:text-background hover:dark:bg-primary hover:dark:text-background">
                                        <TableCell>PRD001</TableCell>
                                        <TableCell>Pants</TableCell>
                                        <TableCell>June 1, 2023</TableCell>
                                        <TableCell className="text-right">$125.00</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-primary hover:text-background hover:dark:bg-primary hover:dark:text-background">
                                        <TableCell>PRD002</TableCell>
                                        <TableCell>Tshirt</TableCell>
                                        <TableCell>June 2, 2023</TableCell>
                                        <TableCell className="text-right">$89.00</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-primary hover:text-background hover:dark:bg-primary hover:dark:text-background">
                                        <TableCell>PRD003</TableCell>
                                        <TableCell>Jeans</TableCell>
                                        <TableCell>June 3, 2023</TableCell>
                                        <TableCell className="text-right">$175.00</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-primary hover:text-background hover:dark:bg-primary hover:dark:text-background">
                                        <TableCell>PRD004</TableCell>
                                        <TableCell>Socks</TableCell>
                                        <TableCell>June 4, 2023</TableCell>
                                        <TableCell className="text-right">$210.00</TableCell>
                                    </TableRow>
                                    <TableRow className="hover:bg-primary hover:text-background hover:dark:bg-primary hover:dark:text-background">
                                        <TableCell>PRD005</TableCell>
                                        <TableCell>Sack</TableCell>
                                        <TableCell>June 5, 2023</TableCell>
                                        <TableCell className="text-right">$145.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <Card className="backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 shadow-2xl bg-[#142C42]">
                                <CardHeader>
                                    <CardDescription className="text-background dark:text-primary">Total Profit</CardDescription>
                                    <CardTitle className="text-background dark:text-primary text-2xl">$744.00</CardTitle>
                                </CardHeader>
                        </Card>
                    </div>
                </main>
            </div>

        </div>

    )
}