import styles from "./SobreNos.module.css";
import sobreNosImagem from "../../Imagens/sobre.jpg";

const SobreNos = ({ titulo, alt, textos }) => {
    return (
        <section id="sobre"
            className={styles.sobre}>
            <div className={styles.sobreContainer}>
                <div className={styles.sobreTitulo}>
                    <h3> {titulo} </h3>
                </div>
                <div className={styles.sobreConteudo}>
                    <div className={styles.sobreConteudoImagem}>
                        <img
                            src={sobreNosImagem}
                            alt={alt}
                        />
                    </div>
                    <div className={styles.sobreConteudoTexto}>
                        {
                            textos.map((texto, index) => (
                                <>
                                    <h3 key={index}></h3>
                                    {texto}
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreNos;