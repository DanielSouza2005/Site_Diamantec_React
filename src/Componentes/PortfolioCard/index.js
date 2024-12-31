import styles from "./PortfolioCard.module.css";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const PortfolioCard = ({ id, imagem, alt, nome, area, aoMostrarLightBox }) => {   
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
                    <a rel="noreferrer">
                        <FaMagnifyingGlassPlus
                            size={18}
                            onClick={() => aoMostrarLightBox(id)}
                        />
                    </a>
                </div>
            </div>            
        </div>
    );
}

export default PortfolioCard;