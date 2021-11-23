import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { first_name, last_name, dob, gender, picture, id, email } =
      this.props.contact;
    // console.log(this.props);
    return (
      <div className="card contact" key={id}>
        <img src={picture} class="card-img-top" alt={first_name} />

        <div className="card-body">
          <h3 className="card-title">
            Hello, {first_name} {last_name}
          </h3>
          <p className="card-text">Email : {email}</p>
          <p className="card-text">Birthday : {dob}</p>
          <p className="card-text">Gender : {gender}</p>
        </div>
      </div>
    );
  }
}
