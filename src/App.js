import { useState, useEffect } from "react";

import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  Navbar,
  SearchContact,
  ViewContact,
} from "./components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  getAllContacts,
  getAllGroup,
  createContact,
  getAllGroups,
} from "./helpers/fetchService";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [render, setRender] = useState(false);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();

        console.log(groupsData);
        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();

        setContacts(contactsData);

        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchAll();
  }, [render]);

  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createContact(getContact);

      if (status == 200) {
        setContact({});
        setRender(!render);
        navigate("/contacts");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const setContactInfo = (event) => {
    setContact({ ...getContact, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={loading}
              setContactInfo={setContactInfo}
              contact={getContact}
              groups={getGroups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
