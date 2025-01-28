import Botao from "../../Botao";
import Campo from "../../Campo";
import Memo from "../../Memo";
import styles from "./ContatoForm.module.css";

const ContatoForm = ({ inputNome, inputEmail, inputAssunto, inputMensagem, inputBotao }) => {
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
                // method="post"
                // action="forms/contact.php"
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
                            >
                            </Campo>
                        </div>
                        <div className={`${styles.contatoColuna} 
                                         ${styles.contatoFormGroup}`}>
                            <Campo
                                tipo="text"
                                nome="email"
                                id="contatoEmail"
                                placeholder={inputEmail}
                                obrigatorio={true}
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
                        />
                    </div>

                    {/* carregando */}
                    {/* <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> */}
                    <div className={styles.contatoBotaoBox}>
                        <Botao>
                            {inputBotao}
                        </Botao>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContatoForm;