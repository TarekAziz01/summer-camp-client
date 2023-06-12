import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const AddClass = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxiosSecure();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  const onSubmit = (newClass) => {
    newClass.status = "pending";

    axios.post('/classes', newClass)
      .then(data => {
        if (data.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${newClass.name} Class Added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
    })
    console.log(newClass);
    };
    // console.log(errors);
    return (
      <div className="">
        <h2 className="text-3xl font-semibold text-center">
          Add a New Class here
        </h2>
        <h2 className="text-center mt-2">{user.displayName}</h2>
        <div className="py-16 mx-auto">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <div className="form-control">
                <input
                  className="input input-bordered m-2 h-10 px-2 shadow-lg "
                  placeholder="Class Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  className="input input-bordered m-2 h-10 px-2 shadow-lg "
                  placeholder="Image URL"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-600">Image URL is required</span>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="form-control">
                <input
                  className="m-2 h-10 px-2 shadow-lg "
                  defaultValue={user?.displayName}
                  {...register("instructor", { required: true })}
                />
                {errors.instructor && (
                  <span className="text-red-600">Instructor is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  className="m-2 h-10 px-2 shadow-lg "
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">email is required</span>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="form-control">
                <input
                  className="m-2 h-10 px-2 shadow-lg "
                  placeholder="seats"
                  {...register("availableSeat", { required: true })}
                />
                {errors.availableSeat && (
                  <span className="text-red-600">availableSeat is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  className="m-2 h-10 px-2 shadow-lg "
                  placeholder="price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-600">price is required</span>
                )}
              </div>
            </div>
            <input className="btn btn-accent" type="submit" />
          </form>
        </div>
      </div>
    );
};

export default AddClass;