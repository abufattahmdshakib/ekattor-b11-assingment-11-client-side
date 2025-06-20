import React from 'react';
import { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const SingUp = () => {
    const { createUser, setUser } = use(AuthContext)
    const [showPass, setShowpass] = useState(false);
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'The password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
            });
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    setUser({
                        ...user,
                        displayName: name,
                        photoURL: photo,
                    });
                    sweetAlart();
                    navigate("/");
                }).catch((error) => {
                    console.error("Profile update failed:", error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
            });

    };
    const sweetAlart = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Successfully Registered",
            showConfirmButton: false,
            timer: 2000
        });
    };
    return (
        <div className="hero bg-base-100 my-16">
            
            <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl text-blue-950 font-bold text-center'>SingUp your account</h1>
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <label className="label text-blue-950 font-bold">Your Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter your name" required />
                            <label className="label text-blue-950 font-bold">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Enter your Photo URL" required />
                            <label className="label text-blue-950 font-bold">Email address</label>
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
                            <div className='mt-3'><input type="checkbox" className="checkbox checkbox-xs text-blue-950 font-bold" required /> <a className="link link-hover ml-1 text-blue-950 font-bold">Accept Term & Conditions</a></div>
                            <button type='submit' className="btn btn-neutral mt-4 bg-blue-950">SingUp</button>
                        </fieldset>
                        <p className='mt-5 text-blue-950 font-bold'>Allready Have An Account ?<span className='text-red-600 font-medium hover:underline'><Link to='/auth/signIn'>SignIn</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;