import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Section, SectionProfile, ProfileList, ListItem, ListItemSpan, Skills, SkillsDesc, SkillsBar, BarTitle, BarPerc, BarParent, ParentSpan, Title, TitleSpan } from './style.js'
import Data from '../../data/data.json'

function Profile() {
    const [Codes, setCodes] = useState([])
    useEffect(()=>{
        axios.get(Data).then(res =>{
            setCodes(res.data.profile)
        })
    })
    const LangCode = Codes.map(code =>{
        return(
                <SkillsBar key={code.id}>
                    <BarTitle>{code.title}</BarTitle>
                    <BarPerc>{code.persentage}</BarPerc>
                    <BarParent>
                        <ParentSpan persentage={code.persentage}></ParentSpan>
                    </BarParent>
                </SkillsBar>
            )
    })
    return (
        <Section>
            <div class="container">
                <SectionProfile>
                    <Title><TitleSpan>My </TitleSpan>Profile</Title>
                    <ProfileList>
                        <ListItem>
                            <ListItemSpan>Name</ListItemSpan>
                            Hamza Nabil
                        </ListItem>
                        <ListItem>
                            <ListItemSpan>Birthday</ListItemSpan>
                            21/1/1996
                        </ListItem>
                        <ListItem>
                            <ListItemSpan>Address</ListItemSpan>
                            Ain shams
                        </ListItem>
                        <ListItem>
                            <ListItemSpan>Phone</ListItemSpan>
                            4444 5555 6666
                        </ListItem>
                        <ListItem>
                            <ListItemSpan>Email</ListItemSpan>
                            hamza@hamza.com
                        </ListItem>
                        <ListItem>
                            <ListItemSpan>Website</ListItemSpan>
                            <ListItemSpan web>www.google.com</ListItemSpan>
                        </ListItem>
                    </ProfileList>
                </SectionProfile>
                
                <Skills>
                    <Title>Some <TitleSpan>skills</TitleSpan></Title>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {LangCode}
                    
                </Skills>
                
            </div>
        </Section>
    )
}

export default Profile
