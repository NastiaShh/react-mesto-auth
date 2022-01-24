import { useState, useEffect } from 'react'
import api from '../utils/Api.js'

function Main(props) {
  const [userName, setUserName] = useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = useState('Исследователь океана')
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        const userName = data.name
        setUserName(userName)
        const userDescription = data.about
        setUserDescription(userDescription)
        const userAvatar = data.avatar
        setUserAvatar(userAvatar)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <main class="content">
      <section class="profile">
        <div class="profile__container">
          <button type="button" class="profile__avatar-button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img class="profile__avatar" src={userAvatar} alt="Аватар" />
          </button>
          <div class="profile__info">
            <h1 class="profile__info-name">{userName}</h1>
            <button type="button" class="profile__info-edit" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p class="profile__info-description">{userDescription}</p>
          </div>
        </div>
        <button type="button" class="profile__add" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>

      <section class="places"></section>

    </main>
  )
}

export default Main