import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; 

export default class PersonList extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div>
        <h2 className="person-list-title">Person List</h2>
        <div className="person-list-container">
          {this.state.persons.map((person, index) => (
            <div key={index} className="person">
              <div className="avatar-container">
                <img
                  src={person.picture.thumbnail}
                  alt={`${person.name.first} ${person.name.last} avatar`}
                  className="avatar"
                />
              </div>
              <div className="button-container">
                <button>Details</button>
              </div>
              <div className="person-details">
                <div><strong>Name:</strong> {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</div>
                <div><strong>Username:</strong> {person.login.username}</div>
                <div><strong>Gender:</strong> {person.gender.toUpperCase()}</div>
                <div><strong>TimeZone:</strong> {person.location.timezone.description}</div>
                <div>
                  <strong>Address:</strong> {person.location.street.number} {person.location.street.name},
                  {person.location.city},{person.location.state},
                  {person.location.country},{person.location.postcode}
                </div>
                <div><strong>Email:</strong> {person.email}</div>
                <div><strong>Date of Birth:</strong> {new Date(person.dob.date).toLocaleDateString()}</div>
                <div><strong>Phone:</strong> {person.phone}</div>
                <div><strong>Cell:</strong> {person.cell}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}






     