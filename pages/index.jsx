import React from 'react';
import Head from 'next/head';
import Layout from './layout';
import Swiper from 'react-id-swiper';
import '../scss/swiper.scss';

export default function Home() {

  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

  return (
    <div>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <div id="parallax1" className="parallax-slide"></div>
        <div id="content1" className="content-slide">
          <section>
            <h2>OsVinyls</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia maxime vitae perferendis eum. Quos hic eos perferendis et nostrum praesentium illo. Illo nesciunt accusamus adipisci quae reprehenderit tempora magni enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, pariatur ratione suscipit nihil ullam incidunt qui corporis dolor eum voluptates doloremque reiciendis modi maxime libero nesciunt nemo porro recusandae aspernatur.</p>
          </section>
          <section className="homeIcons">
            <div>
              <img src="/assets/icons/music-and-multimedia.svg" alt="headphones" />
              <p>High Quality Sound</p>
            </div>
            <div>
              <img src="/assets/icons/lp.svg" alt="vinyl" />
              <p>30k+ Vinyls</p>
            </div>
            <div>
              <img src="/assets/icons/truck.svg" alt="shipping truck" style={{ width: "150px" }} />
              <p>Secure Shipping</p>
            </div>
            <div>
              <img src="/assets/icons/world.svg" alt="shipping truck" style={{ width: "150px" }} />
              <p>Worldwide Shipping</p>
            </div>
          </section>
          <section className="latestVinyls">
            <h2>Latest Vinyls</h2>
            <Swiper {...params}>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
              <div><img style={{ width: "100%" }} src="/assets/img/catb.jpg" alt="catfish" /></div>
            </Swiper>
          </section>
        </div>
        <div id="parallax2" className="parallax-slide">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.979244924564!2d-99.15878768468335!3d19.45646164495799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8e809ba508d%3A0xc46752aecea16e0!2sCipr%C3%A9s%20280%2C%20Atlampa%2C%20Cuauht%C3%A9moc%2C%2006450%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1579028788593!5m2!1ses!2smx" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen=""></iframe>
          <h2>¡Contamos con tienda fisica! <br /> ubicada en <br /> Cipres 280, Atlampa CDMX </h2>
        </div>
      </Layout>
      <style jsx>
        {`
          .parallax-slide {
            height: 100vh;
            background: url('assets/img/vinilo-hero.jpg') no-repeat center;
            background-size: cover;
            background-attachment: fixed;
          }

          .content-slide {
            background: #fff;
            text-align: center; 
          }
          
          .homeIcons {
            display: flex;
            justify-content: space-around;
            margin: 3em 0;
          }

          .homeIcons > div {
           display: flex; 
           flex-direction: column;
           align-items: center;
           justify-content: space-between;
          }

          .homeIcons > div img {
            width: 120px;
            object-fit: contain;
          }

          .homeIcons > div p {
            font-size: 2em;
            font-weight: bold;
          }

          .latestVinyls {
            text-align: center;
            font-size: 2em;
            font-weight: bold;
            padding: 0 2em;
          }
 
          #parallax2 {
            background: url('https://static.pexels.com/photos/226243/pexels-photo-226243.jpeg') no-repeat center;
            background-attachment: fixed;
          }
          
        `}
      </style>
    </div>
  )
};
