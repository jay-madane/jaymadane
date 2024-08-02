import { Badge } from "./ui/badge";
import Icons from "./ui/icons";

export default function TechStack() {
    return (
        <div className="text-white m-6 md:ml-16 mb-20">
            <h1 className="text-xl font-bold">Tech-Stack</h1>
            <div className="mb-5">
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="cpp" />
                    C
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="cpp" />
                    C++
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="python" />
                    Python
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="js" />
                    JavaScript
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="ts" />
                    TypeScript
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="react" />
                    React
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="nodejs" />
                    Node.js
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="expressjs" />
                    Express.js
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="nextjs" />
                    Next.js
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="tailwind" />
                    Tailwind CSS
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="mysql" />
                    MySQL
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="mongodb" />
                    MongoDB
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="prisma" />
                    Prisma
                </Badge>
                <Badge variant="outline" className="text-white text-lg rounded-none mr-4 border-zinc-600 bg-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mt-5">
                    <Icons type="aws" />
                    AWS
                </Badge>
            </div>
            <p>
                My strength is building core web applications which can serve people throughout the globe. I'm currently working with TypeScript, React and Node.js. For me my first ❤️ is C++.
            </p>
        </div>
    );
}
