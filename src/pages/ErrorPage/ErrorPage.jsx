import NotFoundImage from "../../assets/images/error.png";
const ErrorPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${NotFoundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={backgroundStyle}
    >
      <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-100 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
