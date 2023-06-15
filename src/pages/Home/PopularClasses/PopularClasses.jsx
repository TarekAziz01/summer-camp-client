import Class from "../../../component/Class/Class";
import useClasses from "../../../hook/useClasses";


const PopularClasses = () => {
    const [classes, loading ] = useClasses()
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    const firstSix = classes.slice(0, 6);

    return (
      <div>
        <h2 className="text-3xl font-semibold text-center my-10">
          popular classes
        </h2>
        {classes.length && (
          <div className="flex flex-wrap">
            {firstSix.map((item) => (
              <Class key={item._id} item={item}></Class>
            ))}
          </div>
        )}
      </div>
    );
};

export default PopularClasses;