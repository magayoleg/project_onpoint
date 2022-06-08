import { useState } from 'react';
import './ThirdSlider.sass';

const ThirdSlider = () => {
  const [modalActive, setModalActive] = useState(false);

  const modalState = () => {
    console.log(modalActive);
    setModalActive(!modalActive);
  };

  return (
    <div
      className="third"
      style={{ backgroundImage: 'url(./images/bg-main.png)' }}
    >
      <div className="third__info info">
        <div className="info__title info__title_letter-spacing info__title_z-index">
          {modalActive ? 'ПРЕИМУЩЕСТВА' : 'КЛЮЧЕВОЕ СООБЩЕНИЕ'}
        </div>
        <div className="info__brend">
          BREND<span>XY</span>
        </div>
      </div>
      <div className="third__cards-wrap cards">
        <div className="cards__box-1">
          Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
          lorem sed risus ultricies
        </div>
        <div className="cards__box-2">
          A arcu cursus vitae
          <button className="cards__button button-plus" onClick={modalState}>
            Подробнее
          </button>
        </div>
      </div>
      <div className="third__bottle bottle">
        <img src="./images/bottle.png" alt="bottle.png" />
        <div className="third__animation bottle__animation">
          <img src="./images/bubbles/bubble_1.png" alt="bubble_1.png" />
          <img src="./images/bubbles/bubble_2.png" alt="bubble_2.png" />
          <img src="./images/bubbles/bubble_3.png" alt="bubble_3.png" />
          <img src="./images/bubbles/bubble_4.png" alt="bubble_4.png" />
          <img src="./images/bubbles/bubble_5.png" alt="bubble_5.png" />
          <img src="./images/bubbles/bubble_6.png" alt="bubble_6.png" />
          <img src="./images/bubbles/bubble_7.png" alt="bubble_7.png" />
          <img src="./images/bubbles/bubble_8.png" alt="bubble_8.png" />
        </div>
      </div>
      <dir
        className={
          modalActive ? 'modal__wrapper modal__active' : 'modal__wrapper'
        }
      >
        <div className="modal">
          <ul className="modal__list">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Faucibus pulvinar elementum integer enim</li>
            <li>Faucibus pulvinar elementum integer enim</li>
          </ul>
          <button type="button" className="modal__close" onClick={modalState}>
            <img src="./icons/close.png" alt="close.png" />
          </button>
        </div>
      </dir>
    </div>
  );
};

export default ThirdSlider;
