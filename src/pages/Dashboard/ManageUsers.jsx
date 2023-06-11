import { useQuery } from "@tanstack/react-query";
import { BsTrashFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";

const ManageUsers = () => {
    const axios = useAxiosSecure();
    const {data : users=[], refetch } = useQuery(['users'], async () => {
        const res = await axios("/users");
        return res.data
    })


    const handleDelete = (user) => {
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
            fetch(`http://localhost:5000/user/${user._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire(
                    "Deleted!",
                    "User has been deleted.",
                    "success"
                  );
                }
              });
          }
        });
    }


    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/user/admin/${user._id}`, {
            method:'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: `${user.name} is an admin Now`,
                      showConfirmButton: false,
                      timer: 1500,
                    });
                }
        })
    }


    const handleMkInstructor = (user) => {
        fetch(`http://localhost:5000/user/instructor/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${user.name} is an instructor Now`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
    }



    return (
      <div className="w-full">
        <h1 className="text-3xl font-semibold my-4"> users: {users?.length}</h1>
        <div className="overflow-x-auto">
          <table className="table  w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length && users.map((user, index) => (
                <tr key={user?._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role === 'admin'? 'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-indigo-300"><FaUserShield></FaUserShield></button>}
                  </td>
                  <td>{user?.role === 'instructor'? 'instructor':<button onClick={()=>handleMkInstructor(user)} className="btn btn-ghost bg-emerald-300">make instructor</button>}
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-400"><BsTrashFill></BsTrashFill></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUsers;