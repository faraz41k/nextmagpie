import Link from "next/link";
import { useMemo } from "react";

const LinkCardForm = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsArray,
  imageDimensionsTextArray,
  propWidth,
  propFlex,
  propMinWidth,
  propMaxWidth,
}) => {
  const card1Style = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]);

  return (
    <Link href='/'
      className="[text-decoration:none] rounded-3xs hover:opacity-100 bg-gray-100 box-border w-[350px] h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] text-left text-mini-5 text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5"
      style={card1Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-sm-6 text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-2xs-8 text-gray-500">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src={imageDimensionsText}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src={imageDimensionsText2}
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px] object-cover"
            alt=""
            src={imageDimensionsText3}
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-xs-6">
        <div className="shrink-0 flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
            alt=""
            src={imageDimensionsText4}
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src={imageDimensionsText5}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src={imageDimensionsArray}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 shrink-0 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px] object-cover"
              alt=""
              src={imageDimensionsTextArray}
            />
          </div>
        </div>
      </div>
    </Link >
  );
};

export default LinkCardForm;
