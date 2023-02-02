import React from "react";
import "./male.css"
import Slider from "react-slick";

const Male = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:true
      }
      return(
            <div className="slider2">
                <div className="Garchig"><h1>Улирлын онцлох</h1></div>
                <Slider {...settings}>
                    <div className="Banner2">
                        <div className="img2">
                            <img src="https://cdnp.cody.mn/spree/images/1371246/product/2106670997_outer-rotated.jpg" alt="/"/>
                            <h2 className="Text">Tibet superwarm GTX </h2>
                        </div>
                    </div>
                    <div className="Banner2">
                        <div className="img2">
                            <img src="https://cdnp.cody.mn/spree/images/1428126/product/open-uri20220818-37820-1vjw6df." alt="/"/>
                            <h2 className="Text">Tibet superwarm GTX </h2>
                        </div>
                    </div>
                    <div className="Banner2">
                        <div className="img2">
                            <img src="https://cdnp.cody.mn/spree/images/1120776/product/open-uri20211015-1774033-17gmb1x." alt="/"/>
                            <h2 className="Text">Tibet superwarm GTX </h2>
                        </div>
                    </div>
                    <div className="Banner2">
                        <div className="img2">
                            <img src="https://cdnp.cody.mn/spree/images/1536656/product/open-uri20221101-1195484-zjy2pv." alt="/"/>
                            <h2 className="Text">Tibet superwarm GTX </h2>
                        </div>
                    </div>
                    <div className="Banner2">
                        <div className="img2">
                            <img src="https://cdnp.cody.mn/spree/images/1125562/product/open-uri20211020-2114564-66c9ex." alt="/"/>
                            <h2 className="Text">Tibet superwarm GTX </h2>
                        </div>
                    </div>

                </Slider>
            </div>

      )
}
export default Male;