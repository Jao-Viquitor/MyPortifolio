import styles from "./App.module.css";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Index } from "./components/Hero/index.jsx";
import { Navbar } from "./components/Navbar";
import {Projects} from "./components/Projects";
import { Profile } from "./components/Profile";

function App() {
    return (
        <div className={styles.App}>
            <Profile />
            <Navbar />
            <Index />
            <About />
            <Experience />
            <Projects />
        </div>
    );
}

export default App;