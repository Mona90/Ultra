import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Section, Title, TitleSpan, List, ListItem, BoxDev, Img, Overlay, BoxSpan } from './style.js'



function Portfolio() {
    const [Images, setImages] = useState([])
    const [filter, setFilter] = useState('all');
    const array = ["all", "html", "photoshop", "wordpress", "mobile"]
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(()=>{
       axios.get('data/data.json').then(res =>{

        setImages(res.data.portfolio)
       })

    },[])
    const handleClick  = (obj, index)=>{
        setFilter(obj);
        setActiveIndex(index)
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
                {array.map((obj, index) => {
                    
                    return(
                        <ListItem className={index === activeIndex  ? 'active' : ''} onClick={() => {handleClick(obj, index)}} key={index}>{obj}</ListItem>
                    )
                   
                })}
                
            </List>
            
            <div className="box">
                {portfolioImages}
                
            </div>
            
        </Section>
    )
}

export default Portfolio
