import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {

    return (
        <div className="relative w-full flex items-center justify-center">
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

            <section className="flex min-h-screen items-center justify-center px-4 z-20 rounded-lg">
                <div className="w-full max-w-md shadow-2xl">
                    <Card className="bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Exclusive Offer</CardTitle>
                            <CardDescription className="text-gray-500 dark:text-gray-400">
                                Take advantage of this limited-time promotion.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="service">Select Service</Label>
                                    <Select>
                                        <SelectTrigger className="border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-primary">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="service1">Service 1</SelectItem>
                                            <SelectItem value="service2">Service 2</SelectItem>
                                            <SelectItem value="service3">Service 3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-primary"
                                        defaultValue="Detergent"
                                        id="name"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="value">Value</Label>
                                    <Input
                                        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-primary"
                                        defaultValue="$4.99"
                                        id="value"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-primary"
                                    defaultValue="This is a promotional offer for our premium service."
                                    id="description"
                                    rows={3}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between">
                            <Button className="bg-primary dark:bg-primary text-white dark:text-background hover:bg-primary/90 focus:ring-primary">Save Offer</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

        </div>

    )
}