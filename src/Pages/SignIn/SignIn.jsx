import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";


const SingIn = () => {
    const { user, login, handleWithGoogle, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowpass] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 6 characters long and contain both uppercase and lowercase letters."
            });
            return;
        }

        login(email, password)
            .then((result) => {
                showSuccessAlert();
                navigate("/");
                console.log(result.user);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                });
            });
    };

    const handleForgotPassword = () => {
        const email = document.querySelector("input[name='email']").value;

        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Enter Email",
                text: "Please enter your email to reset password.",
            });
            return;
        }

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Email Sent",
                    text: "Check your inbox for the password reset link.",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Something Went Wrong",
                    text: error.message,
                });
            });
    };

    const showSuccessAlert = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="hero bg-base-100">
           

            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl font-bold text-center text-blue-950'>Login to Your Account</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <label className="label text-blue-950 font-bold">Email Address</label>
                            <input name='email' type="email" className="input" placeholder="Enter your email address" required />
                            <label className="label text-blue-950 font-bold">Password</label>
                            <div className='relative'>
                                <input name='password' type={showPass ? "text" : "password"} className="input" placeholder="Enter your password" required />
                                <button
                                    type="button"
                                    onClick={() => setShowpass(!showPass)}
                                    className='absolute top-[14px] right-6'>
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            <div>
                                <span onClick={handleForgotPassword} className="link link-hover text-blue-950 font-bold cursor-pointer">
                                    Forgot password?
                                </span>
                            </div>
                            <button type='submit' className="btn btn-neutral mt-4 bg-blue-950">Login</button>
                        </fieldset>
                    </form>
                    <div className="divider divider-neutral font-bold text-blue-950">OR</div>
                    <button onClick={handleWithGoogle} className="btn text-blue-950 bg-gray-300">
                        <FcGoogle className='text-xl' />Login with Google
                    </button>
                    <p className='mt-5 text-blue-950 font-bold'>
                        Don’t have an account?{" "}
                        <span className='text-red-600 font-medium hover:underline'>
                            <Link to='/auth/signUp'>Register</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingIn;
