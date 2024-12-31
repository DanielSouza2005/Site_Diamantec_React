import styles from "./PortfolioCard.module.css";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const PortfolioCard = ({ id, imagem, alt, nome, area }) => {
    return (
        <div
            className={styles.portfolioConteudoCard}
            key={id}
        >
            <img
                src={imagem}
                alt={alt}
            />

            <div className={styles.portfolioConteudoCardInfo}>
                <div className={styles.portfolioConteudoCardInfoSection}>
                    <h4>{nome}</h4>
                    <p>{area}</p>
                    <a
                        href={imagem}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaMagnifyingGlassPlus
                            size={18}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;