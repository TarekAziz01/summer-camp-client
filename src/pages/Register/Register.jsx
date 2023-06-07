import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useState } from "react";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    //   reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
     const { password, confirmedPassword } = data;

     if (password !== confirmedPassword) {
       setError("Password and confirmed password do not match.");
       return;
     } else {
       setError('')
    }
    

    console.log(data);
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
            // onBlur={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirmed Password</span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            {...register("confirmedPassword", { required: true })}
            // onBlur={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirmed password"
            className="input input-bordered"
          />
        </div>
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
