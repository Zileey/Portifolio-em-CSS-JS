function ContactButton(){
    const handleClick = () => [
        window.location.href = "mailto::joaoassis@gec.inatel.br?subject=Contato pelo portifolio&body=Olá João!"
    ]
    return(
        <button className="contact-btn" onClick={handleClick}>
            CONTATE-ME
        </button>
    )
}
export default ContactButton;