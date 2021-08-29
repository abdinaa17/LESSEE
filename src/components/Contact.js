import React from 'react'
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

const Contact = () => {
    return (
        <section className="contact container">
           <div className="page__description">
            <h1 className='page__h1' >Contact Us</h1>
            <p className="page__lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis obcaecati asperiores commodi unde alias ullam.</p>
            <div className="line"></div>
            </div>
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      action="https://ant.design/components/form/"
     

    >
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please enter your full name!' }]}
      >
        <Input size='large'  placeholder="Full Name"/>
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[{ required: true, message: 'Please input your email address!' }]}
      >
        <Input size='large'  placeholder="Type your email"/>
      </Form.Item>

      <Form.Item
        label="Your Message"
        name="message"
        rules={[{ required: true, message: 'Please add a message' }]}
      >
        <TextArea size='large' rows={6} placeholder="Message" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" shape="round" size="large">
          Submit
        </Button>
      </Form.Item>
    </Form>
            
        </section>
    )
}

export default Contact
