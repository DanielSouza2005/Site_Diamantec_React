import styles from "./banner.module.css";

const Banner = (props) => {
    return(
        <section id="banner"
                 className={styles.banner}>
           <div className={styles.bannerContainer}>
                <h1>
                    <span>
                       {props.titulo} 
                    </span>
                </h1>
                <h2>{props.subTitulo}</h2>
                <div className={styles.btnSaibamais}>
                    <a href="#servicos">
                        {props.botaoSaibaMais}
                    </a>
                </div>
           </div>
        </section>
    );
}

export default Banner;