import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {

    function UploadIcon(props: any) {
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
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
            <div className="flex items-center justify-center min-h-screen w-1/2 z-20 my-20 p-6 rounded-lg">
                <Card className="flex flex-col w-full max-w-md p-6 rounded-lg bg-transparent backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-2xl">
                    <CardHeader className="flex items-center justify-center">
                        <CardTitle className="text-2xl font-semibold text-center">Create Service</CardTitle>
                        <CardDescription>Data for create new services</CardDescription>
                    </CardHeader>
                    <form className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="name"
                                placeholder="Enter your name"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="products">
                                Products
                            </label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="products"
                            >
                                <option value="">Select a product</option>
                                <option value="product1">Product 1</option>
                                <option value="product2">Product 2</option>
                                <option value="product3">Product 3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="description"
                                placeholder="Enter a description"

                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                id="price"
                                placeholder="Enter the price"
                                type="number"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="image">
                                Image
                            </label>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    htmlFor="dropzone-file"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <UploadIcon className="w-10 h-10 mb-3 text-gray-400" />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span>
                                            or drag and drop{"\n                              "}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input className="hidden" id="dropzone-file" type="file" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <Link className="flex-1" href="/dashboard/main">
                                <Button className="w-full px-4 py-2 font-medium text-background dark:text-background bg-primary dark:bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-blue-800"
                                    type="submit">
                                    Save
                                </Button>
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>

            <div className="absolute bottom-0 left-0 w-full">
                <svg className="fill-[#A9CEDB]" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,128C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                </svg>
            </div>

        </div>

    )
}