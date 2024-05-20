import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import CustomFooter from "@/components/customs/footer"

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
        <>
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
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
                <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center gap-6 rounded-lg p-8 bg-[#142C42] shadow-xl md:flex-row backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20">
                    <div className="relative z-10 flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-lg bg-primary-foreground p-8 shadow-lg dark:bg-background">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl font-bold tracking-tight dark:text-primary">Register</h1>
                        </div>
                        <form className="grid w-full gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastname">Last Name</Label>
                                    <Input id="lastname" placeholder="Enter your last name" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" placeholder="Enter your username" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="age">Age</Label>
                                <Input id="age" placeholder="Enter your age" type="number" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Enter your password" type="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Link className="flex-1 mr-2" href="/login">
                                    <Button className="w-full" variant="outline">
                                        <ArrowLeftIcon className="h-4 w-4 mr-2" />
                                        Back
                                    </Button>
                                </Link>
                                <Link className="flex-1" href="/register">
                                    <Button className="w-full" type="submit">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="relative z-10 flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-lg bg-primary-foreground p-8 shadow-lg dark:bg-background">
                        <img
                            alt="Image"
                            className="rounded-lg object-cover w-full"
                            height={500}
                            src="/images/register_image.gif"
                            style={{
                                aspectRatio: "500/400",
                                objectFit: "cover",
                            }}
                            width={400}
                        />
                        <div className="grid gap-2">
                            <h2 className="text-xl font-bold">Explore our services</h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Save time and enjoy professional services just a click away.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CustomFooter/>
        </>
    )
}