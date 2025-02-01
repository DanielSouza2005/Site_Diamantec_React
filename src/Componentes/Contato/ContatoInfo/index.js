import styles from "./ContatoInfo.module.css";

import { FiMapPin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const ContatoInfo = ({ endereco, instagram, linktree }) => {
    console.log(endereco);

    return (
        <div className={styles.contatoInfo}>
            <div className={styles.contatoInfoEndereco}>
                <div className={styles.contatoInfoEnderecoBox}>
                    <FiMapPin
                        size={48}
                    />
                    <h3>{endereco.titulo}</h3>
                    <p>{endereco.conteudo}</p>
                </div>
            </div>
            <div className={styles.contatoInfoSocial}>
                <div className={styles.contatoInfoSocialBox}>
                    <FaInstagram
                        size={48}
                    />
                    <h3>{instagram.titulo}</h3>
                    <p>{instagram.conteudo}</p>
                </div>
            </div>
            <div className={styles.contatoInfoSocial}>
                <div className={styles.contatoInfoSocialBox}>
                    <FaLink
                        size={48}
                    />
                    <h3>{linktree.titulo}</h3>
                    <p>{linktree.conteudo}</p>
                </div>
            </div>
        </div>
    );
}

export default ContatoInfo;