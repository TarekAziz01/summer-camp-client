import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;