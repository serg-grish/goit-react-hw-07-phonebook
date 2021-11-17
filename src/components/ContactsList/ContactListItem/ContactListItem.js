import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onClick }) => {
    return (
        <li className={s.listItem}>
            <span className={s.listItemText}>{name}:</span>
            <span className={s.listItemText}>{number}</span>
            <button className={s.button} type="button" onClick={onClick}>Delete</button>
        </li>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};



export default ContactListItem;