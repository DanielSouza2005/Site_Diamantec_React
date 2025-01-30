import { createContext, useState } from "react";

export const ContatoFormContext = createContext();
ContatoFormContext.displayName = "Contato";

export const ContatoFormProvider = ({ children }) => {

    const [nomeContatoForm, setNomeContatoForm] = useState("");
    const [assuntoContatoForm, setAssuntoContatoForm] = useState("");
    const [mensagemContatoForm, setMensagemContatoForm] = useState("");

    return (
        <ContatoFormContext.Provider value={{
            nomeContatoForm, setNomeContatoForm,
            assuntoContatoForm, setAssuntoContatoForm,
            mensagemContatoForm, setMensagemContatoForm
        }}>
            {children}
        </ContatoFormContext.Provider>
    );
}