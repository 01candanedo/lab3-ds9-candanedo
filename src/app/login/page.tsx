import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Card,
} from "@/components/ui/card"


export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="flex w-full max-w-4xl items-center rounded-lg p-8 shadow-2xl">
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
            </div>
            <div>
              <Button className="w-full">Login</Button>
            </div>
            <Label htmlFor="register" className="mt-4 text-center">
            ¿No tienes una cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate aquí</a>
            </Label>
          </form>
        </div>
      </Card>
      <footer className="mt-10 text-center text-sm">
        <Label htmlFor="footer">© 2024 Launder Link</Label>
      </footer>
    </div>
  )
}