import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
    return <header className={styles.header}>
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </nav>
    </header>
};

export default NavigationBar;