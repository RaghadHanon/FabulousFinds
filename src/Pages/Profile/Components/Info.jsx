import React, { useContext } from "react";

import { UserContext } from "../../../Context/User";

function Info() {
  const { User } = useContext(UserContext);

  return (
    <div
      className={`color1 d-flex bgwhiteC p-3 flex-wrap align-items-center gap-5 row-gap-3 CrimsonTextFont fs-6`}
    >
      <span className={` fw-bolder color1`}>User Name</span>
      <span className={`border flex-grow-1 fw-semibold  px-3 py-1 color1`}>
        {User.userName}
      </span>
    </div>
  );
}

export default Info;
