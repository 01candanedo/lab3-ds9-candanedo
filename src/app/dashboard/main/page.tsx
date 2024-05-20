"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"

export default function Component() {

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
                    tooltipLabel={(id: any) => `${id}`}
                    enableLabel={false}
                    role="application"
                    ariaLabel="A bar chart showing data"
                />
            </div>
        )
    }


    function CalendarIcon(props: any) {
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
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
            </svg>
        )
    }


    function DropletIcon(props: any) {
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
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
        )
    }


    function HandMetalIcon(props: any) {
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
                <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
                <path d="M14 11V9a2 2 0 1 0-4 0v2" />
                <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
                <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
            </svg>
        )
    }


    function LineChart(props: any) {
        return (
            <div {...props}>
                <ResponsiveLine
                    data={[
                        {
                            id: "Desktop",
                            data: [
                                { x: "Jan", y: 43 },
                                { x: "Feb", y: 137 },
                                { x: "Mar", y: 61 },
                                { x: "Apr", y: 145 },
                                { x: "May", y: 26 },
                                { x: "Jun", y: 154 },
                            ],
                        },
                        {
                            id: "Mobile",
                            data: [
                                { x: "Jan", y: 60 },
                                { x: "Feb", y: 48 },
                                { x: "Mar", y: 177 },
                                { x: "Apr", y: 78 },
                                { x: "May", y: 96 },
                                { x: "Jun", y: 204 },
                            ],
                        },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{
                        type: "point",
                    }}
                    yScale={{
                        type: "linear",
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 16,
                    }}
                    axisLeft={{
                        tickSize: 0,
                        tickValues: 5,
                        tickPadding: 16,
                    }}
                    colors={["#2563eb", "#e11d48"]}
                    pointSize={6}
                    useMesh={true}
                    gridYValues={6}
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
                    role="application"
                />
            </div>
        )
    }


    function LocateIcon(props: any) {
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
                <line x1="2" x2="5" y1="12" y2="12" />
                <line x1="19" x2="22" y1="12" y2="12" />
                <line x1="12" x2="12" y1="2" y2="5" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <circle cx="12" cy="12" r="7" />
            </svg>
        )
    }


    function PieChart(props: any) {
        return (
            <div {...props}>
                <ResponsivePie
                    data={[
                        { id: "Jan", value: 111 },
                        { id: "Feb", value: 157 },
                        { id: "Mar", value: 129 },
                        { id: "Apr", value: 150 },
                        { id: "May", value: 119 },
                        { id: "Jun", value: 72 },
                    ]}
                    sortByValue
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    cornerRadius={0}
                    padAngle={0}
                    borderWidth={1}
                    borderColor={"#ffffff"}
                    enableArcLinkLabels={false}
                    arcLabel={(d: any) => `${d.id}`}
                    arcLabelsTextColor={"#ffffff"}
                    arcLabelsRadiusOffset={0.65}
                    colors={["#2563eb"]}
                    theme={{
                        labels: {
                            text: {
                                fontSize: "18px",
                            },
                        },
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
                    }}
                    role="application"
                />
            </div>
        )
    }


    function ShirtIcon(props: any) {
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
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
            </svg>
        )
    }

    return (

        <div className="relative w-full flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <svg className="fill-[#A9CEDB]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
                </svg>
            </div>

            <div className="flex flex-col gap-6 p-6 md:p-10 z-20 w-full">
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-lg font-semibold text-primary dark:text-background">John Doe</h2>
                        <p className="text-primary dark:text-background">johndoe@example.com</p>
                        <div className="flex items-center gap-2 text-sm text-primary dark:text-background">
                            <CalendarIcon className="w-4 h-4" />
                            <span>Joined on May 15, 2023</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-primary dark:text-background">
                            <LocateIcon className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Drying</CardTitle>
                            <CardDescription>Laundry service</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center p-6">
                            <DropletIcon className="w-12 h-12 text-primary" />
                            <div className="ml-4">
                                <p className="text-2xl font-bold">1,234</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Items dried this month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Ironing</CardTitle>
                            <CardDescription>Laundry service</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center p-6">
                            <HandMetalIcon className="w-12 h-12 text-primary" />
                            <div className="ml-4">
                                <p className="text-2xl font-bold">789</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Items ironed this month</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Washed</CardTitle>
                            <CardDescription>Laundry service</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center p-6">
                            <ShirtIcon className="w-12 h-12 text-primary" />
                            <div className="ml-4">
                                <p className="text-2xl font-bold">2,345</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Items washed this month</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Sales per Week</CardTitle>
                            <CardDescription>Total revenue this week</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center p-6">
                            <div className="text-center">
                                <span className="text-4xl font-bold">$2,345</span>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">+12% from last week</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Sales per Month</CardTitle>
                            <CardDescription>Total revenue this month</CardDescription>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center p-6">
                            <div className="text-center">
                                <span className="text-4xl font-bold">$9,876</span>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">+18% from last month</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="h-full bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Weekly Revenue</CardTitle>
                            <CardDescription>Revenue by day of the week</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart className="aspect-[9/4]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Monthly Revenue</CardTitle>
                            <CardDescription>Revenue by month</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LineChart className="aspect-[9/4]" />
                        </CardContent>
                    </Card>
                    <Card className="h-full bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle>Service Usage</CardTitle>
                            <CardDescription>Usage of laundry services</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PieChart className="aspect-square" />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <svg className="fill-[#A9CEDB]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>

        </div>

    )
}