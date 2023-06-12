import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const axios = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
      ["isInstructor", user?.email],
      async () => {
        const res = await axios.get(`/users/instructor/${user?.email}`);
        // console.log("is instructor", res);
        return res.data.instructor;
      }
    );
    return[isInstructor, isInstructorLoading]
};

export default useInstructor;