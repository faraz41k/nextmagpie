"use client"



import CardContainer from "@/components/card-container";


const Climbing = () => {
  return (
    <div className="relative  bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400 gap-40">
      
      <div className=" py-[120px] px-[30px] relative self-stretch h-[400px] flex flex-col  items-center justify-center bg-[url('/lake.jpg')] bg-cover bg-no-repeat bg-center ">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Climbing
          </div>
          <div className=" text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white p-8">Climbing</span>
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-col items-center justify-start  py-[120px] px-[30px] gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        
        <div className="flex flex-col flex-wrap items-center justify-center my-4 mx-auto max-w-2xl md:max-w-4xl ">
          
          <h1 className="text-6xl font-extrabold mb-9 w-full text-center">About Us</h1>
          <p className="flex mt-6 text-center sm:min-w-[900px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </div>


        
      </div>
      
    </div>
  );
};

export default Climbing;
