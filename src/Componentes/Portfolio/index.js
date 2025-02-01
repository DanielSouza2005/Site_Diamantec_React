import FsLightbox from "fslightbox-react";
import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolio.module.css";
import { useLightBox } from "../../Hooks/LightBox";

const Portfolio = ({ titulo, itens }) => {

    const { lightboxController, portfolio } = useLightBox();

    return (
        <section
            id="portfolio"
            className={styles.portfolio}
        >
            <div className={styles.portfolioContainer}>
                <div className={styles.portfolioContainerTitulo}>
                    <h3>{titulo}</h3>
                </div>
                <div className={styles.portfolioConteudo}>
                    {
                        itens.map((item) => (
                            <PortfolioCard
                                key={item.id}
                                item={item}
                            />
                        ))
                    }

                    <FsLightbox
                        toggler={lightboxController.toggler}
                        slide={lightboxController.slide}                        
                        sources={Object.values(portfolio)}
                    />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;