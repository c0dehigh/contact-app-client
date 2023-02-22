import { useState, useEffect } from "react";

import {
  AddContact,
  Contact,
  Contacts,
  EditContact,
  Navbar,
  SearchContact,
} from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAllContacts, getAllGroup } from "./helpers/fetchService";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroup();

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

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
