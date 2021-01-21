import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();
  inputFilterId = shortid.generate();

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    // this.props.onSubmit(name);
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handlerChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  changeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}> Name </label>
          <input type="text" id={this.inputNameId} value={this.state.name} name="name" onChange={this.handlerChange} />
          <label htmlFor={this.inputNumberId}> Number </label>
          <input type="tel" id={this.inputNumberId} value={this.state.number} name="number" onChange={this.handlerChange} />
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor={this.inputFilterId}> Find contacts by name </label>
        <input
          type="text"
          id={this.inputFilterId}
          value={filter}
          // name='name'
          onChange={this.changeFilter}
        />
        <ul>
          {visibleContacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name} : {number}
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}
