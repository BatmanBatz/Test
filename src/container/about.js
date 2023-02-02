import React from "react";
import Slider from "react-slick";
import "./about.css"

const About = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:true
      }
    return(
        <div className="slider">
            <div className="Garchig"><h1>Улирлын онцлох</h1></div>  
            <Slider {...settings} >
                
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150349/300x0xwebp/ulirliin_ontslokh_angilal-owliin_sport.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150350/300x0xwebp/ulirliin_ontslokh_angilal-gaduur_huwtsas.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150351/300x0xwebp/owoldoo_beldey_angilal-owliin_gutal.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150352/300x0xwebp/owoldoo_beldey_angilal-agaar_tsewershuulegch.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150866/300x0xwebp/huuhdiin_dulaan_tsamts.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150354/300x0xwebp/owoldoo_beldey_angilal-malgai_oroolt.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    </div>
                    <h2 className="Text">Гадуур хувцас</h2>
                </div>
                <div className="Banner">
                    <div className="img">
                    <img src="https://cdn.cody.mn/img/150355/300x0xwebp/ulirliin_ontslokh_angilal-vitamin.jpg?h=08c1c739a45049993973d91851f79ff38cc5fc59" alt="/"/>
                    <h2 className="Text">Гадуур хувцас</h2>
                    </div>
                </div>  
            </Slider>
        </div>
    )
}
export default About;