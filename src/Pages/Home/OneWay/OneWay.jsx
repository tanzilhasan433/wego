import { useEffect, useState } from "react";
import OneWayCard from "../OneWayCard/OneWayCard";

const OneWay = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://enterpise.s3.ap-southeast-1.amazonaws.com/resources/airport.json')
            .then(res => res.json())
            .then(data => setClasses(data))
            
    }, []);

    return (
        <div>

                <div>
                {
                    classes.map(classItem => <OneWayCard
                        key={classItem._id}
                        classItem={classItem}
                    ></OneWayCard>)
                }
                </div>

                <div className="mt-10">
      
      <div className="flex mt-5 g-10 gap-4 m-5 p-5 bg-slate-200">
        <select
          className="select select-bordered w-full max-w-xs"

        >
          <option disabled value="">
            বিভাগ
              
          </option>

        </select>

        <select
          className="select select-bordered w-full max-w-xs"
         
        >
          <option disabled value="">
            জেলা
          </option>

        </select>

        <select
          className="select select-bordered w-full max-w-xs"
         
        >
          <option disabled value="">
            উপজেলা
          </option>
          
        </select>

        <div className="">
          <button className="btn p-4  bg-slate-400  me-48  w-full max-w-xs">
                        Search 
          </button>
        </div>
      </div>


    </div>
        </div>
    );
};

export default OneWay;


