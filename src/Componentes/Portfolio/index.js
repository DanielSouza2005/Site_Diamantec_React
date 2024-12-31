import PortfolioCard from "../PortfolioCard";
import styles from "./Portfolio.module.css";

const Portfolio = ({ titulo, itens }) => {
    return (
        <section id="portfolio"
            className={styles.portfolio} >
            <div className={styles.portfolioContainer}>
                <div className={styles.portfolioContainerTitulo}>
                    <h3>{titulo}</h3>
                </div>
                <div className={styles.portfolioConteudo}>
                    {
                        itens.map((item) => (
                            <PortfolioCard 
                                key={item.id}
                                id={item.id}
                                imagem={item.imagem}
                                alt={item.alt}
                                nome={item.nome}
                                area={item.area}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;