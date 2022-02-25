import { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

function Register() {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = formData;
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState, 
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) =>{
        e.preventDefault();
    };
  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p> Register to start setting Goals. </p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label className='fs-4'>Name</label>
                    <input className='form-control' type='text' 
                        placeholder='Enter your Name' id='name'
                        name='name' value={name} onChange={onChange} />
                </div>
                <div className='form-group'>
                <label className='fs-4'>Email</label>
                    <input className='form-control' type='email' 
                        placeholder='Enter your Email' id='email'
                        name='email' value={email} onChange={onChange} />
                </div>
                <div className='form-group'>
                <label className='fs-4'>Password</label>
                    <input className='form-control' type='password' 
                        placeholder='Enter your Password' id='password'
                        name='password' value={password} onChange={onChange} />
                </div>
                <div className='form-group'>
                <label className='fs-4'>Confirm Password</label>
                    <input className='form-control' type='password' 
                        placeholder='Confirm Password' id='password2'
                        name='password2' value={password2} onChange={onChange} />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Register
                    </button>
                </div>
            </form>
        </section>
    </>
  );
}

export default Register;