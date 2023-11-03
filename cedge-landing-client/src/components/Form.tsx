import { useState } from "react";
import jsonp from "jsonp";
import InputText from "../cedge-library/components/InputText";
import MailchimpImage from "./assets/mailchimp.svg";
import Text, { TextTypes } from "../cedge-library/components/Text";
import styled from "styled-components";
import Layout from "./layout/Layout";
import Logo from "../cedge-library/components/Logo";
import { device } from "../cedge-library/util/mediaQueries";
import MailchimpForm from "./MailchimpForm";
import Image from "../cedge-library/components/Image";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;

    #form-paragraph {
      max-width: 100% !important;
    }

    #form-logo {
      text-align: left !important;
      img {
        width: 10rem !important;
        margin-top: 2rem;
      }
    }
  }
`;

const FormWrapper = styled.form``;

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const url =
      "https://formulathoughts.us21.list-manage.com/subscribe/post?u=40566f5c505e58dd2d7264e9c&amp;id=e3a375b701&amp;f_id=0015dee6f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_: any, data: any) => {
      console.log("data", data);
      const { msg } = data;

      alert(msg);
    });
  };

  return (
    <Layout>
      <Wrapper>
        <FormWrapper id="form-anchor" onSubmit={onSubmit}>
          <Text
            style={{ fontWeight: "bold", marginBottom: "1rem" }}
            type={TextTypes.title}
          >
            wanna know more?
          </Text>
          <Text
            id="form-paragraph"
            style={{ maxWidth: "60%", marginBottom: "1.5rem" }}
            type={TextTypes.paragraph}
          >
            we want to be part of your career journey and help you achieve what
            you think is unachievable.
          </Text>
          <MailchimpForm />
          <Text
            style={{ opacity: 0.6, marginTop: "1rem" }}
            type={TextTypes.paragraph}
          >
            by joining our mailing list, you are accepting our{" "}
            <span
              onClick={() => navigate("terms")}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              terms and conditions
            </span>
            .
          </Text>
        </FormWrapper>
        <div id="form-logo" style={{ textAlign: "right", flex: 1 }}>
          <Logo style={{ width: "15rem" }} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Form;
