import { useState } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [getContacts, setContacts] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
