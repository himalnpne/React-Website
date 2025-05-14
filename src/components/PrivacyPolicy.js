import React from 'react';
import { Helmet } from 'react-helmet';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Helmet>
        <title>Privacy Policy | My Portfolio</title>
        <meta name="description" content="How your data is collected, used, and protected on this website." />
      </Helmet>

      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            This privacy policy explains how this website ("we", "us", or "our") collects, uses, and protects your
            personal data. It applies to all visitors ("you") regardless of location and complies with laws such as
            the GDPR (EU), CCPA (California), and similar regulations. By using this site, you agree to this policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect personal and technical data, including:</p>
          <ul>
            <li><strong>Contact information:</strong> Name, email, or any message you submit (e.g., via contact form or newsletter sign-up). Use aliases (e.g., name+alias@example.com) if preferred.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device, OS, pages visited, and referring URLs (via cookies or analytics tools).</li>
            <li><strong>User content:</strong> Any submissions or uploads, such as résumés, comments, or media.</li>
            <li><strong>Optional info:</strong> Employment details or portfolio content, if voluntarily provided.</li>
          </ul>
          <p><strong>Do not include passwords or confidential data in forms. We are not liable for data compromises from your side.</strong></p>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <ul>
            <li>To respond to your inquiries or form submissions</li>
            <li>To send updates if you subscribed (you can opt out anytime)</li>
            <li>To analyze and improve the site's performance and content</li>
            <li>To fulfill legal obligations, protect rights, and handle disputes</li>
          </ul>
        </section>

        <section>
          <h2>4. Legal Grounds (GDPR)</h2>
          <p>We only use your data when legally allowed, based on:</p>
          <ul>
            <li><strong>Consent:</strong> e.g., for email subscriptions or optional cookies</li>
            <li><strong>Contractual necessity:</strong> e.g., if we work together or you request services</li>
            <li><strong>Legitimate interest:</strong> e.g., site analytics or replying to your contact form</li>
            <li><strong>Legal obligation:</strong> e.g., to comply with taxes or government requests</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>We keep data only as long as necessary. Examples:</p>
          <ul>
            <li>Contact form messages: up to 3 years or until you ask us to delete them</li>
            <li>Newsletter subscriptions: until you unsubscribe</li>
            <li>Analytics data: up to 12–24 months, depending on service settings</li>
            <li>Résumés or applications: 1–2 years unless you ask for deletion</li>
          </ul>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You may have the right to:</p>
          <ul>
            <li>Access the data we hold about you</li>
            <li>Request correction of incorrect or outdated data</li>
            <li>Request deletion ("right to be forgotten")</li>
            <li>Restrict how we use your data</li>
            <li>Object to processing (especially for marketing)</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent at any time</li>
            <li>File a complaint with your local data protection authority</li>
          </ul>
        </section>

        <section>
          <h2>7. Data Sharing</h2>
          <p>We do not sell your data. We may share data with:</p>
          <ul>
            <li>Trusted services like hosting providers, analytics tools (e.g., Google Analytics), or email services</li>
            <li>Authorities, if legally required (e.g., court orders)</li>
            <li>New owners if this site is transferred, sold, or merged</li>
          </ul>
        </section>

        <section>
          <h2>8. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tools for site functionality and analytics. You’ll be asked for consent where
            legally required (e.g., GDPR or CCPA regions).
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Needed for basic site operations</li>
            <li><strong>Preference cookies:</strong> Save your choices</li>
            <li><strong>Analytics cookies:</strong> Help improve the site</li>
            <li><strong>Marketing cookies:</strong> <em>(Not used currently)</em></li>
          </ul>
          <p>You can disable cookies via your browser settings.</p>
        </section>

        <section>
          <h2>9. Data Security</h2>
          <p>
            We use standard security measures like HTTPS, encryption, access control, and regular updates to keep your data
            safe. Still, no system is 100% secure, so avoid sharing sensitive data (e.g., passwords) via forms.
          </p>
        </section>

        <section>
          <h2>10. International Transfers</h2>
          <p>
            Your data may be processed in countries outside your own (e.g., US, EU). When we transfer data internationally,
            we follow legal safeguards such as Standard Contractual Clauses to ensure protection.
          </p>
        </section>

        <section>
          <h2>11. Children's Privacy</h2>
          <p>
            This site is not intended for children under 16 (or 18 in California). If you believe a minor has submitted data,
            please contact us so we can delete it.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this policy over time. Updates will be posted here with a new date. Major changes may also be
            announced through notices or email (if applicable).
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions or want to exercise your rights, use the contact form on this website.
            <strong> Do not include passwords or sensitive data.</strong>
          </p>
        </section>


      </div>
    </div>
  );
};

export default PrivacyPolicy;
