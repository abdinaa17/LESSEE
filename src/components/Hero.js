import React from 'react'
import heroBG from "../assets/hero.png"
import {Link} from "react-router-dom"
import { Button } from 'antd';
import {FaTwitter, FaBehance, FaDribbble, FaFacebook} from 'react-icons/fa'
import Reviews from './Reviews';
// import AppCarousel from './Carousel';
const Hero = () => {
    return (
        <section className="hero container">
            <div className="hero__content">
                <div className="hero__left">
                    <div>
                        <h1>Get your Web development team in a few clicks!</h1>
                    <p>Your on-demand web development service. Simple, fast and affordable.</p>
                    </div>
                

                    <div className="hero__btns ">
                        <div className="demo">
                             <Button shape="round" type="primary" size="large">
                             <Link to="/contact" >Get In Touch</Link>
                         </Button>
                        </div>
                       
                         <div className="hero__pricing">
                        <Button type="link" size="large">
                            <Link to="/pricing" >See Pricing</Link>
                        </Button>
                         </div>
                       
                        
                    </div>

                    <div className="hero__socials">
                        <Link to="/"><FaTwitter/></Link>
                        <Link to="/"><FaBehance/></Link>
                        <Link to="/"><FaDribbble/></Link>
                        <Link to="/"><FaFacebook/></Link>
                    </div>

            </div>
            <div className="hero__right">

                 <img className='hero__img' src={heroBG} alt="hero"/>
            </div>
            </div>
           <Reviews />
        </section>
    )
}

export default Hero 
