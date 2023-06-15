import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";


const PopularInstructors = () => {

  const axios = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axios(`/users/instructors`);
    return res.data;
  });
  const firstSix = instructors.slice(0, 6);


  return (
    <div>
      <h2 className="text-3xl font-semibold text-center my-10">
        Popular Instructors
      </h2>
      <div className="flex flex-wrap">
        {!instructors.length && (
          <div className="text-center">
            <span className="loading loading-infinity loading-md text-center"></span>
          </div>
        )}
        {instructors.length &&
          firstSix.map((item) => (
            <div key={item._id} className="md:w-1/2 lg:w-1/3 px-4 mb-6 mx-auto">
              <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={item.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <p className="text-xl">Instructor: {item?.name}</p>
                  <p className=" text-2xl">{item?.email}</p>
                  <div className="card-actions "></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
