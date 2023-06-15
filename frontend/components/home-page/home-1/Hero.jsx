import Image from 'next/image';
import React from 'react';

const Hero1 = () => {
  const options = [
    { value: 0, display: 'Select insurance type..' },
    { value: 1, display: 'Life Insurance' },
    { value: 2, display: 'Health insurance' },
    { value: 3, display: 'Property insurance' },
    { value: 4, display: 'Motor insurance' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Unlock Your Financial Potential: <span>Expert Investment</span>{' '}
              &amp; Advisory Services.
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
 
            Let& apos;s Start Building Your Path to Financial Prosperity - Contact Us Today.
  
              Let&apos;s Start Building Your Path to Financial Prosperity - Contact
              Us Today.
    
            </p>
            {/* <form
              className="search-area d-md-inline-flex m-auto d-no"
              onSubmit={handleSubmit}
            >
              <select className="nice-select form-select">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.display}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="zip-code-input"
                placeholder="Your Zip code"
              />
              <button className="fw-500 text-white tran3s" type="submit">
                Search
              </button>
            </form> */}
            {/* End form */}

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
 
                <Image src="/images/icon/icon_99.svg"  width={95}
  
    
                height={30} alt="" className="me-1" />
                <span>An UK insurer approved by the UICO.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

     <img
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
     <img
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
