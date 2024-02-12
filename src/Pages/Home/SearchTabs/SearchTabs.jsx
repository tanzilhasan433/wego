import { Tabs } from "keep-react";
import OneWay from "../OneWay/OneWay";

const SearchTabs = () => {
    return (
        <div>
                <Tabs aria-label="tabs" style="underline" borderPosition="bottom">
                    <Tabs.Item title="One Way">
                        
                       <OneWay></OneWay>
                    
                    </Tabs.Item>
                    <Tabs.Item title="Round Trip">
                        
                        Round Trip
                    
                    </Tabs.Item>
                    <Tabs.Item title="Multi City">
                        
                        Multi City
                        
                        </Tabs.Item>
                </Tabs>
        </div>
    );
};

export default SearchTabs;