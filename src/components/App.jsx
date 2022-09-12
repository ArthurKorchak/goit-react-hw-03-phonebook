import { Component } from 'react';
import { nanoid } from 'nanoid'
import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {
    if (this.state.contacts.reduce((acc, item) => [...acc, item.name], []).includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {contacts: [...prevState.contacts, { id: nanoid(), name: name, number: number }]};
      });
    };
  };

  filterOperator = (event) => {
    this.setState({filter: event.target.value.toLowerCase()});
  };

  deleteContact = (event) => {
    this.setState(prevState => {
        return {contacts: prevState.contacts.filter(item => item.id !== event.target.name)};
      });
  };

  render() {
    const currentContacts = this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter))
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <InputForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterOperator={this.filterOperator}/>
        <ContactsList currentContacts={currentContacts} deleteContact={this.deleteContact} />
      </div>
    );
  };
};

export default App;