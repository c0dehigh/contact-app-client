import axios from "axios";

const SERVER_URL = "http://localhost:3001";

// Get All Contacts
// Get method
export const getAllContacts = () => {
  const url = `${SERVER_URL}/api/getall`;
  return axios.get(url);
};

// Get Contact
// Get method
export const getContact = (contactId) => {
  const url = `${SERVER_URL}/api/getone/${contactId}`;

  return axios.get(url);
};

// Get All Group
// Get method
export const getAllGroups = () => {
  const url = `${SERVER_URL}/api/getgroups/`;
  return axios.get(url);
};

// Get  Group
// Get method
export const getGroup = (groupId) => {
  const url = `${SERVER_URL}/api/getgroup/${groupId}`;
  return axios.get(url);
};

// Create contact
// Post method
export const createContact = (contact) => {
  const url = `${SERVER_URL}/api/post/`;
  return axios.post(url, contact);
};

// Update contact
// Post method
export const updateContact = (contact, contactId) => {
  const url = `${SERVER_URL}/api/update/${contactId}`;
  return axios.put(url, contact);
};

// Delete contact
// Post method
export const deleteContact = (contactId) => {
  const url = `${SERVER_URL}/api/delete/${contactId}`;
  return axios.delete(url);
};
