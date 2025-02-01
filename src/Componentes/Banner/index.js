import { Link } from "react-scroll";
import styles from "./banner.module.css";

const Banner = ({ titulo, subTitulo, botaoSaibaMais }) => {
    return (
        <section
            id="banner"
            className={styles.banner}
        >
            <div className={styles.bannerContainer}>
                <h1>
                    <span>
                        {titulo}
                    </span>
                </h1>
                <h2>{subTitulo}</h2>
                <div className={styles.btnSaibamais}>
                    <Link
                        to="servicos"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={750}
                    >
                        {botaoSaibaMais}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;