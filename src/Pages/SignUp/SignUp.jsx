import React, { use } from "react";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const SignUp = () => {
  const { user, setUser, signUpUser, updateUser } = use(AuthContext);
  const Navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const userData = { name, email, photo, password };
    console.log(userData);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Must be more than 6 characters, including, At least one number, At least one lowercase letter, At least one uppercase letter"
      );
      return;
    }
    signUpUser(email, password)
      .then((result) => {
        console.log(result);
        Navigate("/");
        fetch("https://uddog-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, photo }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Account Created Successfully!",
                icon: "success",
                draggable: true,
              });
            }
          });
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-purple-400 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
            </div>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="mail@site.com"
                required
              />
              <label className="label">Photo Url</label>
              <input
                type="url"
                name="photo"
                className="input"
                placeholder="Enter Your Photo Url"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />
              <button className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#129ee7] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#129ee7] group-hover:bg-[#129ee7]"></span>
            <span className="relative text-black group-hover:text-white">
              Sign Up
            </span>
          </button>
              <p>
                Already Have An Account? <Link to="/auth/signIn">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
