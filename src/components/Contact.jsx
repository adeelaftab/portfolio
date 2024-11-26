import React, { useEffect } from 'react';
import SocialBtns from './SocialBtns';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactInfo } = data;
  useEffect(() => {
    // Dynamically load the LinkedIn badge script
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup to remove the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              
              <div className="contact-banner d-none d-lg-block">
                <div className="linkedin-badge">
                {/* Add your LinkedIn badge HTML here */}
                
                  <a
                    className="LI-simple-link"
                    href="https://www.linkedin.com/in/adeel-aftab"
                    target="_blank" rel="noreferrer"
                  >
                    <div
                      className="badge-base LI-profile-badge"
                      data-version="v1"
                      data-size="medium"
                      data-locale="en_US"
                      data-type="vertical"
                      data-theme="dark"
                      data-vanity="adeel-aftab"
                    >
                    </div>
                  </a>
              </div>
              </div>
              <ContactInfo contactInfoData={contactInfo} />
              <SocialBtns socialBtns={socialData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
