import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckBox } from "keep-react";
import { Dropdown } from "keep-react";
import {  Gear, Money, SquaresFour } from "phosphor-react";
import { Button } from "keep-react";

// import OneWayCard from "../OneWayCard/OneWayCard";

const OneWay = () => {
    const [classes, setClasses] = useState([]);
    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const [count, setCount] = useState(0)
    

    useEffect(() => {
        fetch('http://localhost:5000/selector')
            .then(res => res.json())
            .then(data => setClasses(data))
            
    }, []);

    const handleFromChange = (event) => {
      setFromValue(event.target.value);
  };

  const handleToChange = (event) => {
      setToValue(event.target.value);
  };

  const handleSearch = () => {
      // Handle search action with fromValue and toValue
  };

  const handleChecked = () => {
    //value
  };

    return (
        <div>


                <div className="mt-10">
      
      <div className="flex mt-5 g-10 gap-4 m-5 p-5 bg-slate-200">
        <select
          className="select select-bordered w-full max-w-xs"
          value={fromValue}
          onChange={handleFromChange}
        >
          <option disabled value="">
           From
         </option> 
                
              {classes.map((classItem, index) => (
                  <option key={index} value={classItem.code}>
                    {classItem.airport_name} - {classItem.city_name}, {classItem.country_name}
                  </option>
                ))}
                         
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={toValue}
          onChange={handleToChange}
        >
          <option disabled value="">
            To
          </option>
          {classes.map((classItem, index) => (
                  <option key={index} value={classItem.code}>
                    {classItem.airport_name} - {classItem.city_name}, {classItem.country_name}
                  </option>
                ))}
        </select>

        <div
          className="select select-bordered w-full max-w-xs flex"
          // value={toValue}
          // onChange={handleToChange}
        >
          <option disabled value="">
            Depart :
          </option>
                     <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="select select-bordered w-full max-w-xs"
                    />

                    {/* <p className="me-4 ms-4">to</p>

                     <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="select select-bordered w-full max-w-xs"
                    /> */}
          </div>




      </div>
      <div className="flex gap-20 m-10">
              <div>
              <CheckBox
                  size="md"
                  variant="square"
                  label="Direct flight only"
                  id="two"
                  name="countries"
                  color="info"
                  handleChecked={handleChecked}
      />
              </div>
              <div>
              <Dropdown
                      label="Passengers"
                      type=""
                      size="sm"
                      dismissOnClick={true}
                    >
                      <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
                      Adults
                      <button className="ms-10" onClick={() => setCount((count) => count + 1)}>
                          count is {count}
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
                      Children
                      
                       <button className="ms-10" onClick={() => setCount((count) => count + 1)}>
                          count is {count}
                        </button>
      
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Money size={20} color="#5E718D"  />}>
                      Infants
                      <button className="ms-10" onClick={() => setCount((count) => count + 1)}>
                          count is {count}
                        </button>
                      </Dropdown.Item>
                     
                    </Dropdown>
              </div>
              <div>
                    <Dropdown
                          label="Economy"
                          size="sm"
                          type=""
                          dismissOnClick={true}
                        >
                          <Dropdown.Item>Premium Economy</Dropdown.Item>
                          <Dropdown.Item>Business Class</Dropdown.Item>
                          <Dropdown.Item>First Class</Dropdown.Item>
                        </Dropdown> 
              </div>
              <div>
                          <Dropdown
                              label="Payment Type"
                              size="sm"
                              type=""
                              dismissOnClick={true}
                            >
                              <Dropdown.Item>Master Card</Dropdown.Item>
                              <Dropdown.Item>Visa Card</Dropdown.Item>
                              <Dropdown.Item>Paypal</Dropdown.Item>
                              <Dropdown.Item>Brac Bank</Dropdown.Item>
                              <Dropdown.Item>Bank Transfer</Dropdown.Item>
                              <Dropdown.Item>Cash Payments</Dropdown.Item>
                              <Dropdown.Item>Bit Coin</Dropdown.Item>
                              <Dropdown.Item>Apple Pay</Dropdown.Item>
                            </Dropdown> 
              </div>
              <div className="">
                           {/* <button className="btn p-4  bg-slate-400  me-48  w-full max-w-xs" onClick={handleSearch}>
                               Search 
                           </button> */}
                           <Button size="md" type="primary" onClick={handleSearch}>Search</Button>
         </div>
</div>
    </div>

           <div className="flex gap-20 m-10">
                <p>Selected From: {fromValue}</p>
                <p>Selected To: {toValue}</p>
            </div>

        </div>
    );
};

export default OneWay;


