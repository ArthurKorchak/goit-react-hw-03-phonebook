import { Component } from 'react';
import { nanoid } from 'nanoid'
import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const currentLS = localStorage.getItem('contactsList')
    if (currentLS) {
      this.setState({contacts: JSON.parse(currentLS)});
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    };
  };

  addContact = (name, number) => {
    if (this.state.contacts.reduce((acc, item) => [...acc, item.name], []).includes(name)) {
      alert(`${name} is already in contacts`);
    } else {
      const currentContacts = [...this.state.contacts, { id: nanoid(), name: name, number: number }]
      this.setState({contacts: currentContacts});
    };
  };

  deleteContact = (event) => {
    const currentContacts = [...this.state.contacts].filter(item => item.id !== event.target.name);
    this.setState({contacts: currentContacts});
  };

  filterOperator = (event) => {
    this.setState({filter: event.target.value.toLowerCase()});
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