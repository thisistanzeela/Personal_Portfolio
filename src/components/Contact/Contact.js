import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  // const [showTooltip, setShowTooltip] = useState(false);
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText("tanzeelamansoor99@gmail.com");
  //   setShowTooltip(true);
  //   setTimeout(() => {
  //     setShowTooltip(false);
  //   }, 700);
  // };

  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  // const [showMobileTooltip, setShowMobileTooltip] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("tanzeelamansoor99@gmail.com");
    setShowEmailTooltip(true);
    setTimeout(() => {
      setShowEmailTooltip(false);
    }, 700);
  };

  // const copyMobileToClipboard = () => {
  //   navigator.clipboard.writeText(""); 
  //   setShowMobileTooltip(true);
  //   setTimeout(() => {
  //     setShowMobileTooltip(false);
  //   }, 700);
  // };


  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>tanzeelamansoor99@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showEmailTooltip}
                  onClose={() => setShowEmailTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyEmailToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:tanzeelamansoor99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </Email>
            // <MobileNumber>
            //   <div
            //     style={{
            //       display: "flex",
            //       alignItems: "center",
            //       columnGap: "20px",
            //       rowGap: "10px",
            //       flexWrap: "wrap",
            //       justifyContent: "center",
            //     }}
            //   >
            //     <span>+91 </span>
            //     <Tooltip
            //       PopperProps={{
            //         disablePortal: true,
            //       }}
            //       open={showMobileTooltip}
            //       onClose={() => setShowMobileTooltip(false)}
            //       title="Mobile Number Copied!"
            //       TransitionComponent={Zoom}
            //       disableFocusListener
            //       disableHoverListener
            //       disableTouchListener
            //       placement="bottom"
            //     >
            //       <IconButton onClick={copyMobileToClipboard}>
            //         <MdContentCopy
            //           size={25}
            //           style={{ cursor: "pointer", color: "#151418" }}
            //         />
            //       </IconButton>
            //     </Tooltip>
            //   </div>
            //   <a
            //     className="btn PrimaryBtn btn-shadow"
            //     href="tel:+91 "
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     style={{padding:"10px 30px"}}
            //   >
            //     Call Now
            //   </a>
            // </MobileNumber>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
