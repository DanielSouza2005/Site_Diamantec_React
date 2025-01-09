import { Link } from "react-scroll";
import styles from "./banner.module.css";

const Banner = (props) => {
    return (
        <section
            id="banner"
            className={styles.banner}
        >
            <div className={styles.bannerContainer}>
                <h1>
                    <span>
                        {props.titulo}
                    </span>
                </h1>
                <h2>{props.subTitulo}</h2>
                <div className={styles.btnSaibamais}>
                    <Link
                        to="servicos"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={750}>
                        {props.botaoSaibaMais}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Banner;