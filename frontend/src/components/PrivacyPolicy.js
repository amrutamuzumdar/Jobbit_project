import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import error_401 from "../img/error_401.png";
import Cookies from "js-cookie";

function PrivacyPolicy() {
    const navigate = useNavigate();
    const [remainingTime, setRemainingTime] = useState(5);
    const jwtToken = Cookies.get("jwt");

    useEffect(() => {
        let timer;
        if (!jwtToken) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime === 1) {
                        // If time is up, redirect to login page
                        clearInterval(timer);
                        navigate("/auth");
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [jwtToken, navigate]);

    return (
        <div className="container my-1 col-lg-6">
            {!jwtToken && (
                <div className="text-center mt-5">
                    <img src={error_401} alt="placeholder" />
                    <br />
                    <br />
                    <p className="text-center" style={{ fontSize: "1.2rem" }}>
                        You need to login to view this page. Redirecting to
                        login page in {remainingTime} seconds...
                    </p>
                </div>
            )}

            {jwtToken && (
                <>
                    <p>
                    Privacy Policy for Jobbit

Last updated: 18/04/2024

Jobbit operates www.jobbit.com . This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.

We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

Information Collection and Use

While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, postal address, and phone number ("Personal Information").

Log Data

Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.

Communications

We may use your Personal Information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe instructions provided in any email we send.

Cookies<br></br>

Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.

Security<br></br>

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

Changes to This Privacy Policy

This Privacy Policy is effective as of 01/04/2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

Contact Us<br>If you have any questions about this Privacy Policy, please contact us at muzumdar.a@jobbit.com.</br>
                    </p>
                </>
            )}
        </div>
    );
}

export default PrivacyPolicy;
