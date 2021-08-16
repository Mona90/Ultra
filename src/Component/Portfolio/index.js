import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Section, Title, TitleSpan, List, ListItem, BoxDev, Img, Overlay, BoxSpan } from './style.js'
// import Data from 'data/data.json'

function Portfolio() {
    const [Images, setImages] = useState([])
    useEffect(()=>{
       axios.get('data/data.json').then(res =>{

           setImages(res.data.portfolio)
       })

    },[])
    const handleClick  = (category)=>{
        console.log(category)

    }

    const portfolioImages = Images.map(item =>{
        return(
                <BoxDev key={item.id}>
                    <Img src={item.image} alt=""/>
                    <Overlay>
                        <BoxSpan>
                            Show Image
                        </BoxSpan>
                    </Overlay>
                </BoxDev>
        )
    })
    
    return (
        <Section>
            <Title><TitleSpan>My</TitleSpan> Portfolio</Title>
            <List>
                <ListItem active onClick={() => handleClick('all')}>All</ListItem>
                <ListItem  onClick={() => handleClick("html" )}>HTML</ListItem>
                <ListItem  onClick={() => handleClick("photoshop")}>Photoshop</ListItem>
                <ListItem  onClick={() => handleClick("wordpress")}>Wordpress</ListItem>
                <ListItem  onClick={() => handleClick("mobile")}>Mobile</ListItem>
            </List>
            
            <div className="box">
                {portfolioImages}
            </div>
            
        </Section>
    )
}

export default Portfolio
