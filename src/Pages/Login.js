import React from 'react'
import { Container } from '../Styles/globalStyles'
import {Form} from '../Styles/loginPage'
import { useFormik } from 'formik'

const initialValues = {
    name:'',
    email:'',
    mobile:'',
    pass:''
}

const onSubmit = values =>{
    console.log("Form data", values)
}
const validate = values => {
    const regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let errors = {}
    if(!values.name){
        errors.name = "required"
    }
    if(!values.email){
        errors.email = "required"
    }else if(!regex.test(values.email)){
        errors.email = "Invalid email formate"
    }
    if(!values.mobile){
        errors.mobile = "required"
    }
    if(!values.pass){
        errors.pass="required"
    }
    return errors
}
function Login() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log("Form data", formik.errors)

    return (
        <Container>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='name'>Name</label>
                    <input type="text" 
                    className='form-control' 
                    name="name" id="name" 
                    placeholder='Enter your name'  
                    onChange={formik.handleChange} 
                    value={formik.values.name}/>
                    {formik.errors.name? 
                    <div className={formik.errors.name? "invalid-feedback d-block":"invalid-feedback"}>
                        {formik.errors.name}
                    </div> : null}
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='email'>Email</label>
                    <input type="text" className='form-control' name="email" id="email" 
                    placeholder='Enter your email'  onChange={formik.handleChange}
                    value={formik.values.email}/>
                    {formik.errors.email? 
                    <div className={formik.errors.email? "invalid-feedback d-block":"invalid-feedback"}>
                        {formik.errors.email}
                    </div> : null}
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='mobile'>Mobile</label>
                    <input type="text" className='form-control' name="mobile" id="mobile" 
                    placeholder='Enter your Number'  
                    onChange={formik.handleChange}
                    value={formik.values.mobile}/>
                    {formik.errors.mobile? 
                    <div className={formik.errors.mobile? "invalid-feedback d-block":"invalid-feedback"}>
                        {formik.errors.mobile}
                    </div> : null}
                </div>
                <div className='mb-3'>
                    <label className="form-label" htmlFor='pass'>Password</label>
                    <input type="password" className='form-control' name="pass" id="pass"  
                    onChange={formik.handleChange}
                    value={formik.values.pass}/>
                    {formik.errors.pass? 
                    <div className={formik.errors.pass? "invalid-feedback d-block":"invalid-feedback"}>
                        {formik.errors.pass}
                    </div> : null}
                </div>
                <button type='sumbit' className="btn btn-dark">Login</button>
            </Form>
        </Container>
    )
}

export default Login
