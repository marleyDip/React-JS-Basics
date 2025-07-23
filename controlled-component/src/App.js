import { useState } from "react";
import "./App.css";
import { Col, Container, Row, Table } from "react-bootstrap";

function App() {
  let [formData, setFormData] = useState({
    uName: "",
    uEmail: "",
    uPhone: "",
    uMessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  // get value from form input data
  let getValue = (event) => {
    let oldData = { ...formData };

    let inputName = event.target.name; // uName
    //console.log(inputName);
    let inputValue = event.target.value; // Deep

    // dynamically change value thats why not use => oldData.inputName
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  // submit form input data
  let handleSubmit = (event) => {
    event.preventDefault();

    // key - value pairs & here key go the array map
    let currentUserFormData = {
      uName: formData.uName,
      uEmail: formData.uEmail,
      uPhone: formData.uPhone,
      uMessage: formData.uMessage,
    };

    let checkFilterUser = userData.filter(
      (v) => v.uEmail == formData.uEmail || v.uPhone == formData.uPhone
    );

    if (checkFilterUser.length == 1) {
      alert("Email & Number Already Exists...");
    } else {
      let oldUserData = [...userData, currentUserFormData]; // old Array ( [] ) + New Array Elements ( {} ) => [ {}, {}, {} ]
      console.log(oldUserData);
      setUserData(oldUserData);
      setFormData({
        uName: "",
        uEmail: "",
        uPhone: "",
        uMessage: "",
        index: "",
      });
    }
  };

  //console.log(formData);

  let deleteRow = (indexNumber) => {
    //alert(indexNumber);

    let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber);
    //console.log(filterDataAfterDelete);

    setUserData(filterDataAfterDelete);
  };

  return (
    <Container fluid>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1>Enquiry Form</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            {userData.length}
            <form onSubmit={handleSubmit}>
              <div className="pb-3">
                <label className="form-label">Name</label>

                <input
                  type="text"
                  value={formData.uName}
                  onChange={getValue}
                  name="uName"
                  className="form-control"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  onChange={getValue}
                  value={formData.uEmail}
                  name="uEmail"
                  className="form-control"
                />
              </div>

              <div className="pb-3">
                <label className="form-label">Phone</label>

                <input
                  type="text"
                  value={formData.uPhone}
                  onChange={getValue}
                  name="uPhone"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  value={formData.uMessage}
                  onChange={getValue}
                  name="uMessage"
                  id=""
                  rows="3"
                />
              </div>

              <button className="btn btn-primary">
                {formData.index !== "" ? "Update" : "Save"}
              </button>
            </form>
          </Col>

          <Col lg={7}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {userData.length >= 1 ? (
                  userData.map((obj, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>{obj.uName}</td>

                        <td>{obj.uEmail}</td>

                        <td>{obj.uPhone}</td>

                        <td>{obj.uMessage}</td>

                        <td>
                          <button onClick={() => deleteRow(index)}>
                            Delete
                          </button>

                          <button>Edit</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr className="text-center ">
                    <td colSpan={6}>No Data Found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
