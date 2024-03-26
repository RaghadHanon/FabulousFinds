import React, { useContext } from "react";

import { UserContext } from "../../../Context/User";

function Contact() {
  const { User } = useContext(UserContext);

  return (
    <div
      className={`color1 d-flex bgwhiteC flex-wrap align-items-center gap-5 row-gap-3 CrimsonTextFont p-3 fs-6`}
    >
      <span className={`fw-bolder color1`}>Email</span>
      <span className={`border flex-grow-1 color1 fw-semibold px-3 py-1 `}>
        {User.email}
      </span>
    </div>
  );
}
export default Contact;
