function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_open' : ''}`}>
        <div className={`popup__content popup__content_form popup__content_${props.name}`}>
         <button type="button" className="popup__close" aria-label="Закрыть окно" onClick={props.onClose}></button>
         <h3 className={`popup__title popup__title_${props.name}`}>{props.title}</h3>
          <form name={`form_${props.name}`} className="popup__form" novalidate>

            {props.children}

          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;