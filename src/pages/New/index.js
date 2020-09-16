import React from 'react';
import './styles.css';
import { FiMapPin, FiCalendar, FiCheck, FiUser, FiList, FiMessageCircle, FiLink, FiAlertOctagon } from 'react-icons/fi'

import logoImg from '../../assets/launcher_icon_white.png';
import cafe from '../../assets/cafe.jpg';



export default function News() {
  return (
    <>
    <div className="new-container">

    <div className="headerDefault">
    <a href="/" className="home-link" ><img class="logoImg" src={logoImg} alt="Inova" /> </a>
        </div>

     
    <h1>Café é muito bom</h1> 
          
    <div className="newSubtitle-box">
     
      <div className="statistcs-box">
      <button><FiAlertOctagon className="reportNew" size={25}/> Reportar notícia</button>  
        <FiCalendar size={25}  color="#848484" className="map-icon"/> 
          <div className="subtitle"> Há 6 minutos</div>
            <FiMapPin className="map-icon" size={25}  color="#E67C7C"/> 
              <div className="subtitle"> Alegrete/Rio Grande do Sul</div>
                </div>        
                  </div> 
                      
      <div className="newtext-box">
      <p> Lorem ipsum dolor sit amet. Est totam incidunt ut esse dolorem ut consectetur pariatur quo 
                    dolores rerum sed accusantium obcaecati. Sed alias expedita est voluptas expedita et voluptas alias est
                    rerum odio est ipsum aliquam.

                    Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                    ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                    sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                    usto incidunt. Non fugit quaerat ut temporibus dignissimos qui nostrum quasi At harum commodi.

                    Ut ipsum nihil et aperiam cupiditate et aliquid nulla sed quisquam omnis ut odit saepe qui itaque labore. In molestias
                     quis est autem sunt est reiciendis tempora vel molestiae vero aut molestias velit in quae culpa sed facere perspiciatis. 
                     Non saepe voluptatem qui sunt provident et repudiandae asperiores aut soluta doloremque 33 perspiciatis aliquid et voluptas 
                     provident.
                     
                     Lorem ipsum dolor sit amet. Est totam incidunt ut esse dolorem ut consectetur pariatur quo 
                    dolores rerum sed accusantium obcaecati. Sed alias expedita est voluptas expedita et voluptas alias est
                    rerum odio est ipsum aliquam.

                    Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                    ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                    sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                    usto incidunt. Non fugit quaerat ut temporibus dignissimos qui nostrum quasi At harum commodi.

                    Ut ipsum nihil et aperiam cupiditate et aliquid nulla sed quisquam omnis ut odit saepe qui itaque labore. In molestias
                     quis est autem sunt est reiciendis tempora vel molestiae vero aut molestias velit in quae culpa sed facere perspiciatis. 
                     Non saepe voluptatem qui sunt provident et repudiandae asperiores aut soluta doloremque 33 perspiciatis aliquid et voluptas 
                     provident.
                     </p>
                     </div>
                     

<div className="statusnews-box">

<div className="newsCheck-box">
  <FiCheck size={40}/>
    <div className="check-text"> Real </div>
      </div>

<div className="coment-box">

<div className="coment">
<div className="user-auditor">
  <div className="opnion-auditorBox">
    <div className="user-icon">
      <FiUser size={50} color="#848484" strokeWidth={1}/> 
        </div>
          <h2>Siclano da Silva</h2>
            </div>
              <div className="opnion-auditorBox">
                <FiList size={30} color="#009688"/> <h3>Verdadeiro</h3>
                  </div>
                    <div className="opnion-auditorBox">
                      <FiMessageCircle size={30} color="#009688"/>
                        <p className="opnion-text">Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                          ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                            sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                              usto incidunt.</p>
                                </div>
                                  </div>

<div className="user-auditor">
  <div className="opnion-auditorBox">
    <div className="user-icon">
      <FiUser size={50} color="#848484" strokeWidth={1}/> 
        </div>
          <h2>Beotrano de Souza</h2>
            </div>
              <div className="opnion-auditorBox">
                <FiList size={30} color="#009688"/> <h3>Verdadeiro</h3>
                  </div>
                    <div className="opnion-auditorBox">
                      <FiMessageCircle size={30} color="#009688"/>
                        <p className="opnion-text">Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                          ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                            sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                              usto incidunt.</p>
                                </div>
                                  </div>

                                  <div className="user-auditor">
  <div className="opnion-auditorBox">
    <div className="user-icon">
      <FiUser size={50} color="#848484" strokeWidth={1}/> 
        </div>
          <h2>Fulano de Tal</h2>
            </div>
              <div className="opnion-auditorBox">
                <FiList size={30} color="#009688"/> <h3>Verdadeiro</h3>
                  </div>
                    <div className="opnion-auditorBox">
                      <FiMessageCircle size={30} color="#009688"/>
                        <p className="opnion-text">Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                          ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                            sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                              usto incidunt.</p>
                                </div>
                                  </div>

<div className="user-auditor">
  <div className="opnion-auditorBox">
    <div className="user-icon">
      <FiUser size={50} color="#848484" strokeWidth={1}/> 
        </div>
          <h2>Michael Jackson</h2>
            </div>
              <div className="opnion-auditorBox">
                <FiList size={30} color="#009688"/> <h3>Falso</h3>
                  </div>
                    <div className="opnion-auditorBox">
                      <FiMessageCircle size={30} color="#009688"/>
                        <p className="opnion-text">Et laboriosam aliquid ab blanditiis quos ut enim vitae sed dolores corrupti cum neque voluptatibus sed magni facilis
                          ab praesentium eveniet? Eum vero dolores id commodi ipsum et voluptas error aut voluptates odio est voluptatum iste 
                            sed error exercitationem aut veritatis doloremque. Ea repudiandae perferendis quo sunt debitis non vitae dolorem qui 
                              usto incidunt.</p>
                                </div>
                                  </div>
                                    </div>




</div>
</div>


<div className="attachment">
 <h2> 
   <FiLink size={30} color="#009688"/>Anexos</h2>

<div className="attachment-box">
  <h3><li>Documentos</li></h3>
   <div className="documents">
    


</div>

<h3><li>Mídias</li></h3>
 <div className="media">
  <img src={cafe} alt=""/>
   </div>
    </div>
     </div>





<div className="footer"/>
</div>
       
</>
);
}