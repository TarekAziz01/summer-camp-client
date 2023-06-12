import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../component/SocialLogin/SocialLogin";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, confirmedPassword } = data;

    if (password !== confirmedPassword) {
      setError("Password and confirmed password do not match.");
      return;
    } else {
      setError("");
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      loggedUser.displayName = data.name;
      loggedUser.photoURL = data.photoURL;
      //TODO: set photo in data
      console.log(loggedUser);

      const newUser = {
        name: data.name,
        email: data.email,
        image: data.photoURL,
      };
      fetch("https://summer-camp-server-brown.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Register Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }
        });
    });
  };

  return (
    <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
      <h2 className="text-3xl text-center">Register now!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-600">Photo URL is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
            })}
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-600">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 character</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one capital letter and one special character
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirmed Password</span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            {...register("confirmedPassword", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
            })}
            placeholder="confirmed password"
            className="input input-bordered"
          />
          {errors.confirmedPassword?.type === "required" && (
            <span className="text-red-600">confirmed Password is required</span>
          )}
          {errors.confirmedPassword?.type === "minLength" && (
            <p className="text-red-600">
              confirmed Password must be 6 character
            </p>
          )}
          {errors.confirmedPassword?.type === "pattern" && (
            <p className="text-red-600">
              confirmed Password must have one capital letter and one special
              character{" "}
            </p>
          )}
        </div>
        <span onClick={() => setShowPass(!showPass)}>
          {showPass ? (
            <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>
          ) : (
            <AiFillEye className="text-2xl"></AiFillEye>
          )}
        </span>
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>

        {error && <p className="text-red-600">{error}</p>}

        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login">Login</Link>
        </small>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
