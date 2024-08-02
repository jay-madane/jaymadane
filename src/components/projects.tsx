import { Globe2 } from "lucide-react";
import { Button } from "./ui/button";
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle } 
from "./ui/card";
import Github from "./ui/icons";
import { Badge } from "./ui/badge";

export default function Projects() {
    return (
        <div className="text-white m-6 md:ml-16 mb-20">
            <h1 className="text-xl font-bold mb-4">
                Projects <span className="text-zinc-600 text-sm">(sorted by most recent)</span>
            </h1>
            <Card className="bg-zinc-900 border-zinc-800 text-white rounded-2xl mb-4">
                <CardHeader>
                    <CardTitle className="text-lg">Cleverly - AI Based SaaS Platform</CardTitle>
                    <CardDescription className="text-zinc-400">Developed a SaaS AI platform with 5 advanced AI tools powered by Gemini and Replicate AI models. Enhanced user experience with secure authentication and efficient user management using Clerk Authentication.</CardDescription>
                </CardHeader>
                <CardContent>
                    <a href="https://cleverly-ai-client-side.vercel.app/" target="_blank">
                        <Button variant="secondary" className="mr-4 rounded-xl">
                            <Globe2 className="mr-1 h-4"/>
                            Website
                        </Button>
                    </a>
                    <a href="https://github.com/jay-madane/cleverly.ai-client-side" target="_blank">
                        <Button variant="secondary" className="rounded-xl">
                            <Github type="github-white" />
                            Repo
                        </Button>
                    </a>
                </CardContent>
                <CardFooter className="flex flex-wrap">
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        React
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        Shadcn
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        Node.js
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        Express.js
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        TypeScript
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        Tailwind CSS
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 text-sm md:mr-2 m-1">
                        MongoDB
                    </Badge>
                </CardFooter>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 text-white rounded-2xl mb-4">
                <CardHeader>
                    <CardTitle className="text-lg">Multi-threaded TCP Server</CardTitle>
                    <CardDescription className="text-zinc-400">Implemented server-client communication in C++ using Winsock2 library for Windows platforms. The server handles multiple client connections concurrently by utilizing a thread pool.</CardDescription>
                </CardHeader>
                <CardContent>
                    <a href="https://github.com/jay-madane/multithreaded-tcp-server-client" target="_blank">
                        <Button variant="secondary" className="mr-4 rounded-xl">
                            <Github type="github-white" />
                            Repo
                        </Button>
                    </a>
                </CardContent>
                <CardFooter className="flex flex-wrap">
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        C++
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        Socket Programming
                    </Badge>
                </CardFooter>
            </Card>
            <Card className="bg-zinc-900 border-zinc-800 text-white rounded-2xl mb-4">
                <CardHeader>
                    <CardTitle className="text-lg">PixelCART - E-commerce Platform</CardTitle>
                    <CardDescription className="text-zinc-400">PixelCART is an e-commerce website for a business, offering a visually appealing platform for customers to browse and purchase items. With user authentication and a user-friendly interface for seamless online transactions. The website enhances the business reach, providing a convenient and delightful shopping experience for customers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <a href="https://github.com/jay-madane/pixelcart-shop" target="_blank">
                        <Button variant="secondary" className="md:mr-4 rounded-xl m-1">
                            <Github type="github-white" />
                            Website Repo
                        </Button>
                    </a>
                    <a href="https://github.com/jay-madane/pixelcart-admin" target="_blank">
                        <Button variant="secondary" className="md:mr-4 rounded-xl m-1">
                            <Github type="github-white" />
                            Admin Repo
                        </Button>
                    </a>
                </CardContent>
                <CardFooter className="flex flex-wrap">
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        Next.js
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        React
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        TypeScript
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        Tailwind CSS
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        MySQL
                    </Badge>
                    <Badge variant="secondary" className="bg-zinc-400 md:mr-2 m-1">
                        NextAuth
                    </Badge>
                </CardFooter>
            </Card>
        </div>
    );
}