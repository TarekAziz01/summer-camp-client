import { useQuery } from "@tanstack/react-query";
import { BsTrashFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const {data:users=[], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })


    const handleDelete = (user) => {
        console.log("mk delete:", user.name, user._id);
    }


    const handleMakeAdmin = user => {
        console.log(user.name, user._id)
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
        console.log('mkInst:',user.name, user._id);
    }



    return (
      <div className="w-full">
        <h1 className="text-3xl font-semibold my-4"> users: {users.length}</h1>
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
              {users.map((user, index) => (
                <tr key={user._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin'? 'admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-indigo-300"><FaUserShield></FaUserShield></button>}
                  </td>
                  <td>{user.role === 'instructor'? 'instructor':<button onClick={()=>handleMkInstructor(user)} className="btn btn-ghost bg-emerald-300">make instructor</button>}
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