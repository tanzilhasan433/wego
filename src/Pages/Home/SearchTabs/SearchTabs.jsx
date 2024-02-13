import { Tabs } from "keep-react";
import OneWay from "../OneWay/OneWay";
import RoundTrip from "../RoundTrip/RoundTrip";
import MultiCity from "../MultiCity/MultiCity";

const SearchTabs = () => {
    return (
        <div>
                <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
                    <Tabs.Item title="One Way">
                        
                       <OneWay></OneWay>
                    
                    </Tabs.Item>
                    <Tabs.Item title="Round Trip">
                        
                        <RoundTrip></RoundTrip>
                    
                    </Tabs.Item>
                    <Tabs.Item title="Multi City">
                        
                        <MultiCity></MultiCity>
                        
                        </Tabs.Item>
                </Tabs>
        </div>
    );
};

export default SearchTabs;