import axios from 'axios';
import {
    fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './actions';

axios.default.baseURL = 'http:/localhost:4040';

const fetchContact = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await axios.get('/contacts');
    }
}