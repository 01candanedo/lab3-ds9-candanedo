import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
} from "@/components/ui/card"
import CustomFooter from "@/components/customs/footer"

export default function LoginComponent() {
  return (
    <>
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
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center">
        <Card className="flex w-full max-w-4xl items-center rounded-lg p-8 bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
          <div className="hidden md:block w-1/2 rounded-lg bg-[#142C42] dark:bg-[#A9CEDB]">
            <img
              alt="Logo"
              className="h-full w-full object-cover rounded-full"
              height="400"
              src="/images/Launder_Link_Logo.png"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 p-8">
            <div className="flex items-center justify-center">
              <img
                alt="Logo"
                className="h-12 w-72 rounded-lg"
                height="200"
                src="/images/Launder_Link_Slogan_Cut.png"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <form className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter your username" required type="text" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Enter your password" required type="password" />
                <Label htmlFor="recover" className="mt-4 text-center">
                  <a href="/recover" className="text-blue-500 hover:underline">Forgot your password?</a>
                </Label>
              </div>
              <div>

                <Link className="w-full" href="/dashboard/main">
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                </Link>
              </div>
              <Label htmlFor="register" className="mt-4 text-center">
                ¿Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign Up</a>
              </Label>
            </form>
          </div>
        </Card>
      </div>
      <CustomFooter />
    </>
  )
}