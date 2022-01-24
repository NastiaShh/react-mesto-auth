function Main(props) {
  return (
    <main class="content">
      <section class="profile">
        <div class="profile__container">
          <button type="button" class="profile__avatar-button" aria-label="Изменить аватар" onClick={props.onEditAvatar}>
            <img class="profile__avatar" src="/" alt="Аватар" />
          </button>
          <div class="profile__info">
            <h1 class="profile__info-name">Жак-Ив Кусто</h1>
            <button type="button" class="profile__info-edit" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
            <p class="profile__info-description">Исследователь океана</p>
          </div>
        </div>
        <button type="button" class="profile__add" aria-label="Добавить фотографию" onClick={props.onAddPlace}></button>
      </section>

      <section class="places"></section>

    </main>
  );
}

export default Main;