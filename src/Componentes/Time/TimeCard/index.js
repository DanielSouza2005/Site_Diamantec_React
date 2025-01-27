import styles from "./TimeCard.module.css";
import { Link } from "react-scroll";

import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const TimeCard = ({ id, imagem, alt, nome, cargo }) => {
    return (
        <div key={id} className={styles.timeCard}>
            <div className={styles.timeCardConteudo}>
                <div className={styles.timeCardConteudoImagem}>
                    <img
                        src={imagem}
                        alt={alt}
                    />
                    <div className={styles.social}>
                        <Link
                            to="time"
                            spy={true}
                            smooth={true}
                            duration={750}
                        >
                            <FaInstagram size={22} />
                        </Link>
                        <Link
                            to="time"
                            spy={true}
                            smooth={true}
                            duration={750}
                        >
                            <IoLogoLinkedin size={22} />
                        </Link>
                    </div>
                </div>
                <div className={styles.timeCardConteudoInfo}>
                    <h4>{nome}</h4>
                    <span>{cargo}</span>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;