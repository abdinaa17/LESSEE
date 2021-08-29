import React from 'react'
import project1 from "../assets/project1.jpeg"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.jpeg"
import { Row, Col } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const Projects = () => {
    return (
        <section className="projects container">
             <div className="page__description">
                <h1 className='page__h1'>Our Work</h1>
            <p className='page__lead'>Check out some of the recent projects we did to see what you can create with LESSEE.</p>
            <div className="line"></div>
            </div>
          <Row gutter={[16, 32]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
                cover={<img alt="project 1" src={project1} />}
                 >
                   <Meta title="project 1" description="Made by Nasir"/>
            </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
                cover={<img alt="project 2" src={project2} />}
                 >
                   <Meta title="project 2" description="Made by Nasir"/>
            </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
              cover={<img alt="project 3" src={project3}/>}
                 >
                   <Meta title="project 3" description="Made by Nasir"/>
            </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
                cover={<img alt="project 4" src={project3} />}
                 >
                   <Meta title="project 4" description="Made by Nasir"/>
            </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
                cover={<img alt="project 5"  src={project1}/>}
                 >
                   <Meta title="project 5" description="Made by Nasir"/>
            </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Card
            hoverable
            // style={{ width: 240 }}
                cover={<img alt="project 6" src={project2}/>}
                 >
                   <Meta title="project 6" description="Made by Nasir"/>
            </Card>
            </Col>
            
  
  
  </Row>
        </section>
    )
}

export default Projects
