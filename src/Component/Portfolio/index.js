import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Section, Title, TitleSpan, List, ListItem, BoxDev, Img, Overlay, BoxSpan } from './style.js'



function Portfolio() {
    const [Images, setImages] = useState([])
    const [filter, setFilter] = useState('all');
    
    useEffect(()=>{
       axios.get('data/data.json').then(res =>{

        setImages(res.data.portfolio)
       })

    },[])
    const handleClick  = (categoryName)=>{
        setFilter(categoryName);
    }
    
    
    const portfolioImages = (filter === 'all' ? Images : Images.filter(img => img.category.includes(filter))).map((item, i)=>{
              return(
                  <BoxDev key={i}>
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
