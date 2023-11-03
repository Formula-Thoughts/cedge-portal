import React from "react";
import InputText from "../cedge-library/components/InputText";
import Button from "../cedge-library/components/Button";
import { device } from "../cedge-library/util/mediaQueries";
import styled from "styled-components";
import Image from "../cedge-library/components/Image";
import MailchimpImage from "./assets/mailchimp.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.tablet} {
    display: block;
    text-align: center;

    #mc-embedded-subscribe-form {
      #mce-EMAIL {
        width: 100%;
      }

      #mc-embedded-subscribe {
        width: 100%;
        margin: 0 !important;
        margin-top: 1rem !important;
      }
    }
  }
`;

const MailchimpForm = () => {
  return (
    <Wrapper id="mailchimp-input">
      <div id="mc_embed_shell">
        <div id="mc_embed_signup">
          <form
            action="https://formulathoughts.us21.list-manage.com/subscribe/post?u=40566f5c505e58dd2d7264e9c&amp;id=e3a375b701&amp;f_id=0015dee6f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <InputText
              id="mce-EMAIL"
              type="email"
              name="EMAIL"
              required
              placeholder="enter your email..."
            ></InputText>
            <Button
              id="mc-embedded-subscribe"
              name="subscribe"
              style={{ marginLeft: "1rem" }}
              label="join"
              type="submit"
            />
            <div id="mc_embed_signup_scroll">
              <div
                aria-hidden={true}
                style={{ position: "absolute", left: "-5000px" }}
              >
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <input
                  type="text"
                  name="b_40566f5c505e58dd2d7264e9c_e3a375b701"
                  tabIndex={-1}
                  value=""
                />
              </div>
            </div>
          </form>
        </div>
        <script
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='email';
            fnames[1]='FNAME';
            ftypes[1]='text';
            fnames[2]='LNAME';
            ftypes[2]='text';
            fnames[3]='ADDRESS';
            ftypes[3]='address';
            fnames[4]='PHONE';
            ftypes[4]='phone';
            fnames[5]='BIRTHDAY';
            ftypes[5]='birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        `}
        </script>
      </div>

      <Image
        style={{ width: "12rem" }}
        alt="mailchimp image"
        src={MailchimpImage}
      />
    </Wrapper>
  );
};

export default MailchimpForm;
