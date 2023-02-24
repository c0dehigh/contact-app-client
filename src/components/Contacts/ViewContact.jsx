import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { getContact, getGroup } from "../../helpers/fetchService";
import { Spinner } from "../";
import { CURRENTLINE, CYAN, PURPLE } from "../../helpers/colors";

const ViewContact = () => {
  const { contactId } = useParams();

  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        const { data: contactData } = await getContact(contactId);

        const { data: groupData } = await getGroup(contactData.group);
        console.log(contactData.group);

        setState({
          ...state,
          loading: false,
          contact: contactData,
          group: groupData,
        });
      } catch (err) {
        console.log(err.message);
        setState({ ...state, loading: false });
      }
    };

    fetchData();
  }, []);

  const { loading, contact, group } = state;

  return (
    <>
      <section className="view-contact-intro p3">
        <div className="container">
          <div className="row my-2 text-center">
            <p className="h3 fw-bold" style={{ color: CYAN }}>
              Contact Info
            </p>
          </div>
        </div>
      </section>

      <hr style={{ backgroundColor: CYAN }} />

      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && (
            <section className="view-contact mt-e">
              <div
                className="container p-2"
                style={{ borderRadius: "1em", backgroundColor: CURRENTLINE }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={contact.photo}
                      alt=""
                      className="img-fluid rounded"
                      style={{ border: `1px solid ${PURPLE}` }}
                    />
                  </div>
                  <div className="col-md-9">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-dark">
                        Name Lastname :{" "}
                        <span className="fw-bold">{contact.fullname}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Phonenumber :{" "}
                        <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Email : <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Job : <span className="fw-bold">{contact.job}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Group : <span className="fw-bold">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <Link
                      to={"/contacts"}
                      className="btn"
                      style={{ backgroundColor: PURPLE }}
                    >
                      Back to main page
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default ViewContact;
