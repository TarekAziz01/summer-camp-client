const Class = ({ item }) => {
  return (
    <div className="md:w-1/2 lg:w-1/3 px-4 mb-6 mx-auto">
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{item.name}</h2>
          <p className="text-xl">Instructor: {item.instructor}</p>
          <p className="text-lg">Available Seat: {item.availableSeat}</p>
          <p className="text-lg">Price: ${item.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
