import React, { Component } from 'react'
import {Section, Title, TitleSpan, Form, Input, FormInput, TextArea, SubmitType} from './style'


export default class ContactUs extends Component {
    render() {
        return (
            <Section>
                <div className="container">
                    <Title><TitleSpan>Drop </TitleSpan>Me A line</Title>
                    <Form action="">
                        <div className="row">
                            <FormInput className="col-md-6" type="text" placeholder="Your Name"/>
                            <FormInput className="col-md-6" type="email" placeholder="Your Email"/>
                        </div>
                        <Input type="text" className="sub" placeholder="Your Subject"/>
                        <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                        <SubmitType type="submit" value="Send Message"/>
                    </Form>
                </div>
            </Section>
        )
    }
}
