import Link from "next/link";
import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col bg-primary-800">
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between text-left text-5xl text-gray-300 font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <Link href='/' className="[text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]">
            <Image
              height={50}
              width={50}
              className="relative w-11 h-11 object-cover"
              alt=""
              src="/logo.svg"
            />
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </Link>
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="relative leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <Link href='/' className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </Link>
            <Link href='/' className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </Link>
            <Link href='/' className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </Link>
            <Link href='/' className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </Link>
            <Link href='/' className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <Image
                height={20}
                width={20}
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </Link>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Tours</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Climbing
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Site Seeing
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Trekking
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Expeditions
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </Link>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              About Us
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Press
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Contact
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Careers
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </Link>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Terms of servies
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Privacy Policy
            </Link>
            <Link href='/' className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
