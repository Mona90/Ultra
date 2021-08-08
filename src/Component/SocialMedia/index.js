import axios from 'axios'
import React, { Component } from 'react'
import {Section, SocialBox, Icon, Desc, Span, SpanInfo} from "./style"
import Data from '../../data/data.json'

class SocialMedia extends Component{
    state ={
        items : []
    }
    componentDidMount(){
        axios.get(Data).then(res => {
            this.setState({
                items : res.data.social
            })
        })
    }
    render (){
        const {items} = this.state
        const socialList = items.map(item =>{
            return(
                <SocialBox color={item.background} key={item.id}>
                    <Icon className={item.icon} />
                    <Desc>
                        <Span>{item.title}</Span>
                        <SpanInfo>{item.body}</SpanInfo>
                    </Desc>
                </SocialBox>
                 )
            })

        return (
            <Section>
                
                {socialList}
                
                
            </Section>
        )
    }
    
}

export default SocialMedia
