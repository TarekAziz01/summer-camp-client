import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogleSignIn = () => {};

  return (
    <>
      <div className="divider"></div>
      <div className="text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
