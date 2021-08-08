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
    const handleClick  = (e)=>{
        console.log(e.target.category)

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
                <ListItem active category={"all"} onClick={handleClick}>All</ListItem>
                <ListItem category={"html" }onClick={handleClick}>HTML</ListItem>
                <ListItem category={"photoshop" }onClick={handleClick}>Photoshop</ListItem>
                <ListItem category="wordpress" onClick={handleClick}>Wordpress</ListItem>
                <ListItem category="mobile" onClick={handleClick}>Mobile</ListItem>
            </List>
            
            <div className="box">
                {portfolioImages}
            </div>
            
        </Section>
    )
}

export default Portfolio
