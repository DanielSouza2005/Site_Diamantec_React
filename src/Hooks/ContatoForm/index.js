import { useContext, useState } from "react"
import { ContatoFormContext } from "../../Context/ContatoForm";
import emailjs from '@emailjs/browser';

export const useContatoForm = () => {

    const { nomeContatoForm, setNomeContatoForm,
        assuntoContatoForm, setAssuntoContatoForm,
        mensagemContatoForm, setMensagemContatoForm, } = useContext(ContatoFormContext);

    const [carregandoContatoForm, setCarregandoContatoForm] = useState(false);
    const [erroContatoForm, setErroContatoForm] = useState(null);
    const [envioSucesso, setEnvioSucesso] = useState(false);

    const aoEnviarEmailContatoForm = async () => {

        setCarregandoContatoForm(true);
        setErroContatoForm(null);
        setEnvioSucesso(false);

        const templateParams = {
            from_name: nomeContatoForm,
            from_subject: assuntoContatoForm,
            message: mensagemContatoForm
        };

        try {
            await emailjs
                .send('service_7sikbue', 'template_r1tqd0l', templateParams, {
                    publicKey: 'xYRvWEI1yl4TRjYDO',
                });

            setEnvioSucesso(true);
        }
        catch (error) {
            setErroContatoForm(error.text);
            console.error("Erro ao enviar o e-mail.", error.text);
        }
        finally {
            setCarregandoContatoForm(false);
        }
    }

    return {
        nomeContatoForm, setNomeContatoForm,
        assuntoContatoForm, setAssuntoContatoForm,
        mensagemContatoForm, setMensagemContatoForm,
        carregandoContatoForm, setCarregandoContatoForm,
        erroContatoForm, setErroContatoForm, envioSucesso,
        aoEnviarEmailContatoForm
    }
}