import React from 'react'
import { List, Card, Button } from 'antd';
import {pricingData} from '../data'
import Faq from './Faq';


const Pricing = () => {
    return (
        <section className="pricing container">
             <div className="page__description">
            <h1 className='page__h1' >Pricing</h1>
            <p className='page__lead' >No contract. 14 days money back guarantee. Cancel anytime.</p>
            <div className="line"></div>
            </div>
            <List
    grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,}}
    dataSource={pricingData}
    renderItem={item => (
      <List.Item>
        <Card  title={item.title}>
            <p>{item.description}</p>
            <p className="price">{`$${item.price}/mo`}</p>
            <p>{item.features[0]}</p>
            <p>{item.features[1]}</p>
            <p>{item.features[2]}</p>
            <p>{item.features[3]}</p>
         <Button shape="round" type="primary" size="large">
                             Get Started
                         </Button>
        </Card>
      </List.Item>
    )}
  />
    <Faq />
        </section>
    )
}

export default Pricing
