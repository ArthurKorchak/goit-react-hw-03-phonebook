import { Component } from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

export class ContactsList extends Component {
    render() {
        return (
            <ul className={s.contactsList}>
                <Contact currentContacts={this.props.currentContacts} deleteContact={this.props.deleteContact} />
            </ul>
        );
    };
};

ContactsList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};