import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CustomDrawer() {

    function ClockIcon(props: any) {
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        )
    }


    function HomeIcon(props: any) {
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )
    }


    function LogOutIcon(props: any) {
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
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
        )
    }


    function MountainIcon(props: any) {
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
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
            </svg>
        )
    }


    function MoveUpIcon(props: any) {
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
                <path d="M8 6L12 2L16 6" />
                <path d="M12 2V22" />
            </svg>
        )
    }


    function SettingsIcon(props: any) {
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
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        )
    }


    function UserIcon(props: any) {
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        )
    }

    return (
        <div className="flex h-screen fixed z-9">
            <div className="flex flex-col bg-[#51626F] text-gray-50 w-64 shrink-0 py-4 px-6 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
                <div className="flex items-center justify-between mb-6">
                    <div className="w-full space-y-6 py-8 px-1">
                        <div className="flex items-center justify-center">
                            <img
                                alt="Logo"
                                className="h-8 w-full rounded-lg"
                                height="5"
                                src="/images/Launder_Link_Slogan_Cut.png"
                                style={{
                                    aspectRatio: "5/40",
                                    objectFit: "cover",
                                }}
                                width="40"
                            />
                        </div>
                    </div>
                    <Button className="rounded-full" size="icon" variant="ghost">
                        <SettingsIcon className="h-5 w-5" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </div>
                <nav className="flex flex-col flex-1 gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <Button
              className="justify-start gap-3 px-4 py-2 rounded-md hover:bg-background focus:bg-background"
              variant="ghost"
            >
              <MoveUpIcon className="h-5 w-5" />
              <span>Promotions</span>
            </Button>
            <Button
              className="justify-start gap-3 px-4 py-2 rounded-md hover:bg-background focus:bg-background"
              variant="ghost"
            >
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </Button>
            <Button
              className="justify-start gap-3 px-4 py-2 rounded-md hover:bg-background focus:bg-background"
              variant="ghost"
            >
              <ClockIcon className="h-5 w-5" />
              <span>History</span>
            </Button>
            <Button
              className="justify-start gap-3 px-4 py-2 rounded-md hover:bg-background focus:bg-background"
              variant="ghost"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Main</span>
            </Button>
          </div>
          <Button
            className="justify-start gap-3 px-4 py-2 rounded-md hover:bg-background focus:bg-background"
            variant="ghost"
          >
            <LogOutIcon className="h-5 w-5" />
            <span>Log Out</span>
          </Button>
        </nav>
            </div>
            <main className="flex-1 p-8" />
        </div>
    )
}
