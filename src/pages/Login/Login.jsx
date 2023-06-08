import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../component/SocialLogin/SocialLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
      // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
         setErr('')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });

        console.log(user)
      })
    .catch((err) => {
        setErr(err.message)
        // console.log(err.message);
      });
   
  };

  return (
    <div className="card mx-auto w-full max-w-sm shadow-2xl bg-base-100">
      <h2 className="text-3xl text-center">Login now!</h2>
      {errors && (
        <p className="text-red-600 mx-auto mt-4">{ err}</p>
      )}
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
              <AiFillEyeInvisible className="text-2xl"></AiFillEyeInvisible>
            ) : (
              <AiFillEye className="text-2xl"></AiFillEye>
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
          New Here?<Link to="/register">Create an account</Link>
        </small>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
