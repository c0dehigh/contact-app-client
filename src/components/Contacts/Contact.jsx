import { Link } from "react-router-dom";
import { PURPLE, ORANGE, CYAN, RED, CURRENTLINE } from "../../helpers/colors";

const Contact = ({ contact, confirm }) => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src={contact.photo}
                alt={contact.fullname}
                style={{ border: `1px solid ${PURPLE} ` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7 ">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  Name and family :{" "}
                  <span className="fw-bold ">{contact.fullname}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  <span className="fw-bold ">Phone</span>: {contact.mobile}
                </li>

                <li className="list-group-item list-group-item-dark">
                  <span className="fw-bold ">Email</span>: {contact.email}
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center ">
              <Link
                to={`/contacts/edit/${contact._id}`}
                className="btn my-1"
                style={{ backgroundColor: ORANGE }}
              >
                <i className="fa fa-pencil"></i>
              </Link>
              <Link
                to={`/contacts/${contact._id}`}
                className="btn my-1"
                style={{ backgroundColor: CYAN }}
              >
                <i className="fa fa-eye"></i>
              </Link>
              <button
                onClick={confirm}
                className="btn my-1"
                style={{ backgroundColor: RED }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
