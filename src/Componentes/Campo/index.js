import styles from "./Campo.module.css";

const Campo = ({ children, tipo, nome, id, placeholder, obrigatorio, valor, onChange }) => {
    
    const aoDigitarInput = (evento) => {
        onChange(evento.target.value);
    }

    return (
        <input
            type={tipo}
            name={nome}
            id={id}
            placeholder={placeholder}
            required={obrigatorio}
            className={styles.CampoInput}
            value={valor}
            onChange={aoDigitarInput}
        >
            {children}
        </input>
    );
}

export default Campo;