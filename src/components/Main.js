import { useState, useEffect } from 'react'
import api from '../utils/Api.js'
import Card from './Card.js'

function Main(props) {
  const [userName, setUserName] = useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = useState('Исследователь океана')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        const userName = userData.name
        setUserName(userName)
        const userDescription = userData.about
        setUserDescription(userDescription)
        const userAvatar = userData.avatar
        setUserAvatar(userAvatar)

        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button type="button" className="profile__avatar-button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1>
            <button type="button" className="profile__info-edit" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p className="profile__info-description">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>

      <section className="places">
        {
          cards.map(card => {
            return (
              <Card
                key={card._id}
                link={card.link}
                name={card.name}
                likes={card.likes.length}
                onCardClick={props.handleCardClick}
              />
            )
          })
        }
      </section>

    </main>
  )
}

export default Main