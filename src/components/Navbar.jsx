import SearchContacts from "./Contacts/SearchContacts";
import { PURPLE, BACKGROUND } from "../helpers/colors";
const Navbar = ({ search }) => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{
        backgroundColor: BACKGROUND,
      }}
    >
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
              <i className="fa fa-id-card-o" style={{ color: PURPLE }} />
              Web application manager{" "}
              <span style={{ color: PURPLE }}>Contacts</span>
            </div>
          </div>

          <div className="col">
            <SearchContacts search={search} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
