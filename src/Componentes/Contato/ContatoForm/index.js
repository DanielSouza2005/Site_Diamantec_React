import Botao from "../../Botao";
import Campo from "../../Campo";
import Memo from "../../Memo";
import styles from "./ContatoForm.module.css";
import { useContatoForm } from "../../../Hooks/Contato";

const ContatoForm = ({ inputNome, inputAssunto, inputMensagem, inputBotao, statusEmailForm }) => {

    const {
        nomeContatoForm, setNomeContatoForm,
        assuntoContatoForm, setAssuntoContatoForm,
        mensagemContatoForm, setMensagemContatoForm,
        carregandoContatoForm, erroContatoForm, envioSucesso,
        aoEnviarEmailContatoForm
    } = useContatoForm();

    const aoEnviarEmail = (evento) => {
        evento.preventDefault();

        aoEnviarEmailContatoForm();

        setNomeContatoForm("");
        setAssuntoContatoForm("");
        setMensagemContatoForm("");
    }

    return (
        <div className={styles.contatoBottom}>
            <div className={styles.contatoMapa}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14717.394176415!2d-47.3492288!3d-22.7524429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73aa44217bc4cce7!2sCol%C3%A9gio%20Politec!5e0!3m2!1spt-BR!2sbr!4v1659487521159!5m2!1spt-BR!2sbr"
                    title="Colégio Politec"
                >
                </iframe>
            </div>
            <div className={styles.contatoForm}>
                <form
                    onSubmit={(evento) => aoEnviarEmail(evento)}
                >
                    <div className={styles.contatoRow}>
                        <div className={`${styles.contatoColuna} 
                                         ${styles.contatoFormGroup}`}>
                            <Campo
                                tipo="text"
                                nome="nome"
                                id="contatoNome"
                                placeholder={inputNome}
                                obrigatorio={true}
                                valor={nomeContatoForm}
                                onChange={valor => { setNomeContatoForm(valor) }}
                            >
                            </Campo>
                        </div>
                    </div>
                    <div className={styles.contatoFormGroup}>
                        <Campo
                            tipo="text"
                            nome="assunto"
                            id="contatoAssunto"
                            placeholder={inputAssunto}
                            obrigatorio={true}
                            valor={assuntoContatoForm}
                            onChange={valor => { setAssuntoContatoForm(valor) }}
                        >
                        </Campo>
                    </div>
                    <div className={styles.contatoFormGroup}>
                        <Memo
                            nome="Mensagem"
                            id="contatoMensagem"
                            linhas="5"
                            placeholder={inputMensagem}
                            obrigatorio={true}
                            valor={mensagemContatoForm}
                            onChange={valor => { setMensagemContatoForm(valor) }}
                        />
                    </div>

                    <div className={styles.statusEnvioEmail}>
                        {
                            carregandoContatoForm &&
                            <div className={styles.carregando}>{statusEmailForm.carregando}</div>
                        }

                        {
                            !carregandoContatoForm && erroContatoForm && (
                                <div className={styles.erroMensagem}>{statusEmailForm.erro}</div>
                            )}

                        {
                            !carregandoContatoForm && envioSucesso && (
                                <div className={styles.mensagemEnviada}>{statusEmailForm.sucesso}</div>
                            )}
                    </div>

                    {
                        !carregandoContatoForm && !envioSucesso &&
                        <div className={styles.contatoBotaoBox}>
                            <Botao
                                tipo="submit"
                            >
                                {inputBotao}
                            </Botao>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
}

export default ContatoForm;