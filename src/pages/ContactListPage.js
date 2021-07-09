import React from "react";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";

const ContactListPage = () => {
 return (
  <>
   <Filter />
   <ContactList />
  </>
 );
};

export default ContactListPage;
