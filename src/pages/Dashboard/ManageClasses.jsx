import Swal from "sweetalert2";
import useClasses from "../../hook/useClasses";
import useAxiosSecure from "../../hook/useAxiosSecure";

const ManageClasses = () => {
  const [classes, , refetch] = useClasses();
const axios = useAxiosSecure();
  const handleApprove = (item) => {
    axios.patch(
      `https://summer-camp-server-brown.vercel.app/classes/approved/${item._id}`
    )
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} is approved now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (item) => {
    axios
      .patch(
        `https://summer-camp-server-brown.vercel.app/classes/deny/${item._id}`
      )
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${item.name} is denied now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }


  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-10">
        Manage All classes: {classes.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>email</th>
              <th>Available</th>
              <th>Price</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="mask  w-12 h-12">
                    <img src={item.image} alt="Avatar" />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructor}</td>
                <td>{item.email}</td>
                <td>{item.availableSeat}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleApprove(item)}
                    disabled={item.status !== "pending" ? true : false}
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(item)}
                    disabled={item.status !== "pending" ? true : false}
                    className="btn btn-outline btn-error btn-xs mx-1"
                  >
                    Deny
                  </button>
                  <button className="btn btn-outline btn-info btn-xs">
                    feedback
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

export default ManageClasses;
