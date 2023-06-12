import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {
    isLoading: loading,
    data: classes = [],
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-brown.vercel.app/classes`
      );
      return res.json();
    },
  });
  return [classes, loading, refetch];
};

export default useClasses;
