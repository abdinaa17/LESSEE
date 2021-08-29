import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppHeader from './components/Header'
import Hero from './components/Hero'
import 'antd/dist/antd.css'
import { Layout} from 'antd';
import Services from './components/Services';
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import AppFooter from './components/Footer'
import Sidebar from './components/Sidebar'

const { Header, Content, Footer } = Layout;


const Home = () => {
    return (
        
            <Layout className="layout">
                <Router>
                    <Header>
                    <AppHeader />
    
                    </Header>
                    <Sidebar />
                    <Content>
                        <Switch>
                            <Route exact path="/" >
                                <Hero />
                            </Route>
                            <Route exact path="/services" >
                                <Services/>
                            </Route>
                            <Route exact path="/projects" >
                                <Projects/>
                            </Route>
                             <Route exact path="/pricing" >
                                <Pricing/>
                            </Route>
                            <Route exact path="/contact" >
                                <Contact/>
                            </Route>
                        </Switch>
                    </Content>
                    <Footer>
                        <AppFooter />
                    </Footer>
                </Router>
                
    
            </Layout>
        
    
    )
}

export default Home
