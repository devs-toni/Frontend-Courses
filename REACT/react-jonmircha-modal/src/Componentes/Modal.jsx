import '../Styles/Modal.css'
const Modal = ({ children, close, isOpen }) => {

    const handleModalContainerClick = e => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && 'is-open'}`} onClick={close}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button onClick={close} className="modal-close">X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal;