import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {

  const{user}=useContext(AuthContext)
    const axios = useAxiosSecure();
    const { data: enrolled = [] } = useQuery(["enrolled"], async () => {
      const res = await axios(`/enrolled/${user.email}`);
      return res.data;
    });
  console.log(enrolled);
  
    return (
      <div>
        <h1 className="text-3xl font-semibold text-center my-10">
          Enrolled classes:{enrolled.length}
        </h1>
        <div className="flex flex-wrap">
          {!enrolled.length && (
            <div className="text-center">
              <span className="loading loading-infinity loading-md text-center"></span>
            </div>
          )}
          {enrolled.length &&
            enrolled.map((item) => (
              <div
                key={item._id}
                className="md:w-1/2 lg:w-1/3 px-4 mb-6 mx-auto"
              >
                <div className="card w-full bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={item.item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-2xl">{item.item.name}</h2>
                    <p className="text-xl">Instructor: {item.item.instructor}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-outline btn-success"
                      >
                        Start
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
};

export default EnrolledClasses;