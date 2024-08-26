import React from "react";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactItem from "./ContactItem";

function ContactList() {
  return (
    <div>
      <SearchBox />
      <ContactItem />
    </div>
  );
}

export default ContactList;
