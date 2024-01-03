import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import DataStorageComponent from '../DataStorageComponent';
import Header from '../Landing-page/Header/Header';



const SignUp = () => {
    toast("Hello Geeks");
    const navigate = useNavigate();
    const [returningUser, setReturningUser] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [errors, setErrors] = useState({});
    
    const onSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (true) {
            try {
                if (returningUser) {
                    // Login API request
                    // console.log("Its start");
                    const response = await axios.post('http://localhost:8080/api/v1/GetLogin', {
                        email: formData.email,
                        password: formData.password,
                    });
                    // console.log("Its End");
                    // console.log(response);
                    if(response.data==("Success")){

                        const response = await axios.post('http://localhost:8080/api/v1/GetId', {
                        email: formData.email,
                        password: formData.password,
                        });
                        // console.log(response.data.id);

                        // Handle successful login response
                         console.log('Login successful:', response);

                        // Show success toast
                        alert('Login successful');

                    
                    // Navigate to Home page
                    navigate(`/Home/${response.data.id}`);
                }
                else{
                    alert('Login fail');
                }
                } else {
                    // Sign Up API request
                    const response = await axios.post('http://localhost:8080/api/v1/Register', {
                        firstname: formData.name,
                        emailId: formData.email,
                        password: formData.password,
                    });

                    // Handle successful sign up response
                    console.log('Sign Up successful:', response.data);

                    // Show success toast
                    alert('Sign Up successful');

                    // You can also automatically switch to the login form after sign up
                    setReturningUser(true);
                }
            } catch (error) {
                // Handle API request error
                console.error('API request error:', error.response);

                // Show error toast
                alert('Login/Sign Up failed. Please check your credentials.');

                setErrors({ apiError: 'An error occurred during the request.' });
            }
        } else {
            setErrors(validationErrors);
        }
    };
 

    const validateForm = () => {
        let validationErrors = {};

        if (!formData.name) {
            validationErrors.name = 'Name is required';
        }

        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }

        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }

        if (formData.password !== formData.confirm_password) {
            validationErrors.confirm_password = 'Passwords do not match';
        }

        return validationErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="sign-up">
            <Header/>
            <div className="container">
                <div className="text-center py-4">
                    <Link to="/" className="text-info nav-link">
                        <h2>Resume Builder</h2>
                    </Link>
                </div>

                {returningUser ? (
                    <form onSubmit={onSubmit} className="py-3">
                        <h1 className="lead text-center py-3">Welcome back!</h1>
                        
                        <div className="form-group">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-primary btn-white" type="submit" >
                                Sign In
                            </button>
                        </div>

                      

                        <div className="text-center my-0">
                            <label> or </label>
                        </div>

                    

                        <div className="option text-center my-3">
                            <label onClick={() => setReturningUser(false)}>
                                Create a new Account
                            </label>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={onSubmit} className="py-2">
                        <div className="form-group">
                            <input
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirm_password"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                            />
                            {errors.confirm_password && <span className="error">{errors.confirm_password}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">
                                Sign Up
                            </button>
                        </div>

                        <div className="option text-center my-3">
                            <label onClick={() => setReturningUser(true)}>
                                Already Have an Account
                            </label>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignUp;
