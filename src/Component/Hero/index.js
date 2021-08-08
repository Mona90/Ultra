import React from 'react'
import {Section, Info, Title, TitleInfo, Desc, Span, Button} from './style'
function Hero() {
    return (
        <Section>
            <div className="container">
                <Info>
                    <Title>Hamza Nabil</Title>
                    <TitleInfo>Creative Director</TitleInfo>
                    <Desc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Desc>
                    <Button className="home-btn">Let's Begin</Button>
                </Info>
            </div>
        </Section>
    )
}

export default Hero
