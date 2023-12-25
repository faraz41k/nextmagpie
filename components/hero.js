"use client"

import "antd";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";


const Hero = () => {
  // const router = useRouter();

  // const onSearchCTAClick = () => {
  //   router.push("/");
  // };

  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/lake.jpg')] bg-cover bg-center bg-no-repeat text-center text-33xl text-gray-200 font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-regular-600">
          


          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-transparent shrink-0 flex flex-row items-center justify-center py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
            
              
              
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
