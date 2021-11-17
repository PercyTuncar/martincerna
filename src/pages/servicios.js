import React from 'react'    
 
 
import VideoBackground from '../components/VideoBackground'
import Layout from '../components/Layout'
import Body from '../components/Body'
import Reveal from 'react-reveal/Reveal/';
import './Service.css' 

 

// Export Template for use in CMS preview
export const serviciosTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home"> 
    <VideoBackground/>
    <Body/>
  </main>
)


// Export Default servicios for front-end
const servicios = ( ) => (
  <Layout >
    <serviciosTemplate /> 

    <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../assets/triangle_one.png')} alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../assets/camera_icon.png')} alt=""/></div>
              
            </div>
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2>Servicio de Fotografía Profesional <br/>  en Lima Perú</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Fotos profesionales para su gran día. Haz que el momento dure<br/>  para siempre a través de fotografías profesionales.!</p></Reveal>
                          
                            <Reveal effect="fadeInLeft" duration={1200}><a href="https://api.whatsapp.com/send?phone=51936485262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." className="seo_btn seo_btn_two btn_hover wow fadeInRight">CONTACTAR POR WHATSAPP</a></Reveal>
                        </div>
                    </div> 
                </div>
            </div>
        </section>


    <section className="event_about_area">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="event_about_img">
                            <img className="wow fadeInRight" data-wow-delay="0.2s" src={require("../assets/camera.png")} alt=""/>
                            <div className="about_bg"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="event_about_content">
                            <h2 className="wow fadeInUp">Ofrezco un servicio completo de fotografía.</h2>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Ofrezco un servicio completo de fotografía. Mi pasión es capturar momentos en el tiempo para que mis clientes puedan compartirlos con su familia y amigos ahora y para las generaciones venideras.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="event_price_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>Servicio de fotografía asequible</span>  para su evento especial.
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="analytices_price_item event_price_item wow fadeInUp">
              <div className="p_head">
                <h5>PAQUETE BODA</h5>
                <div className="rate">S/.299.00</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                1 Hora de preparación <i className="ti-check"></i>
                </li>
                <li>
                Ceremonia religiosa<i className="ti-check"></i>
                </li>
                <li>
                recepción <i className="ti-close"></i>
                </li>
                <li>
                50 fotos editadas profesionalmente <i className="ti-close"></i>
                </li>
                <li>
                30 fotos impresas en tamaño 4x6 <i className="ti-check"></i>
                </li>
                <li>
                1 photobook de 10 paginas <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn event_btn_two btn_hover">
                 Contratar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item active wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="p_head">
                <h5>PAQUETE QUINCEAÑOS</h5>
                <h6 className="tag">
                 
                </h6>
                <div className="rate">S/.299.00</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                1 Hora de preparación <i className="ti-check"></i>
                </li>
                <li>
                ceremonia religiosa <i className="ti-check"></i>
                </li>
                <li>
                recepción <i className="ti-close"></i>
                </li>
                <li>
                50 fotos editadas profesionalmente <i className="ti-close"></i>
                </li>
                <li>
                30 fotos impresas en tamaño 4x6 <i className="ti-check"></i>
                </li>
                <li>
                1 photobook de 10 paginas <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn btn_hover">
                 Contratar
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div
              className="analytices_price_item event_price_item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="p_head">
                <h5>PAQUETE BABY SHOWER</h5>
                <div className="rate">S/.149.00</div>
              </div>
              <ul className="list-unstyled p_body">
                <li>
                1 Hora de preparación <i className="ti-check"></i>
                </li>
                <li>
                ceremonia religiosa <i className="ti-check"></i>
                </li>
                <li>
                recepción <i className="ti-close"></i>
                </li>
                <li>
                30 fotos editadas profesionalmente <i className="ti-close"></i>
                </li>
                <li>
                20 fotos impresas en tamaño 4x6 <i className="ti-check"></i>
                </li> 
                <li>
                1 photobook de 5 paginas <i className="ti-check"></i>
                </li>
              </ul>
              <div className="text-center">
                <a href="/#" className="event_btn event_btn_two btn_hover">
                 Contratar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="erp_call_action_area">
            <div className="container">
                <div className="erp_action_content text-center"> 
                    <h3>¿Tiene un tipo de evento diferente?</h3>
                   
                    <p> <span>  No hay problema.</span> El servicio completo de fotografía es mi especialidad.</p>
                    <Reveal effect="fadeInLeft" duration={1200}><a href="https://api.whatsapp.com/send?phone=51936485262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." className="seo_btn seo_btn_two btn_hover wow fadeInRight">CONTACTAR POR WHATSAPP</a></Reveal>
                </div>
            </div>
        </section>
        <a href="https://api.whatsapp.com/send?phone=51936485262&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." class="float" target="_blank">
<i class="fa fa-whatsapp my-float"><img src="https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/whatsapp.svg?alt=media&token=41668558-4d5c-4df1-a6b6-2dd49af081a0"/></i>
</a>
  </Layout>
)

export default servicios