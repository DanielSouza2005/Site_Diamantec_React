import styles from "./Memo.module.css";

const Memo = ({ linhas, nome, id, placeholder, obrigatorio, valor, onChange }) => {

    const aoDigitarTextArea = (evento) => {
        onChange(evento.target.value);
    }

    return (
        <textarea
            name={nome}
            id={id}
            placeholder={placeholder}
            required={obrigatorio}
            className={styles.CampoMemo}
            rows={linhas}
            value={valor}
            onChange={aoDigitarTextArea}
        >

        </textarea>
    );
}

export default Memo;