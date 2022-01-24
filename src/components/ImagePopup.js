function ImagePopup() {
  return (
    <div class="popup popup_place-image">
      <div class="popup__content popup__content_image">
        <button type="button" class="popup__close popup__close_image" aria-label="Закрыть окно"></button>
        <figure class="figure">
          <img class="popup__image" src="/" alt="/" />
          <figcaption class="popup__image-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;