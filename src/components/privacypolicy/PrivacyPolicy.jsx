import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 pt-20 text-gray-700 leading-7">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>ShinyGem Jewellery</strong>. We care about your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. What Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Personal Details: Name, email, phone number, shipping address</li>
        <li>Payment Information (processed via secure third-party gateways)</li>
        <li>Browsing data, IP address, device info, and cookies</li>
        <li>Order history and support messages</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Fulfill and manage your orders</li>
        <li>Provide customer support</li>
        <li>Send updates, promotions, and offers (opt-out anytime)</li>
        <li>Improve our platform and prevent fraud</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing & Third Parties</h2>
      <p className="mb-4">
        We never sell your data. However, we may share it with trusted partners for order fulfillment, analytics, and payment processing, such as:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Payment gateways (Razorpay, Stripe, etc.)</li>
        <li>Delivery/logistics partners</li>
        <li>Marketing tools (Google Ads, Meta Pixel anonymized)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience, remember preferences, and analyze website traffic. You can manage cookie settings through your browser at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention</h2>
      <p className="mb-4">
        We retain your personal data only as long as necessary to provide our services or as required by law. When no longer needed, your data is securely deleted.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Right to access and update your data</li>
        <li>Right to request deletion</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent</li>
      </ul>
      <p className="mb-4">
        Contact us at <a href="mailto:support@shinygemjewellery.com" className="text-blue-600 underline">support@shinygemjewellery.com</a> for any privacy-related requests.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Security Measures</h2>
      <p className="mb-4">
        We implement advanced security practices, including HTTPS, encryption, and secure third-party services to keep your data safe. However, no method of transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Children‘s Privacy</h2>
      <p className="mb-4">
        Our website is not intended for children under the age of 13. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Policy Updates</h2>
      <p className="mb-4">
        We may revise this policy from time to time. Changes will be reflected on this page with the updated effective date.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
