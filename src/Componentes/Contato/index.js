import styles from "./Contato.module.css";
import ContatoForm from "./ContatoForm";
import ContatoInfo from "./ContatoInfo";

const Contato = ({ titulo, 
                   endereco, instagram, linktree, 
                   inputNome, inputEmail, inputAssunto, inputMensagem, inputBotao }) => {
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

                <ContatoForm 
                    inputNome={inputNome}
                    inputEmail={inputEmail}
                    inputAssunto={inputAssunto}
                    inputMensagem={inputMensagem}
                    inputBotao={inputBotao}
                />
            </div>
        </section>
    );
}

export default Contato;