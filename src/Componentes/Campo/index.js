import styles from "./Campo.module.css";

const Campo = ({ children, tipo, nome, id, placeholder, obrigatorio }) => {
    return (
        <input
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
            required={obrigatorio}
            className={styles.CampoInput}
        >
            {children}
        </input>
    );
}

export default Campo;