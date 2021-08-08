import axios from 'axios';
import React, { Component } from 'react';
import { Span , Part , Icon , PartTitle , Line , PartDec , Section , Title } from './style.js';
// import Data from '../../data/data.json'


class Work extends Component {
    state = {
       works : []
    }
    componentDidMount(){
        axios.get('data/data.json').then(res =>{
            console.log(res)
            this.setState({
                works : res.data.works
            })
        })
    }
    render (){
        const {works} = this.state
        const workList = works.map(work => {
            return(
                <Part className="col-md-4" key={work.id}>
                        <Icon className={work.icon_name}></Icon>
                        <PartTitle>{work.title}</PartTitle>
                        <Line/>
                        <PartDec>
                            {work.body}
                        </PartDec>
                    </Part>
           )
        })
        return (
            <Section>
                <div className="container">
                    <Title><Span>My</Span> Work</Title>
                    <div className="row justify-content-between">
                    {workList}
                    </div>
                </div>
            </Section>
        )
    }
    
}

export default Work
