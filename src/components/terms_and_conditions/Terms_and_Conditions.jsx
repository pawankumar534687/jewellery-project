import React from "react";

const Terms_and_Conditions = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 pt-20 text-gray-700 leading-7">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
      
      <p className="mb-4">
        Welcome to <strong>Bitek Mart</strong>. These Terms & Conditions govern your access to and use of our website, services, and products. By using our platform, you agree to these Terms in full.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Our Website</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>You must be at least 18 years old to make a purchase.</li>
        <li>All information provided must be accurate and current.</li>
        <li>You agree not to misuse the site or its services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account & Security</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>You are responsible for maintaining the confidentiality of your account information.</li>
        <li>Ensure your login credentials are secure.</li>
        <li>Notify us immediately if you suspect unauthorized access.</li>
        <li>We reserve the right to suspend accounts that violate these Terms.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Orders & Payment</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>All orders are subject to availability and confirmation.</li>
        <li>Prices are listed in INR and are subject to change without notice.</li>
        <li>We use secure third-party payment gateways. Bitek Mart does not store your card details.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Delivery & Shipping</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Delivery times are estimates and not guaranteed.</li>
        <li>Delays due to weather, strikes, or unforeseen events may occur.</li>
        <li>You are responsible for ensuring someone is available to receive the order.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Returns & Refunds</h2>
      <p className="mb-4">
        Please refer to our Return & Refund Policy for details on how to initiate returns and request refunds.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
      <p className="mb-4">
        All content on this site, including images, text, logos, and graphics, is the property of Bitek Mart and protected by copyright laws. You may not reproduce, copy, or distribute any part without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Prohibited Activities</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Hacking, scraping, or reverse engineering the website</li>
        <li>Using the site for illegal purposes</li>
        <li>Uploading malicious code or harmful content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access if you violate any of these Terms or engage in fraudulent or abusive activity.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
      <p className="mb-4">
        Bitek Mart is not liable for indirect, incidental, or consequential damages arising from your use of the website or purchase of products.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Any changes will be posted on this page with the revised date. Continued use of the website means you accept the changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">11. Contact Us</h2>
      <p className="mb-4">
        For any questions regarding these Terms & Conditions, please email us at <a href="mailto:support@bitekmart.com" className="text-blue-600 underline">support@bitekmart.com</a>.
      </p>
    </div>
  );
};

export default Terms_and_Conditions;
