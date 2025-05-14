import React from 'react';
import { Helmet } from 'react-helmet';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Helmet>
        <title>HIMALNPNE</title>
        <meta name="description" content="Our comprehensive privacy policy detailing how your data is collected, processed, and protected." />
      </Helmet>

      {/* Background accents */}
      <div className="floating-accent red-accent"></div>
      <div className="floating-accent blue-accent"></div>
      <div className="floating-accent purple-accent"></div>

      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy ("Policy") outlines how we collect, use, disclose, and safeguard your information when you visit our website. 
            We are committed to protecting your personal information and your right to privacy in accordance with applicable laws and regulations, 
            including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other similar privacy laws.
          </p>
          <p>
            By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our 
            policies and practices, please refrain from using our website.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect several types of information from and about users of our website, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, and any other information you voluntarily provide through our contact forms or communication channels.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, page visit timestamps, and referring URLs through analytics tools and cookies.</li>
            <li><strong>User Submissions:</strong> Any content, materials, or information you voluntarily submit to us, such as résumés, comments, or feedback.</li>
            <li><strong>Professional Information:</strong> Education, work experience, skills, and other career-related information that you choose to share with us.</li>
          </ul>
          <p>
            <strong>Important:</strong> Please refrain from submitting sensitive information such as passwords, financial data, or government-issued identification numbers through our contact forms or other unsecured channels.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including but not limited to:</p>
          <ul>
            <li>Responding to your inquiries and providing requested information</li>
            <li>Sending you communications that you have opted to receive</li>
            <li>Improving our website functionality, user experience, and service quality</li>
            <li>Analyzing usage patterns and optimizing website performance</li>
            <li>Protecting our rights, property, or safety, and that of our users or others</li>
            <li>Complying with legal obligations and resolving any disputes</li>
          </ul>
        </section>

        <section>
          <h2>4. Legal Basis for Processing (GDPR)</h2>
          <p>Under the General Data Protection Regulation, we process your personal data on the following legal grounds:</p>
          <ul>
            <li><strong>Consent:</strong> When you explicitly agree to the processing of your personal data for specific purposes, such as receiving newsletters or communications.</li>
            <li><strong>Contractual Necessity:</strong> When processing is necessary for the performance of a contract or to take steps at your request prior to entering into a contract.</li>
            <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests, such as improving our services or ensuring network security, provided that these interests are not overridden by your fundamental rights.</li>
            <li><strong>Legal Compliance:</strong> When processing is necessary to comply with a legal obligation to which we are subject.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. Our specific retention periods vary based on the type of information and purpose of processing:
          </p>
          <ul>
            <li>Contact form submissions and correspondence: Up to 3 years from the date of last interaction</li>
            <li>Newsletter subscriptions: Until you unsubscribe or withdraw consent</li>
            <li>Analytics data: 14-26 months, in accordance with our analytics platform settings</li>
            <li>Application materials and résumés: Up to 2 years from the date of submission, unless you request earlier deletion</li>
          </ul>
        </section>

        <section>
          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li><strong>Access:</strong> The right to request copies of your personal information that we possess.</li>
            <li><strong>Rectification:</strong> The right to request correction of information you believe is inaccurate or incomplete.</li>
            <li><strong>Erasure:</strong> The right to request deletion of your personal information under certain circumstances.</li>
            <li><strong>Restriction:</strong> The right to request that we temporarily or permanently stop processing all or some of your personal information.</li>
            <li><strong>Data Portability:</strong> The right to request transfer of your personal information to you or a third party in a structured, commonly used, and machine-readable format.</li>
            <li><strong>Objection:</strong> The right to object to processing of your personal information based on legitimate interests or direct marketing.</li>
            <li><strong>Withdrawal of Consent:</strong> The right to withdraw any consent you have provided for the processing of your personal information at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided in the "Contact Us" section. We will respond to your request within the timeframe required by applicable law.
          </p>
        </section>

        <section>
          <h2>7. Data Sharing and Third Parties</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties for monetary or other valuable consideration. However, we may share your information with:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as hosting providers, email delivery services, and analytics platforms.</li>
            <li><strong>Legal Authorities:</strong> Law enforcement agencies, courts, regulatory bodies, or other government authorities when required by applicable laws, regulations, or legal processes.</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
          </ul>
          <p>
            All third parties with whom we share your information are required to protect your personal information in accordance with this Policy and applicable law.
          </p>
        </section>

        <section>
          <h2>8. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver personalized content. These technologies may collect information about your browsing behavior and preferences.
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly and cannot be disabled.</li>
            <li><strong>Preference Cookies:</strong> Enable the website to remember your preferences and settings.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website and improve its performance.</li>
          </ul>
          <p>
            You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may impact your experience on our website and limit access to some features.
          </p>
        </section>

        <section>
          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include, but are not limited to:
          </p>
          <ul>
            <li>Secure Sockets Layer (SSL) encryption for data transmission</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication protocols</li>
            <li>Data minimization and purpose limitation practices</li>
          </ul>
          <p>
            While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security of your data.
          </p>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have data protection laws that differ from those in your country of residence.
          </p>
          <p>
            Whenever we transfer your personal information internationally, we ensure a similar degree of protection by implementing appropriate safeguards, including but not limited to Standard Contractual Clauses approved by the European Commission or other legally recognized mechanisms.
          </p>
        </section>

        <section>
          <h2>11. Children's Privacy</h2>
          <p>
            Our website is not intended for individuals under the age of 16 (or higher, as required by local law). We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information from our systems.
          </p>
        </section>

        <section>
          <h2>12. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated Policy will be posted on this page with a revised "Last Updated" date. For significant changes, we may provide additional notice through the website or via email if appropriate.
          </p>
          <p>
            We encourage you to review this Policy regularly to stay informed about how we protect your information.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us through the designated contact form on our website. For data subjects in the European Union, we serve as the data controller for your personal information.
          </p>
          <p>
            <strong>Important:</strong> When contacting us regarding privacy matters, please do not include sensitive personal information in your initial communication.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;