import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './NavBar.module.css';

function Footer () {

    return (
        <>
            <footer className={styles.social_list}>
                <ul><FaFacebook /></ul>
                <ul><FaInstagram /></ul>
                <ul><FaLinkedin /></ul>
            </footer>
        </>
    )

}

export default Footer;