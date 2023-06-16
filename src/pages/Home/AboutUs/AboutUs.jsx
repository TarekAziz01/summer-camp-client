import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Fade>
            <h2 className="text-3xl font-extrabold text-gray-900">
              About Sport Learn
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Sport Learn is a premier sports academy dedicated to providing
              top-quality training and coaching in various sports disciplines.
              We are committed to helping athletes of all ages and skill levels
              reach their full potential and achieve excellence in their chosen
              sports.
            </p>
          </Fade>
        </div>
        <div className="mt-10">
          <Fade>
            <h3 className="text-xl font-medium text-gray-900">Our Mission</h3>
            <p className="mt-4 text-base text-gray-500">
              At Sport Learn, our mission is to inspire and empower individuals
              through sports. We strive to create a positive and inclusive
              learning environment where athletes can develop their skills,
              enhance their physical fitness, build character, and foster a
              lifelong love for sports.
            </p>
          </Fade>
        </div>
        <div className="mt-10">
          <Fade>
            <h3 className="text-xl font-medium text-gray-900">Our Coaches</h3>
            <p className="mt-4 text-base text-gray-500">
              Sport Learn boasts a team of experienced and highly qualified
              coaches who are passionate about their respective sports. Our
              coaches bring their expertise, dedication, and enthusiasm to every
              training session, ensuring that athletes receive the best possible
              guidance and support to excel in their sporting journey.
            </p>
          </Fade>
        </div>
        <div className="mt-10">
          <Fade>
            <h3 className="text-xl font-medium text-gray-900">
              Our Facilities
            </h3>
            <p className="mt-4 text-base text-gray-500">
              With state-of-the-art training facilities and equipment, Sport
              Learn provides athletes with a conducive environment to train and
              improve. Our modern facilities include well-maintained sports
              fields, indoor training areas, strength and conditioning zones,
              and more, allowing athletes to train effectively and efficiently.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
