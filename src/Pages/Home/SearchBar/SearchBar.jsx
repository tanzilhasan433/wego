import { Tabs } from "keep-react";
import SearchTabs from "../SearchTabs/SearchTabs";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { PiAirplaneInFlight } from "react-icons/pi";
import { FaHotel } from "react-icons/fa";
const SearchBar = () => {
    return (
        <div className="m-20">
                    <Tabs
                        aria-label="Tabs"
                        style="underline"
                        borderPosition="bottom"
                        iconPosition="left"
                        >
                        <Tabs.Item title="Flight" icon={<MdOutlineFlightTakeoff size={20} />}>
                                <SearchTabs></SearchTabs>
                        </Tabs.Item>

                        <Tabs.Item title="Hotels" icon={<FaHotel size={20} />}>
                            Hotel Content
                        </Tabs.Item>

                        <Tabs.Item title="Wego Pro Business" icon={<PiAirplaneInFlight size={20} />}>
                            Wego pro business 
                        </Tabs.Item>

                        </Tabs>
        </div>
    );
};

export default SearchBar;