"use client"



import CardContainer from "@/components/card-container";


const Expeditions = () => {
  return (
    <div className="relative  bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400 gap-40">
      
      <div className=" py-[120px] px-[30px] relative self-stretch h-[400px] flex flex-col  items-center justify-center bg-[url('/lake.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Expeditions
          </div>
          <div className=" text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white p-8">Expeditions</span>
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-col items-center justify-start  py-[120px] px-[30px] gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        
        <CardContainer />
        
      </div>
      
    </div>
  );
};

export default Expeditions;
