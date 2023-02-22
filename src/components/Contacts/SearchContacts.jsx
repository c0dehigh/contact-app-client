import { PURPLE } from "../../helpers/colors";

const SearchContacts = () => {
  return (
    <div className="input-group mx-2 w-75">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fa fa-search" />
      </span>
      <input
        className="form-control"
        type="text"
        style={{ borderColor: PURPLE }}
        placeholder="search contacts"
        aria-label="Search contacts"
        arria-aria-describedby="basic-addon1"
      />
    </div>
  );
};

export default SearchContacts;
