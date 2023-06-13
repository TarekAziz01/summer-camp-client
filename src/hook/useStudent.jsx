import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxiosSecure();
    const {data:isStudent, isLoading:isStudentLoading} = useQuery(['isStudent', user?.email], async () => {
        const res = await axios.get(`/users/student/${user?.email}`)
        // console.log('is student', res);
        return res.data.student;
    })
    return[isStudent,isStudentLoading]
};

export default useStudent;