import style from '@styles/Parallax.module.scss';
import { Parallax, Background } from 'react-parallax';

const ParallaxCont = ({image, text}) => {
    // const image =   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
  return (
    <Parallax
      bgImage={image}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: 'absolute',
              background: `rgba(200, 80, 192, ${percentage * 1})`,
              left: '50%',
              top: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%,-50%)',
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
      <div className={style['prop']}><strong>{text}</strong></div>
      </div>
    </Parallax>
  );
};

export default ParallaxCont;
