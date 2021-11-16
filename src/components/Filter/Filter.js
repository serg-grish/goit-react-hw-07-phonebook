import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import contactsActions from "../../redux/actions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      <h3>Find contacts by name</h3>
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
