import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="p-6"
      height={130}
      width={130}
      alt="logo"
      src={"/next.svg"}
    />
  );
};

export default Logo;
