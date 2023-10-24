import React from 'react';

const TermsAndPrivacy = () => {
    return (
        <div className="terms-and-privacy-container">
            <section className="terms-section">
                <h2>Terms and Conditions</h2>
                <ol>
                    <li>
                        <strong>Introduction</strong>
                        <p>By accessing and using our website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
                    </li>
                    <li>
                        <strong>Service Provision</strong>
                        <p>"cedge" provides [Service/Product Description]. We reserve the right to change, suspend, or discontinue any aspect of our services at any time.</p>
                    </li>
                    <li>
                        <strong>Registration</strong>
                        <p>[If users can create accounts:] Users may need to register for an account to access certain features or services. Users must provide accurate and complete information and keep their account information updated.</p>
                    </li>
                    <li>
                        <strong>User Data</strong>
                        <p>We respect your privacy and the use and protection of your personal information. Please see our Privacy Policy below for more information.</p>
                    </li>
                    <li>
                        <strong>Limitation of Liability</strong>
                        <p>"cedge" is not liable for any indirect, special, incidental, or consequential damages related to the use or inability to use our services.</p>
                    </li>
                    <li>
                        <strong>Governing Law</strong>
                        <p>These terms shall be governed by and interpreted in accordance with the laws of [Country/Jurisdiction].</p>
                    </li>
                    <li>
                        <strong>Amendments</strong>
                        <p>We reserve the right to amend these terms at any time.</p>
                    </li>
                </ol>
            </section>

            <section className="privacy-section">
                <h2>Privacy Policy</h2>
                <ol>
                    <li>
                        <strong>Data Collection</strong>
                        <p>We collect personal data [types of data, e.g., name, email, etc.] when you register, use our services, or communicate with us.</p>
                    </li>
                    <li>
                        <strong>Data Use</strong>
                        <p>We use your data to provide, maintain, and improve our services, communicate with you, and [other uses, e.g., marketing].</p>
                    </li>
                    <li>
                        <strong>Data Sharing</strong>
                        <p>[If sharing with third parties:] We may share your data with partners, advertisers, and [other third parties, with reasons].</p>
                    </li>
                    <li>
                        <strong>Data Protection</strong>
                        <p>We implement security measures to protect your data. However, no method of transmission or storage is 100% secure.</p>
                    </li>
                    <li>
                        <strong>Cookies</strong>
                        <p>Our website uses cookies to enhance user experience.</p>
                    </li>
                    <li>
                        <strong>Your Rights</strong>
                        <p>You have the right to access, modify, or delete your personal data.</p>
                    </li>
                    <li>
                        <strong>Contact</strong>
                        <p>For any questions regarding these terms or our privacy practices, contact us at [company email].</p>
                    </li>
                </ol>
            </section>
        </div>
    );
}

export default TermsAndPrivacy;
