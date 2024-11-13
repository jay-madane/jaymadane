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
    <main className="w-full font-sans flex h-full justify-center" style={{ background: "radial-gradient(ellipse 80% 70% at 50% -15%, rgba(175, 134, 222, 0.2), rgba(0, 0, 0, 0)), #121212" }}>
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