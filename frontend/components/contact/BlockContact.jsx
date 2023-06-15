import Image from 'next/image';

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: '/images/icon/icon_147.svg',
      title: 'Our Address',
      content:
        '18, 2nd floor, KV Jairam Rd, Jakkuru, Bengaluru, Karnataka 560064',
      delay: '100',
    },
    {
      icon: '/images/icon/icon_148.svg',
      title: 'Contact Info',
      content: 'Open a chat or give us call at',
      link: 'tel:078995 27597',
      delay: '200',
    },
    {
 
      icon: "/images/icon/icon_149.svg",
      title: "Live Support",
      content: "live chat service",
      link: "investors@wayonc.com",
      delay: "300",

  
      icon: '/images/icon/icon_149.svg',
      title: 'Live Support',
      content: 'live chat service',
      link: 'investors@wayonc.com',
      delay: '300',
      link: 'investors@wayonc.com',
      delay: '300',
    
    },
  ];

  return (
    <>
      
   
         <div className="row">
     <div
          className="col-md-4"
       
          data-aos="fade-up"
          data-aos-delay={100}
        >
        
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
 
              <Image width={30} height={30} src='/images/icon/icon_147.svg' alt="icon" />
  
    
            </div>
            <h5 className="title">Our Address</h5>
            <p>
 
            18, 2nd floor, KV Jairam Rd, Jakkuru, Bengaluru, Karnataka 560064
  
              {/* {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes('tel:') ? 'call' : 'webaddress'
                  }
                >
                  {block.link.replace('tel:', '')}
                </a>
              )} */}
    
            </p>
          </div>
          
        </div>
        <div
          className="col-md-4"
       
          data-aos="fade-up"
          data-aos-delay={200}
        >
        
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
 
              <Image width={30} height={30} src='/images/icon/icon_147.svg' alt="icon" />
  
    
            </div>
            <h5 className="title">Contact Info</h5>
            <p>
 
            Open a chat or give us call at
  
              {/* {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes('tel:') ? 'call' : 'webaddress'
                  }
                >
                  {block.link.replace('tel:', '')}
                </a>
              )} */}
    
            </p>
            <a className='fs-5 text-danger' href="tel:078995 27597">078995 27597</a>
          </div>
          
        </div>
        <div
          className="col-md-4"
       
          data-aos="fade-up"
          data-aos-delay={300}
        >
        
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
 
              <Image width={30} height={30} src='/images/icon/icon_147.svg' alt="icon" />
  
    
            </div>
            <h5 className="title">Life Support</h5>
            <p>
 
            live chat service
  
              {/* {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes('tel:') ? 'call' : 'webaddress'
                  }
                >
                  {block.link.replace('tel:', '')}
                </a>
              )} */}
    
            </p>
            <a className='fs-5 text-danger' href="mailto:investors@wayonc.com">investors@wayonc.com</a>
          </div>
          
        </div>
     </div>
     
    
    </>
  );
};

export default BlockContact;
