import shortid from 'shortid';
import { contactsSelectors } from '../../redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import s from './Filter.module.css';

const Filter = () => {
    const filterInputId = shortid();
    const value = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();

    return (
        <>
           <label className={s.filterLabel}>
Find contacts by name
<input
  className={s.filterInput}
  id={filterInputId}
                    name="filter"
  type="text"
  value={value}
  onChange={e => dispatch(changeFilter(e.target.value))}
/>
</label> 
        </>
    );
};

export default Filter;

