import React, { useState } from "react";

import AvatarList from "./AvatarList";

function Avatars(props) {
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <AvatarList {...props} handleForm={handleForm} />
    </>
  );
}

export default Avatars;
