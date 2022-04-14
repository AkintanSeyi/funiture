import React, { useEffect , useRef, useState} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs"
import {AiOutlineArrowUp , AiOutlineSchedule} from "react-icons/ai";
import {FaTwitterSquare, FaInstagramSquare, FaLinkedin , FaHammer} from "react-icons/fa"
import {GiPencilRuler , GiLargePaintBrush , GiPaintBucket } from "react-icons/gi";
import {   GrSchedule} from "react-icons/gr";
import {MdChair} from "react-icons/md"
import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {

  const A = useRef(null)

  const [a, setA] = useState("holder-holder");
  const [aa, setAA] = useState("fourth-section__label1")
  const [b , setB] = useState("fourth-section__input1")
  const [c, setC] = useState("fourth-section__label2")
  const [d, setD] = useState("fourth-section__input2")
  const [e, setE] = useState("fourth-section__label3")
  const [f, setF] = useState("fourth-section__input3")
  const [g, setG] = useState(true)
  const [h, setH] = useState('three-line')
  const [t, setT] = useState( "side-bar-edit")


  useEffect(() => {
    setA("holder-holder-edit")
    Aos.init({duration:2000});
  })

  

  const Run = () => {
    setAA("fourth-section__label1-edit ")
    setB("fourth-section__input1-edit")
  }

  const Run1 = () => {
setC("fourth-section__label2-edit ")
      setD("fourth-section__input2-edit")
      
  }

  const Run2 = () => {
    setE("fourth-section__label3-edit")
    setF("fourth-section__input3-edit")

  }

  const Look = () => {
setT("side-bar")
setH('three-line-edit')
  }

  const Look1 = () => {
    setT("side-bar-edit")
setH('three-line')
  } 

  
  



  return(
    <main className="main">

      <section className="main-section">
   
        <div  className=  {t}  >
        <div    ref={A} onClick= {Look1}     className= {h}></div>
      
          <section className="side-bar__holder">

               <ul className="side-bar__ul">
                 <li className="side-bar__li">home</li>
                 <li className="side-bar__li">about</li>
                 <li className="side-bar__li">team</li>
                 <li className="side-bar__li">contact</li>
                 <li className="side-bar__li">price</li>
               </ul>
              <div className="side-bar__icon-holder">
                <FaTwitterSquare   className="side-bar__icon" ></FaTwitterSquare>
                <FaInstagramSquare  className="side-bar__icon" ></FaInstagramSquare>
                <FaLinkedin   className="side-bar__icon" ></FaLinkedin>
              </div>
          </section>
        </div>


        

      <div  className = "first-section" >
        <section className={a}>
        <div    onClick={Look}     className="three-line"></div>
                <section className= 'holder'  >
                  <h2   data-aos = "fade-down"  className=  "h2">
               slick furnitures
                  </h2>
                  <p data-aos = "fade-right" className=  "p">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate inventore expedita vel corrupti nam dolorum suscipit nulla fugiat nisi esse nostrum voluptates, reprehenderit soluta mollitia odit vitae sapiente! Tempore, corporis?
                  </p>
                  <button data-aos = "fade-up" className=  "button">
                    show more
                  </button>
                </section>
        </section>
      
      </div>




  <div className="second-section">
    <h2 data-aos = "fade-down" className="second-section__h2">services we render</h2>
    <p data-aos = "fade-right" className="second-section__p">this are services we render at our company</p>
         <section className="second-section__holder">
                <div data-aos = "fade-right" className="second-section__1">
                  <section className="second-section__1-hold1">
                     <div className="second-section__1-hold1-head">
                       <div className="second-section__icon-holder">
<GiPencilRuler className="second-section__icon"></GiPencilRuler>
                       </div>
                       <h2 className="second-section__1-hold1-h2">

                       interior
                       </h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>



                  </section>



                  <section className="second-section__1-hold2">
                     <div className="second-section__1-hold1-head">
                     <div className="second-section__icon-holder">
<GiLargePaintBrush className="second-section__icon"></GiLargePaintBrush>
                       </div>
                       <h2 className="second-section__1-hold1-h2">Brush</h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>

                  </section>

                  <section className="second-section__1-hold3">
                     <div className="second-section__1-hold1-head">
                     <div className="second-section__icon-holder">
<FaHammer className="second-section__icon"></FaHammer>
                       </div>
                       <h2 className="second-section__1-hold1-h2">

                    hammer
                       </h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>

                  </section>
                </div>

                <div data-aos = "fade-up" className="second-section__2">
                
                <div className="second-section__img-holder"><img className="second-section__img" src="	https://whatifuniversefela.netlify.app/bg.png" alt="" />
             </div>
  
               
                </div>

                <div data-aos = "fade-left" className="second-section__3">
                  <section className="second-section__3-hold1">
                     <div className="second-section__1-hold1-head">
                     <div className="second-section__icon-holder">
<GiPaintBucket  className="second-section__icon"></GiPaintBucket>
                       </div>
                       <h2 className="second-section__1-hold1-h2">paint</h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>

                  </section>

                  <section className="second-section__3-hold2">
                     <div className="second-section__1-hold1-head">
                     <div className="second-section__icon-holder">
<AiOutlineSchedule  className="second-section__icon"></AiOutlineSchedule>
                       </div>
                       <h2 className="second-section__1-hold1-h2">

                     schedule
                       </h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     rademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>

                  </section>

                  <section className="second-section__3-hold3">
                     <div className="second-section__1-hold1-head">
                     <div className="second-section__icon-holder">
<MdChair className="second-section__icon"></MdChair>
                       </div>
                       <h2 className="second-section__1-hold1-h2">Designs</h2>
                     </div>
                     <p className="second-section__1-hold1-para">
                     Trademarks and logos not indicated on the list of OpenJS Foundation trademarks are trademarks™ or registered® trademarks of their respective holders
                     </p>

                  </section>
                </div>
         </section>
  </div>




<div className="third-section">

 <div className="third-section__video-holder">
 <video controls loop  muted  autoPlay  className="third-section__video">
      <source type="video/mp4" src={'./web-4/production ID_3768367.mp4'} />
  </video>
 </div>

<section className="third-section__holder">

  <div className="third-section__1">
     
<section className="third-section__1-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">
<img src={"./web-4/IMG_3263.JPG"}  alt="" className="third-section__img" />
</div>
<p className="third-section__p-span"> <AiOutlineArrowUp></AiOutlineArrowUp></p>
  <figcaption  className="third-section__figure-cap"> pacific chair </figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>


</section>

  </div>

  <div className="third-section__2">

  <section className="third-section__2-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">
<img src={"./web-4/IMG_3265.JPG"}  alt="" className="third-section__img" />
</div>
<p className="third-section__p-span"><AiOutlineArrowUp></AiOutlineArrowUp></p>
  <figcaption  className="third-section__figure-cap"> osuni</figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>


</section>


</div>

<div className="third-section__3">

<section className="third-section__3-holder">


<figure className="third-section__figure">
<div className="third-section__img-holder">

<img src={"./web-4/IMG_3262.JPG"}  alt="" className="third-section__img" />

</div>
<p className="third-section__p-span"><AiOutlineArrowUp></AiOutlineArrowUp></p>


  <figcaption  className="third-section__figure-cap"> long-road </figcaption>
</figure>
<p className="third-section__p">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquam officia est dolorum, ipsam omnis quam porro neque harum, accusamus expedita eaque dolore eos voluptatibus architecto? Maiores aperiam assumenda ex!
</p>

</section>
    
</div>

</section>
</div>
     

<div className="fourth-section">
    
       

 


    <section className="fourth-section__holder">
        
       <div className="fourth-section__part1">



         <section className="fourth-section__part1-holder">
       <h2 className="fourth-section__h2">contact</h2>
 <div className="fourth-section__1">
  <label htmlFor="fourth-section__input1" className={aa}>full name</label>
 <input  onClick={Run} id="fourth-section__input1"   type="text" className={b}/>
 </div>
      
 <div className="fourth-section__2">
 <label htmlFor="fourth-section__input2" className={c}>email</label>
<input onClick={Run1}  id="fourth-section__input2"   type="text" className={d} />
</div>


   
<div className="fourth-section__3">
<label htmlFor="fourth-section__input3" className={e}>message</label>
<input onClick={Run2} id="fourth-section__input3"  type="text" className={f} />
</div>
   
<button className="fourth-section__button">sign up</button>

         </section>

       </div>





    </section>
  </div>


  
  




  <div className="footer">
    <section className="footer__holder">

      <div data-aos = "fade-right" className="footer__part1">

        <h2 style={{textTransform: "capitalize" , color: "blueviolet"}} className="footer__h2">
        view
        </h2>
        <p style={{textTransform: "capitalize"}} className="footer__p">
        welcome to our worlds
        </p>
        <p className="footer__num">
08071434751

        </p>


      </div>

      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">Contact Us</li>
        <li className="footer__li1">Contact</li>
        <li className="footer__li1">Support
</li>
        <li className="footer__li1">Reviews</li>
        

      </ul>
      
     
      
      <ul data-aos = "slide-left" className="footer__ul">
      <li className="footer__li2">Social Media</li>
        <li className="footer__li1">Twitter</li>
        <li className="footer__li1">Instagram</li>
        <li className="footer__li1">facebook</li>
        <li className="footer__li1">Whatsapp</li>
        

      </ul>

      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">Elite Members</li>
        <li className="footer__li1">Pricing</li>
        <li className="footer__li1">Stories</li>
        <li className="footer__li1">sets</li>
        

      </ul>




    </section>

    <div  className="footer__name"> made by <span className="footer__span"> Patricia-Son</span>   </div>



  </div>




    























      </section>
    </main>
    
    )






}

export default  Index3;