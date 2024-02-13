/* eslint-disable react/prop-types */


const OneWayCard = ({ classItem }) => {
    const {  city_name } = classItem;
    console.log(classItem);
    return (
        


        <div className="card-body">
           
            <p>{city_name}</p>
            

       
            </div>

    
    );
};

export default OneWayCard;