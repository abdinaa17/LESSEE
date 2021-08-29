import React from 'react'
import { Link} from 'react-router-dom'



const AppFooter = () => {
    return (
        <footer className="footer container">
            <div className="footer__top">
                 <h1 className="logo"> <Link to="/"> LESSEE</Link></h1>
                 <p>© 2021 LESSEE</p>

            </div>
            
             <div className="footer__content">
                 <div className="footer__content--left">
                     <ul><li><Link to="/">Home</Link></li></ul>
                     <ul><li><Link to="/services">Services</Link></li></ul>
                     <ul><li><Link to="/projects">Projects</Link></li></ul>
                     <ul><li><Link to="/pricing">Pricing</Link></li></ul>
                     <ul><li><Link to="/contact">contact</Link></li></ul>
                 </div>
                 <div className="footer__content--center">
                     <ul><li><Link to="/">Sales</Link></li></ul>
                     <ul><li><Link to="/">Support</Link></li></ul>
                     <ul><li><Link to="/">Security</Link></li></ul>
                     <ul><li><Link to="/">Add Ons</Link></li></ul>
                     <ul><li><Link to="/">Careers</Link></li></ul>
                 </div>
                  <div className="footer__content--right">
                   <address>
                       <h1>Address</h1>
                       <p>1234 Belvedere Blvd Fargo, ND 58104</p>
                   </address>

                 </div>
                 
             </div>
       
       
            
        </footer>
    )
}

export default AppFooter
