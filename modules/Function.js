import { listInfo, addNewInfo, contactInfo } from './Div.js';

const showList = () => {
  listInfo.style.display = 'flex';
  addNewInfo.style.display = 'none';
  contactInfo.style.display = 'none';
};

const showAddNew = () => {
  listInfo.style.display = 'none';
  addNewInfo.style.display = 'flex';
  contactInfo.style.display = 'none';
};

const showContact = () => {
  listInfo.style.display = 'none';
  addNewInfo.style.display = 'none';
  contactInfo.style.display = 'flex';
};

export { showList, showAddNew, showContact };
