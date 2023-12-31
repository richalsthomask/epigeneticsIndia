import React from "react";

import {
  LocationIcon2,
  MailIcon2,
  PhoneIcon3,
} from "@/components/common/appIcon";

export const contact_info = [
  {
    name: "E-mail",
    value: "sample@gmail.com",
    link: "mailto:sample@gmail.com",
    icon: (props) => <MailIcon2 {...props} />,
  },

  {
    name: "Phone",
    value: <span className="relative top-1">(123) 456-5567</span>,
    link: "tel:123456789",
    icon: (props) => <PhoneIcon3 {...props} />,
  },
  {
    name: "Address",
    string: "address1, address2, city, state 90049",
    value: (
      <div className="relative top-1 mx-auto flex flex-col">
        <span className="whitespace-nowrap">Address1. </span>
        <span className="whitespace-nowrap">Address2 </span>
        <span className="whitespace-nowrap">state, city 90049</span>
      </div>
    ),
    link: "https://www.google.com/maps/place/11693+San+Vicente+Blvd+%23508,+Los+Angeles,+CA+90049,+USA/@34.0539852,-118.4676672,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bca07b365d6d:0x2a3ed7c58082cf28!8m2!3d34.0539852!4d-118.4654785",
    icon: (props) => <LocationIcon2 {...props} />,
  },
];
