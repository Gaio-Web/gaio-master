import { useState } from "react";

import { Container } from "./styles";

import { BiSend, BiCheck } from "react-icons/bi";

export default function SendButton1({submit}) {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 2500);
    }, 2000);
    submit();
  };

  return (
    <Container>
    <button
      onClick={handleClick}
      className={isSending || isSent ? "sending" : ""}
    >
      <span className="icon material-symbols-outlined">
        {isSent ? <BiCheck size={26} color={'#fff'}/> : <BiSend  size={26} color={'#fff'}/>}
      </span>
      <span className="text">
        {isSending ? "Enviando ..." : isSent ? "Enviado" : "Enviar"}
      </span>
    </button>
    </Container>
  );
};