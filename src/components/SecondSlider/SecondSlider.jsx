import { useState } from 'react';
import './SecondSlider.sass';

const SecondSlider = () => {
  const startScroll = 270;
  const endScroll = 630;
  let blockScroll = document.getElementById('scroll');

  const [distance, setDistance] = useState(startScroll);

  const changeScroll = (e) => {
    let sizeDistance = e.targetTouches[0].clientY;
    if (sizeDistance < startScroll) {
      sizeDistance = startScroll;
    }
    if (sizeDistance > endScroll) {
      sizeDistance = endScroll;
    }
    blockScroll.scrollTop = sizeDistance - startScroll;
    setDistance(sizeDistance);
  };

  // function isOnVisibleSpace(element) {
  //   var bodyHeight = window.innerHeight;
  //   var elemRect = element.getBoundingClientRect();
  //   var offset   = elemRect.top;// - bodyRect.top;
  //   if(offset<0) return false;
  //   if(offset>bodyHeight) return false;
  //   return true;
  // }
  // var result = isOnVisibleSpace(blockScroll);
  // console.log(document.getElementById('secondSlider'));
  return (
    <div
      id="secondSlider"
      className="second"
      style={{ backgroundImage: 'url(./images/bg-main.png)' }}
    >
      <div className="second__scrollbar scrollbar">
        <button
          className="btn"
          onTouchMove={changeScroll}
          style={{
            top: `${distance}px`,
          }}
        >
          <img src="./icons/scroll.png" alt="scroll.png" />
        </button>
      </div>
      <div className="second__info info">
        <div className="info__title info__title">ТЕКСТ СООБЩЕНИЯ</div>
        <div className="info__description">
          <div className="info__wrapper">
            <div id="scroll" className="info__scroll">
              <p>
                <b>Lorem ipsum dolor sit amet,</b> consectetur adipisicing elit.
                Corrupti ad minima perspiciatis voluptates et, expedita cum
                eveniet iusto unde porro facere inventore nesciunt eligendi.
                Quas, consequuntur. Laboriosam recusandae veritatis impedit?
                Voluptate facilis est commodi provident velit delectus et harum,
                placeat distinctio, laudantium numquam odit quia ex ullam
                veritatis ducimus deleniti nemo non eum! Harum sequi, similique
                voluptatibus numquam id distinctio. Vitae minus distinctio nulla
                sunt doloribus nam laboriosam nihil deserunt exercitationem vel
                aliquid aliquam error, tempora quidem qui a officiis, unde
                molestias et obcaecati! Distinctio illo quis unde laudantium
                explicabo! Laudantium consequuntur molestiae blanditiis ipsa,
                commodi rerum, culpa repellendus vel exercitationem esse, earum
                odio qui? Quaerat nobis repellendus labore incidunt sint magni
                quisquam iure ipsum, veniam eligendi alias esse.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti ad minima perspiciatis voluptates et, expedita cum
                eveniet iusto unde porro facere inventore nesciunt eligendi.
                Quas, consequuntur. Laboriosam recusandae veritatis impedit?
                Voluptate facilis est commodi provident velit delectus et harum,
                placeat distinctio, laudantium numquam odit quia ex ullam
                veritatis ducimus deleniti nemo non eum! Harum sequi, similique
                voluptatibus numquam id distinctio. Vitae minus distinctio nulla
                sunt doloribus nam laboriosam nihil deserunt exercitationem vel
                aliquid aliquam error, tempora quidem qui a officiis,{' '}
                <b>unde</b>
                molestias et obcaecati! Distinctio illo quis unde laudantium
                explicabo! Laudantium consequuntur molestiae blanditiis ipsa,
                commodi rerum, culpa repellendus vel exercitationem esse, earum
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second__animation">
        <img src="./images/sperm_1.png" alt="sperm_1.png" />
        {/* <img src="./images/sperm_2.png" alt="sperm_2.png" />
        <img src="./images/sperm_3.png" alt="sperm_3.png" />
        <img src="./images/sperm_4.png" alt="sperm_4.png" />
        <img src="./images/sperm_5.png" alt="sperm_5.png" />
        */}
      </div>
    </div>
  );
};

export default SecondSlider;
