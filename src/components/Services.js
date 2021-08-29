import React from 'react'
import { Row, Col } from 'antd';
import {servicesData} from '../data'
const Services = () => {
    return (
        <section className="services container">
            <div className="page__description">
                <h1 className='page__h1' >Who is it for?</h1>
            <p className='page__lead' >No client or task is too big or too small for us. If you want your business to look better and create more, you’ve come to the right place.</p>
            <div className="line"></div>
            </div>
            

    <Row>
     {servicesData.map((item)=> {
         const {id, body, title, img} = item
         return(
             <Col span={24} key={id}>
                 <div className="services__content">
                     <div className="services__content--img">
                         <img src={img} alt={title} />
                     </div>
                    <div className="services__content--body">
                            <h1 className='page__h1' >{title}</h1>
                 <p className='page__lead' >{body}</p>
                    </div>
                  
                 </div>
                
                

             </Col>
         )
     })}
    </Row>

            
        </section>
    )
}

export default Services
