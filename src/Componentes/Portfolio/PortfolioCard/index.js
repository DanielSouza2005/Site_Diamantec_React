import { useLightBox } from "../../../Hooks/LightBox";
import styles from "./PortfolioCard.module.css";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const PortfolioCard = ({ item }) => {   

    const { aoMostrarLightBox } = useLightBox();

    return (
        <div
            className={styles.portfolioConteudoCard}
            key={item.id}
        >
            <img
                src={item.imagem}
                alt={item.alt}
            />

            <div className={styles.portfolioConteudoCardInfo}>
                <div className={styles.portfolioConteudoCardInfoSection}>
                    <h4>{item.nome}</h4>
                    <p>{item.area}</p>
                    <a rel="noreferrer">
                        <FaMagnifyingGlassPlus
                            size={18}
                            onClick={() => aoMostrarLightBox(item.id)}
                        />
                    </a>
                </div>
            </div>            
        </div>
    );
}

export default PortfolioCard;