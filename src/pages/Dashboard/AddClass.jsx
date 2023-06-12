import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";


const AddClass = () => {
  const {user}=useContext(AuthContext)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
      <div>
        <h2 className="text-3xl font-semibold">Add a New Class here </h2>
        <h2>{user.displayName}</h2>
        <div className="py-16 mx-auto">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="m-2 h-8 px-2 shadow-lg "
              placeholder="Class Name"
              {...register("name", { required: true })}
            />
            <input
              className="m-2 h-8 px-2 shadow-lg "
              placeholder="Image URL"
              {...register("image", { required: true })}
            />
            <div>
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={user?.displayName}
                {...register("instructor", { required: true })}
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                defaultValue={user?.email}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <input
                className="m-2 h-8 px-2 shadow-lg "
                placeholder="seats"
                {...register("availableSeat", { required: true })}
              />
              <input
                className="m-2 h-8 px-2 shadow-lg "
                placeholder="price"
                {...register("price", { required: true })}
              />
            </div>
            <input className="btn btn-accent" type="submit" />
          </form>
        </div>
      </div>
    );
};

export default AddClass;