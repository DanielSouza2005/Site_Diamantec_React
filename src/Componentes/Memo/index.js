import styles from "./Memo.module.css";

const Memo = ({ linhas, nome, id, placeholder, obrigatorio }) => {
    return (
        <textarea
            name={nome}
            id={id}
            placeholder={placeholder}
            required={obrigatorio}
            className={styles.CampoMemo}
            rows={linhas}
        >

        </textarea>
    );
}

export default Memo;