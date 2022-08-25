import { NavBar } from "../Nav/NavBar";
import styles from "./Header.module.css";



const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar/>
        </header>
    )
}

export default Header;