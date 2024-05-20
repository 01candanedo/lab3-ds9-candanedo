
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 py-12 z-20 bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                <div className="flex flex-col gap-6">
                    <Card>
                        <div className="flex items-center gap-4">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold">Password Recovery</CardTitle>
                            </CardHeader>
                        </div>
                        <CardContent>
                            <p className="text-gray-500 dark:text-gray-400">Follow the steps below to reset your password.</p>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="email">Enter Email</Label>
                                    <Input className="mt-1" id="email" placeholder="Enter your email" type="email" />
                                </div>
                                <Button className="w-full" type="submit">
                                    Send Verification Code
                                </Button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="code">Enter Verification Code</Label>
                                    <Input className="mt-1" id="code" placeholder="Enter the code sent to your email" type="text" />
                                </div>
                                <Button className="w-full" type="submit">
                                    Verify Code
                                </Button>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="password">Set New Password</Label>
                                    <Input className="mt-1" id="password" placeholder="Enter a new password" type="password" />
                                </div>
                                <div>
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input className="mt-1" id="confirm-password" placeholder="Confirm your new password" type="password" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Link
                                        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                        href="/login">
                                        <ArrowLeftIcon className="w-4 h-4" />
                                        Back
                                    </Link>
                                    <Button className="w-full" type="submit">
                                        Reset Password
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:block flex items-center justify-center">
                    <img
                        alt="Password recovery illustration"
                        className="w-full object-cover rounded-lg"
                        height={400}
                        src="/images/recover.gif"
                        style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                </div>
            </div>

        </div>
    )
}