import styles from "./TimeCard.module.css";

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
                        <a href="#time">
                            <FaInstagram size={22}/>
                        </a>
                        <a href="#time">
                            <IoLogoLinkedin size={22} />
                        </a>
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