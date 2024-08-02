import { Button } from "./ui/button";
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import Github from "./ui/icons";

export default function Navbar() {
    return (
        <nav className="text-white m-5 md:m-16 flex flex-col md:flex-row justify-between pb-6 border-b border-zinc-600 w-11/12">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="h-20 w-20 rounded-full shrink-0 overflow-hidden mr-0 md:mr-4 mb-4 md:mb-0">
                    <img className="flex h-22 w-20 items-center justify-center bg-muted relative bottom-2"
                        src="./self-photo.jpg"
                        alt="profile"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold">Jay Kiran Madane</h1>
                    <h4 className="font-semibold text-zinc-400 text-lg md:text-xl">B.Tech Undergrad</h4>
                    <h4 className="font-semibold text-zinc-400">JSPM's Rajarshi Shahu College of Engineering</h4>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
                <a href="https://drive.google.com/file/d/1FNTv6Z2-rJbeI2bcxlwtvHG8AK42RLyE/view?usp=drive_link" target="_blank">
                    <Button variant="outline" className="font-medium rounded-3xl shadow-lg group border bg-black shadow-sky-300/50 hover:shadow-sky-500 hover:bg-black hover:text-white mb-4 md:mb-0">
                        <p className="mr-1">Checkout my CV here!</p>
                        <ArrowUpRight />
                    </Button>
                </a>
                <div className="flex justify-center mt-4 md:mt-8">
                    <ul className="flex justify-evenly w-40">
                        <a href="https://github.com/jay-madane" className="hover:text-violet-400" target="_blank">
                            <Github type="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/jay-madane-6859b9228/" className="hover:text-blue-500" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="mailto:jaymadane133@gmail.com" className="hover:text-rose-400" target="_blank">
                            <Mail />
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}