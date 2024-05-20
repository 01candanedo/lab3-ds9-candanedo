
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
    return (
            <div className="relative w-full h-screen flex items-center justify-center">
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

                <div className="w-full rounded-lg max-w-md p-8 bg-[#A9CEDB] backdrop-blur-lg bg-opacity-70 dark:bg-opacity-70">
                    <Card className="w-full max-w-md z-10">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Recover Account</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div>
                                <Link className="w-full" href="/login">
                                    <Button className="w-full" type="submit">
                                        Send
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
    )
}