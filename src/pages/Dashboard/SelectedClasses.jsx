import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const SelectedClasses = () => {
//TODO: lode data by user email
    const axios = useAxiosSecure();
    const { data: carts = [], refetch } = useQuery(["carts"], async () => {
      const res = await axios("/carts/booked");
      return res.data;
    });

    const handleDelete = (item) => { 
        console.log(item)
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           axios.delete(`/carts/${item._id}`).then((res) => {
             console.log("deleted res", res.data);
             if (res.data.deletedCount > 0) {
                  refetch();
               Swal.fire("Deleted!", "Your file has been deleted.", "success");
             }
           });
         }
       });
    }

    return (
      <div>
        <h1 className="text-3xl text-center font-semibold my-10">
          All Selected Class:{carts.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.instructor}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link state={item} to={`/dashboard/payment/${item._id}`}>
                      <button className="btn btn-outline btn-success btn-sm">
                        Pay
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-outline btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default SelectedClasses;