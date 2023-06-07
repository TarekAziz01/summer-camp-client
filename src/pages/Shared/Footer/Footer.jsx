const Footer = () => {

  return (
    <footer className="bg-gray-900 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-400">1234 Sports Avenue</p>
            <p className="text-gray-400">City, State, Country</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-400">Latitude: 40.7128</p>
            <p className="text-gray-400">Longitude: -74.0060</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">
              Social Media
            </h3>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-4 23.25V14H3v-3h5V7.5c0-5 3.49-7.38 7.5-7.5h2.25v3h-2.25c-.115.002-.227.02-.34.05A2.248 2.248 0 0013.5 7.5v1.5h4.75l-.562 3H13.5V21.75A11.983 11.983 0 0012 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.19 3.01c.86-.47 1.84-.72 2.81-.74a2 2 0 01-.77 2.37 4 4 0 001.75-.48 2 2 0 01-1.74 1.11A4 4 0 0117 6.02a2 2 0 01-.74-3.94A5.93 5.93 0 0019.19 3zm-4.38 3.52a6 6 0 01-.1 2.5 2 2 0 11-3.77-1.26 4 4 0 00-3.72-.62 2 2 0 01-.08-3.94 4 4 0 003.47-.53 2 2 0 01-1.13-1.8 2 2 0 00-.35.13A2 2 0 019.58.1a4 4 0 00-2.32.81A4 4 0 012 4a2 2 0 00.78 1.66 2 2 0 01-.56 3.11 2 2 0 00.58.09A2 2 0 013 10a4 4 0 00.65 2.21 2 2 0 01-1.1 3.07 4 4 0 001.17.17 2 2 0 012.32 1.56 6 6 0 01-.84 1.52 2 2 0 10.87 3.79c.97 0 1.87-.26 2.65-.72A5.98 5.98 0 0012 22a6 6 0 003.4-11z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.95 3H6.05C4.92 3 4 3.92 4 5.05v13.9c0 1.14.92 2.05 2.05 2.05h11.9c1.14 0 2.05-.92 2.05-2.05V5.05C20 3.92 19.08 3 17.95 3zm-5.69 13.47c0 .36-.3.66-.66.66H9.4a.66.66 0 01-.66-.66v-3.29c0-.36.3-.66.66-.66h2.2c.36 0 .66.3.66.66v3.29zm4.39-6.61c.11.36.17.74.17 1.14 0 2.38-1.92 4.3-4.3 4.3-2.38 0-4.3-1.92-4.3-4.3 0-.4.06-.78.17-1.14H7.6c0 .29-.11.54-.31.74a1.02 1.02 0 01-.74.31c-.58 0-1.05-.47-1.05-1.05V7.5c0-.58.47-1.05 1.05-1.05h8.79c.58 0 1.05.47 1.05 1.05v3.08c0 .58-.47 1.05-1.05 1.05h-.01zm-1.17-1.05H8.82V7.5h6.66v1.31z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-6" />
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SportLearn. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
