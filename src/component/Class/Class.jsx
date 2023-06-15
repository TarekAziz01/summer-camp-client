import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Class = ({ item }) => {
    const { user } = useContext(AuthContext);

    const handleSelect = (item) => {
        const newItem = {
          email: user.email,
          classesId: item._id,
          image: item.image,
            name: item.name,
            instructor: item.instructor,
          availableSeat: item.availableSeat,
            state:'booked',
          price:item.price,
        };
       fetch("https://summer-camp-server-brown.vercel.app/carts", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(newItem),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.insertedId) {
             Swal.fire({
               position: "top-end",
               icon: "success",
               title: "Class selected",
               showConfirmButton: false,
               timer: 1500,
             });
           }
         });
    }



  return (
    <div className="md:w-1/2 lg:w-1/3 px-4 mb-6 mx-auto">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{item.name}</h2>
          <p className="text-xl">Instructor: {item.instructor}</p>
          <p className="text-lg">Available Seat: {item.availableSeat}</p>
          <p className="text-lg">Price: ${item.price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleSelect(item)} className="btn btn-outline btn-success">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
