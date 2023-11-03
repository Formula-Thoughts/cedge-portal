import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import Text, { TextTypes } from "../cedge-library/components/Text";
import ScrollToTopOnRender from "../components/utils/ScrollToTopOnRender";

const Wrapper = styled.div`
  li {
    margin: 1rem 0;
  }

  p {
    margin-bottom: 0.5rem;
  }

  ol {
    margin-bottom: 3rem;
  }
`;

const Terms = () => {
  return (
    <>
      <ScrollToTopOnRender />
      <Layout>
        <Wrapper>
          <section className="terms-section">
            <Text type={TextTypes.title}>Terms and Conditions</Text>
            <ol>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Introduction
                </Text>
                <Text type={TextTypes.paragraph}>
                  By accessing and using our website, you accept and agree to be
                  bound by the terms and provisions of this agreement.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Company
                </Text>
                <Text type={TextTypes.paragraph}>
                  Formula Thoughts is the company behind cedge. A company
                  registered in the UK
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Service Provision
                </Text>
                <Text type={TextTypes.paragraph}>
                  "cedge" provides career services. We reserve the right to
                  change, suspend, or discontinue any aspect of our services at
                  any time.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Registration
                </Text>
                <Text type={TextTypes.paragraph}>
                  [If users can create accounts:] Users may need to register for
                  an account to access certain features or services. Users must
                  provide accurate and complete information and keep their
                  account information updated.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  User Data
                </Text>
                <Text type={TextTypes.paragraph}>
                  We respect your privacy and the use and protection of your
                  personal information. Please see our Privacy Policy below for
                  more information.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Limitation of Liability
                </Text>
                <Text type={TextTypes.paragraph}>
                  "cedge" is not liable for any indirect, special, incidental,
                  or consequential damages related to the use or inability to
                  use our services.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Governing Law
                </Text>
                <Text type={TextTypes.paragraph}>
                  These terms shall be governed by and interpreted in accordance
                  with the laws of the UK.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Amendments
                </Text>
                <Text type={TextTypes.paragraph}>
                  We reserve the right to amend these terms at any time.
                </Text>
              </li>
            </ol>
          </section>

          <section className="privacy-section">
            <Text type={TextTypes.title}>Privacy Policy</Text>
            <ol>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Data Collection
                </Text>
                <Text type={TextTypes.paragraph}>
                  We collect personal data when you register, use our services,
                  or communicate with us.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Data Use
                </Text>
                <Text type={TextTypes.paragraph}>
                  We use your data to provide, maintain, and improve our
                  services, communicate with you, and [other uses, e.g.,
                  marketing].
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Data Sharing
                </Text>
                <Text type={TextTypes.paragraph}>
                  [If sharing with third parties:] We may share your data with
                  partners, advertisers, and [other third parties, with
                  reasons].
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Data Protection
                </Text>
                <Text type={TextTypes.paragraph}>
                  We implement security measures to protect your data. However,
                  no method of transmission or storage is 100% secure.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Cookies
                </Text>
                <p>Our website uses cookies to enhance user experience.</p>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Your Rights
                </Text>
                <Text type={TextTypes.paragraph}>
                  You have the right to access, modify, or delete your personal
                  data.
                </Text>
              </li>
              <li>
                <Text style={{ fontWeight: "bold" }} type={TextTypes.paragraph}>
                  Contact
                </Text>
                <Text type={TextTypes.paragraph}>
                  For any questions regarding these terms or our privacy
                  practices, contact us at contact@formulathoughts.com.
                </Text>
              </li>
            </ol>
          </section>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Terms;
