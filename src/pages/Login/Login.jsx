import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useState } from "react";

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    "password"
  const {
    register,
    handleSubmit,
    //   reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
      <h2 className="text-3xl text-center">Login now!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            {...register("password", { required: true })}
            placeholder="password"
            className="input input-bordered"
          />
          <div onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <small>Hide PassWord</small>
            ) : (
              <small>Show PassWord</small>
            )}
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p>
        <small>
          New Here?<Link to="/register">Register</Link>
        </small>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
