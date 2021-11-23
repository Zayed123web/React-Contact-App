import React, { Component } from "react";
import Contact from "./Contact";
import data from "./data.json";

export default class Contacts extends Component {
  state = {
    contacts: data,
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="listOfContact mt-2">
        {contacts.map((contact) => (
          <Contact contact={contact} />
        ))}
      </div>
    );
  }
}
