 
import Image from "next/image";
  

    

const HeroGallery = () => {
  return (
    <>
      <div className="col-6">
        <div className="img-box position-relative mt-35 img-box-one">
          <Image
            src="/images/media/img_41.jpg"
            alt="img"
            className="lazy-img main-img"
          />
          <Image
            src="/images/shape/shape_115.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
        </div>
        <div className="img-box position-relative mt-35 img-box-two">
          <Image
            src="/images/media/img_42.jpg"
            alt="img"
            className="lazy-img main-img"
          />
          <Image
            src="/images/shape/shape_118.svg"
            alt="img"
            className="lazy-img shapes shape-four"
          />
        </div>
      </div>
      {/* End .col-6 */}

      <div className="col-6">
        <div className="img-box position-relative mt-35 img-box-three">
          <Image
            src="/images/media/img_43.jpg"
            alt="img"
            className="lazy-img main-img"
          />
          <Image
            src="/images/shape/shape_116.svg"
            alt="img"
            className="lazy-img shapes shape-two"
          />
          <Image
            src="/images/shape/shape_117.svg"
            alt="img"
            className="lazy-img shapes shape-three"
          />
        </div>
      </div>
    </>
  );
};

export default HeroGallery;
