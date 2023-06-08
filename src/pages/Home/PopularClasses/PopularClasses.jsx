import useClasses from "../../../hook/useClasses";


const PopularClasses = () => {
    const [classes, loading ] = useClasses()
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div>
            <h2>popular classes:{classes.length} section</h2>
        </div>
    );
};

export default PopularClasses;