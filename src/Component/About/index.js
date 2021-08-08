import React from 'react'
import {Link} from "react-router-dom"
import {Section, AboutInfo, Title, TitleSpan, JobTitle, Desc} from './style'
function About() {
    return (
        <Section>
            <div className="container">
                <AboutInfo>
                    <Title><TitleSpan>This is</TitleSpan> Me</Title>
                    <JobTitle className="info-dir">Creative Director</JobTitle>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Link to="/">explicabo</Link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Desc>
                </AboutInfo>
            </div>
        </Section>
        
    )
}

export default About
