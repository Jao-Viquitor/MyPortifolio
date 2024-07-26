import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Profile} from "./components/Profile/Profile.jsx";

function App() {
    return (
        <div className={styles.App}>
            <Profile />
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
        </div>
    );
}

export default App;