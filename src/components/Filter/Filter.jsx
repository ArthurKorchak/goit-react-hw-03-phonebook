import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export class Filter extends Component {
    render() {
        return (
            <label className={s.label}>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.props.filter}
                    onChange={this.props.filterOperator}
                />
            </label>
        );
    };
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterOperator: PropTypes.func.isRequired,
};