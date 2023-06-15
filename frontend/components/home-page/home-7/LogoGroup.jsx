import Image from "next/image";

const LogoGroup = () => {
  const logoImages = [
    'Plogo-7.png',
    'Plogo-8.png',
    'Plogo-9.png',
    'Plogo-10.png',
    'Plogo-11.png',
    'Plogo-12.png',
    'Plogo-13.png',
  ];

  return (
    <>
      {logoImages.map((image, index) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={index}
        >
          <Image src={`/images/logo/${image}`} width={70} height={70} alt="logo" className="lazy-img" />
        </div>
      ))}
    </>
  );
};

export default LogoGroup;
