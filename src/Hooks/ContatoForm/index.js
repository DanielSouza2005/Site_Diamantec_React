import { useContext } from "react"
import { ContatoFormContext } from "../../Context/ContatoForm";
import emailjs from '@emailjs/browser';

export const useContatoForm = () => {

    const { nomeContatoForm, setNomeContatoForm,
            assuntoContatoForm, setAssuntoContatoForm,
            mensagemContatoForm, setMensagemContatoForm, } = useContext(ContatoFormContext);

    const aoEnviarEmailContatoForm = () => {
        const templateParams = {
            from_name: nomeContatoForm,
            from_subject: assuntoContatoForm,
            message: mensagemContatoForm
        };

        emailjs
            .send('service_7sikbue', 'template_r1tqd0l', templateParams, {
                publicKey: 'xYRvWEI1yl4TRjYDO',
            })
            .then(
                () => {
                    console.log("E-mail enviado com sucesso!");
                },
                (error) => {
                    console.log("Erro ao enviar o e-mail.", error.text);
                },
            );
    }

    return {
        nomeContatoForm, setNomeContatoForm,
        assuntoContatoForm, setAssuntoContatoForm,
        mensagemContatoForm, setMensagemContatoForm,
        aoEnviarEmailContatoForm
    }
}