const popupOpen = document.querySelector(".button-open-popup");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

popupOpen.addEventListener("click", () => {
  user.open();
});

popupClose.addEventListener("click", () => {
  user.close();
});

class Popup {
  constructor(popup, popupOpen, popupClose) {
    this.popup = popup;
    this.popupOpen = popupOpen;
    this.popupClose = popupClose;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  // Close Esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") this.close();
  }
}

// Использование:
const user = new Popup(popupOpen, popupClose);
