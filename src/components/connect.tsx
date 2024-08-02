import { ArrowUpRight } from "lucide-react";

export default function Connect() {
    return (
        <div className="text-white m-10 md:ml-16 mb-32">
            <h1 className="text-xl font-bold mb-1">
                Let's Connect
            </h1>
            <div className="flex flex-col space-y-1 sm:text-base text-sm ">
                <div className="flex gap-4">
                    <p className="max-w-[6ch] w-full">Github</p>
                    <a className="flex items-center decoration-1 text-zinc-400 decoration-muted-foreground hover:text-white hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-white" target="_blank" href="https://github.com/jay-madane">
                        <p className="truncate">@jay-madane</p>
                        <ArrowUpRight className="h-4" />
                    </a>
                </div>

                <div className="flex gap-4">
                    <p className="max-w-[6ch] w-full">Linkedin</p>
                    <a className="flex items-center decoration-1 text-zinc-400 decoration-muted-foreground hover:text-white hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-white" target="_blank" href="https://www.linkedin.com/in/jay-madane-6859b9228/">
                        <p className="truncate">@Jay-Madane</p>
                        <ArrowUpRight className="h-4" />
                    </a>
                </div>

                <div className="flex gap-4">
                    <p className="max-w-[6ch] w-full">X</p>
                    <a className="flex items-center decoration-1 text-zinc-400 decoration-muted-foreground hover:text-white hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-white" target="_blank" href="https://x.com/JayMadane1">
                        <p className="truncate">@JayMadane1</p>
                        <ArrowUpRight className="h-4" />
                    </a>
                </div>

                <div className="flex gap-4">
                    <p className="max-w-[6ch] w-full">Email</p>
                    <a className="flex items-center decoration-1 text-zinc-400 decoration-muted-foreground hover:text-white hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-white" target="_blank" href="mailto:jaymadane133@gmail.com">
                        <p className="truncate">jaymadane133@gmail.com</p>
                        <ArrowUpRight className="h-4" />
                    </a>
                </div>

            </div>
        </div>
    );
}