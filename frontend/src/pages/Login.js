import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaSignInAlt } from 'react-icons/fa';

import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState, 
            [e.target.name]: e.target.value,
        }));
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, isError, message } = useSelector(
        (state)=> state.auth
    );

    useEffect(()=>{
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    },[user, isLoading, isSuccess, isError, message, navigate, dispatch]);

    const onSubmit = (e) =>{
        e.preventDefault();

        const userData = {
            email,
            password
        };
        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login to start setting Goals</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
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
                    <button className='btn btn-block' type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </section>
    </>
  );
}

export default Login;