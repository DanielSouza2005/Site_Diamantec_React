import styles from "./Contato.module.css";
import ContatoForm from "./ContatoForm";
import ContatoInfo from "./ContatoInfo";

const Contato = ({ titulo, endereco, instagram, linktree }) => {
    return (
        <section
            id="contato"
            className={styles.contato}
        >
            <div className={styles.contatoContainer}>
                <div className={styles.contatoTitulo}>
                    <h3>{titulo}</h3>
                </div>

                <ContatoInfo
                    endereco={endereco}
                    instagram={instagram}
                    linktree={linktree}
                />

                <ContatoForm />
            </div>
        </section>
    );
}

export default Contato;