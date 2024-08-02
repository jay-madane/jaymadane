import About from "./components/about";
import Achievements from "./components/achievements";
import Connect from "./components/connect";
import Experiences from "./components/experiences";
import Navbar from "./components/navbar";
import Present from "./components/present";
import Projects from "./components/projects";
import TechStack from "./components/tech-stack";

export default function App() {
  return (
    <main className="w-full overflow-auto font-sans flex h-full justify-center bg-gradient-to-b from-sky-950 to-zinc-950 to-20%">
      <div className="lg:max-w-4xl overflow-hidden w-full">
        <Navbar />
        <About />
        <Present />
        <TechStack />
        <Projects />
        <Experiences />
        <Achievements />
        <Connect />
      </div>
    </main>
  );
}