import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import styles from './Root.module.css';

const Root = () => {
    return <>
    <NavigationBar />
    <main className={styles.content}>
    <Outlet />
    </main>
    </>
};

export default Root;