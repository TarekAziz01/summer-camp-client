import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const newUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
        image: loggedInUser.photoURL,
      };
      fetch("https://summer-camp-server-brown.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign In Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <>
      <div className="divider"></div>
      <div className="text-center mb-3">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary w-4/5"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
