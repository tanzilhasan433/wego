/* eslint-disable react/prop-types */


const OneWayCard = ({ classItem }) => {
    const { airport_name, city_name, country_name } = classItem;
    console.log(classItem);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">


        <div className="card-body">
            <h2 className="card-title">
                {airport_name}
                <div className="badge badge-success text-white">TOP</div>
            </h2>
            <p>{city_name}</p>
            <div className='inline-flex items-center'>
                
            </div>

            <div className="card-actions justify-end">
                <div className="badge badge-outline">{country_name}</div>
                <div className="badge badge-outline">Best</div>
            </div>
        </div>
    </div>
    );
};

export default OneWayCard;