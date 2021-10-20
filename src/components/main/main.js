import { useState } from "react";

import NavBar from "./navbar";

import Companies from "./companies";

function Main() {
  const [companyName, setCompanyName] = useState("");

  return (
    <div>
      <NavBar setCompanyName={setCompanyName} />
      <Companies companyName={companyName} />
    </div>
  );
}

export default Main;
