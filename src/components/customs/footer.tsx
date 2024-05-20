import Link from "next/link"

export default function CustomFooter() {
  return (
    <footer className="py-6">
            <div className="container mx-auto flex max-w-6xl items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <span className="text-sm">© 2024 Launder Link. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  className="text-sm text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                  href="#"
                >
                  Privacy Policy
                </Link>
                <Link
                  className="text-sm text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                  href="#"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </footer>
  )
}
