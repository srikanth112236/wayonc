 

  
import Link from 'next/link';
import Footer2 from './Footer2';
import NewsLetter from './NewsLetter';
import CopyrightFooter2 from './CopyrightFooter2';
import Image from 'next/image';
    

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <Image src="/images/logo/logo.png"  width={150}
                height={150} alt="brand" />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-xl-4 col-lg-5 mb-30 form-widget d-none">
              <h5 className="footer-title tx-dark fw-normal">Newslettert</h5>
              <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
              <NewsLetter />
              <div className="fs-14 mt-10">
                We only send interesting and relevant emails.
              </div>
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.bg-wrapper */}
      <CopyrightFooter2 />
      {/* /.bottom-footer */}
      <Image
        src="/images/shape/shape_173.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
        width={95}
                height={30}
      />
    </div>
  );
};

export default DefaultFooter;
