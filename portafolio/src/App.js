import './App.css';
import calculadora from './images/calculadora.png'
import css from './images/css.png'
import laberinto from './images/laberinto.png'
import novena_diablos from './images/novena_diablos.png'
import perfil from './images/perfil.jfif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          YONGBUM PARK
        </h1>
        <h3>
          Estudiante de tercer año Ingeniería En Ciencia De La Computación y Tecnologías De La Información
        </h3>
        <div className="links_div">
          <table className='links'>
            <tr>
              <th>
                <a href="mailto:par20117@gmail.com">
                  <img className= 'mail' alt='mail-imagen' src ='https://www.pngmart.com/files/7/Email-PNG-Free-Download.png' />
                </a>
              </th>
              <th>
                <a href="https://github.com/Yong-Park">
                  <img className= 'git' alt='git-imagen' src ='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                </a>
              </th>
              <th>
                <a href="https://www.linkedin.com/in/yong-park-933b7319a/">
                  <img className= 'link' alt='link-imagen' src ='https://cdn-icons-png.flaticon.com/512/61/61109.png' />
                </a>
              </th>
            </tr>
          </table>
        </div>
        <div className='button_navegacion'>
          <a href='#info'><button type="button">Proyectos</button></a>
          <a href='#sobre_mi'><button type="button" href='#'>Sobre Mi</button></a>
          <a href='#games'><button type="button" href='#'>Juegos que juego</button></a>
        </div>
      </header>
      <div className='info_1' id="info">
        <p className='Info_basica'>
          Conocimiento basico en React, aprendiendo respecto al hacking etico ya que es un tema del cual deseo especialzarme.
          Abajo puedes encontrar algunos proyectos trabajados y entregados. 
        </p>
      </div>
      <div className='proyectos'>
        <table className='project_galery'>
          <tr>
            <th className='container'>
              <img src={calculadora} alt='calc'/>
                <div className='contenido'>
                  <h1>
                    Calculadora Js
                  </h1>
                  <a href='http://juanelcaballo.club/20117/Lab_8/'><p className='Revisar'>Revisar proyecto <img className='abrir' src='https://cdn-icons-png.flaticon.com/512/60/60587.png?w=360' alt='seleccion' /></p></a>
                </div>
              </th>
              <th className='container'>
                <img src={css} alt='calc'/>
                  <div className='contenido'>
                    <h1>
                      CSS only
                    </h1>
                    <a href='http://juanelcaballo.club/20117/lab4/'><p className='Revisar'>Revisar proyecto <img className='abrir' src='https://cdn-icons-png.flaticon.com/512/60/60587.png?w=360' alt='seleccion' /></p></a>
                  </div>
              </th>
          </tr>
          <tr>
            <th className='container'>
              <img src={laberinto} alt='calc'/>
                <div className='contenido'>
                  <h1>
                    Laberinto Js
                  </h1>
                  <a href='http://www.juanelcaballo.club/20117/lab7/'><p className='Revisar'>Revisar proyecto <img className='abrir' src='https://cdn-icons-png.flaticon.com/512/60/60587.png?w=360' alt='seleccion' /></p></a>
                </div>
            </th>
            <th className='container'>
              <img src={novena_diablos} alt='calc'/>
                <div className='contenido'>
                  <h1>
                    HTML only
                  </h1>
                  <a href='http://juanelcaballo.club/20117/lab_3/'><p className='Revisar'>Revisar proyecto <img className='abrir' src='https://cdn-icons-png.flaticon.com/512/60/60587.png?w=360' alt='seleccion' /></p></a>
                </div>
            </th>
          </tr>
        </table>
      </div>
      <br />
      <div className='sobre_mi' id='sobre_mi'>
        <div className='info_basica'>
          <img src={perfil} alt='foto_perfil' />
          <div className='overlay'>
            <h1>
              YongBum Park
            </h1>
            <p>
              21 de Julio del 2000 <br />
              Nacionalidad: Republica de Corea <br />
              Residencia: Guatemala<br />
              Estado: Estudiante Universitario
            </p>
          </div>
        </div>
        <div className='timeline'>
          <ul>
            <li>
              <span>
                2007
              </span>
              <div className='tl-content'>
                <h3>
                  Colegio Montano
                </h3>
                <p>
                  Ingreso al Colegio Montano y comienzo de mi formacion academica. 
                </p>
              </div>
            </li>
            <li>
              <span>
                2016-2018
              </span>
              <div className='tl-content'>
                <h3>
                  Microsoft Office
                </h3>
                <p>
                  Particice en las competencias de Microsoft Office de Word
                </p>
              </div>
            </li>
            <li>
              <span>
                2017
              </span>
              <div className='tl-content'>
                <h3>
                  Competencia de Lego UVG
                </h3>
                <p>
                  Participe en una competencia de Lego en el 2017 en la UVG y ganamos el segundo lugar. 
                </p>
              </div>
            </li>
            <li>
              <span>
                2018
              </span>
              <div className='tl-content'>
                <h3>
                  Graduacion
                </h3>
                <p>
                  Graduado del Colegio Montano con promedio mayor a 90 y con el premio Doctor Montano. 
                </p>
              </div>
            </li>
            <li>
              <span>
                2019
              </span>
              <div className='tl-content'>
                <h3>
                  UNIS
                </h3>
                <p>
                  Ingrese a la Universidad del Itsmo de Guatemala en la carrera de Gastronomia.
                </p>
              </div>
            </li>
            <li>
              <span>
                2020-2022
              </span>
              <div className='tl-content'>
                <h3>
                  UVG
                </h3>
                <p>
                  Actualmente cursando el tercer año de la carrea en la universidad del Valle de Guatemala. 
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='games' id='games'>
        <div className='clipped-border'>
          <a href='https://www.playlostark.com/en-us'><img src='https://i.blogs.es/8df7b0/71aapizi3is/450_1000.jpeg' alt='lost ark' /></a>
        </div>
        <div className='clipped-border'>
          <a href='https://dl2.dyinglightgame.com/es/'><img src='https://as01.epimg.net/meristation/imagenes/2021/11/16/avances/1637075170_652708_1637077937_noticia_normal.jpg' alt='dying light 2' /></a>
        </div>
        <div className='clipped-border'>
          <a href='https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/'><img src='https://sm.ign.com/ign_latam/cover/y/yu-gi-oh-m/yu-gi-oh-master-duel_au8z.jpg' alt='yugiho' /></a>
        </div>
        <div className='clipped-border'>
          <a href='https://playoverwatch.com/en-us/'><img src='https://image.api.playstation.com/vulcan/ap/rnd/202010/0714/VBANminggz6xesnf7PokdsT4.png' alt='overwatch' /></a>
        </div>
        <div className='clipped-border'>
          <a href='https://heroesofthestorm.com/en-us/'><img src='https://static.heroesofthestorm.com/images/global/fb-share-1fcc54becc.jpg' alt='hots' /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
