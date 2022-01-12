import React from 'react'
import { Container } from '../Styles/globalStyles'
import {Form} from '../Styles/loginPage'


function Login() {
    return (
        <Container>
                            <h2 className='text-center'>Login</h2>
            <Form>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='name'>Name</label>
                    <input type="text" className='form-control' name="name" id="name" placeholder='Enter your name'/>
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='email'>Email</label>
                    <input type="text" className='form-control' name="email" id="email" placeholder='Enter your email'/>
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='mobile'>Mobile</label>
                    <input type="text" className='form-control' name="mobile" id="mobile" placeholder='Enter your Number'/>
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='pass'>Password</label>
                    <input type="password" className='form-control' name="pass" id="pass" />
                </div>
                <button type='sumbit' className="btn btn-dark">Login</button>
            </Form>
        </Container>
    )
}

export default Login
