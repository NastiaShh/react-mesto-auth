function Card(props) {

  function handleCardClick() {
    props.onCardClick(props)
  }

  return (
    // <template className="template template_card">
      <article className="place">
        <button type="button" className="place__delete" aria-label="Удалить место"></button>
        <img className="place__image" src={props.link} alt={props.name} onClick={handleCardClick} />
        <div className="place__info">
          <h2 className="place__title">{props.name}</h2>
          <div className="place__like-container">
            <button type="button" className="place__like" aria-label="Поставить лайк"></button>
            <div className="place__like-count">{props.likes}</div>
          </div>
        </div>
      </article>
    // </template>
  )
}

export default Card