import { useTraducao } from "../../Hooks/Traducao";
import styles from "./Contato.module.css";
import ContatoForm from "./ContatoForm";
import ContatoInfo from "./ContatoInfo";

const Contato = ({ titulo }) => {

    const { conteudo } = useTraducao();

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
                    endereco={conteudo.contato.endereco}
                    instagram={conteudo.contato.redesSociais.instagram}
                    linktree={conteudo.contato.redesSociais.linktree}
                />

                <ContatoForm
                    inputNome={conteudo.contato.formInputs.nome}
                    inputAssunto={conteudo.contato.formInputs.assunto}
                    inputMensagem={conteudo.contato.formInputs.mensagem}
                    inputBotao={conteudo.contato.formInputs.botao}
                    statusEmailForm={conteudo.contato.envioEmailStatus}
                />
            </div>
        </section>
    );
}

export default Contato;