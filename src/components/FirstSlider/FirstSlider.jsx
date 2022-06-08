import './FirstSlider.sass';

const FirstSlider = ({ updateIndex }) => {
  return (
    <div className="first" style={{ backgroundImage: 'url(./images/bg.png)' }}
    >
      <div className="first__info info">
        <div className="info__title">ПРИВЕТ,</div>
        <div className="info__pretitle">
          ЭТО <b>НЕ</b>
          <br />
          КОММЕРЧЕСКОЕ
          <br />
          ЗАДАНИЕ
        </div>
        <button
          className="info__button button-next"
          onClick={() => updateIndex(1)}
        >
          Что дальше?
        </button>
      </div>
      <div className="first__static static">
        <img src="./images/bakti_2.png" alt="bakti_2.png" />
        <img src="./images/pink_sperm_1.png" alt="pink_sperm_1.png" />
      </div>
      <div className="first__animation">
        <div>
          <img src="./images/bakti_1.png" alt="bakti_1.png" />
        </div>
        <div>
          <img src="./images/bakti_3.png" alt="bakti_3.png" />
        </div>
        <div>
          <img src="./images/bakti_4.png" alt="bakti_4.png" />
        </div>
        <div>
          <img src="./images/bakti_5.png" alt="bakti_5.png" />
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
