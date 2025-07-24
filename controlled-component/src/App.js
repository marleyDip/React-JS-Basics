import { useState } from "react";
import "./App.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

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

    //set a property ( key ) in an object using a variable
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

    // edit data
    if (formData.index === "") {
      // find insert duplicate email or phone
      let checkFilterUser = userData.filter(
        (v) => v.uEmail == formData.uEmail || v.uPhone == formData.uPhone
      );

      // check duplicate or not
      if (checkFilterUser.length == 1) {
        //alert("Email & Number Already Exists...");

        toast.error("Email & Number Already Exists...");
      } else {
        // insert input data
        let oldUserData = [...userData, currentUserFormData]; // old Array ( [] ) + New Array Elements ( {} ) => [ {}, {}, {} ]
        //console.log(oldUserData);

        toast("User Data Add Successfully!", {
          position: "bottom-right",
        });

        setUserData(oldUserData);

        // after submit data, it goes to empty
        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      }
    } else {
      //console.log(formData.index);

      let editIndex = formData.index; // 1
      let oldData = userData; // clone bcz direct not change state, it can be store to variable

      // check update duplicate email or phone
      let checkFilterUser = userData.filter(
        (v, i) =>
          (v.uEmail == formData.uEmail || v.uPhone == formData.uPhone) &&
          i != editIndex
      ); // && = without own record
      console.log(checkFilterUser);

      // array index = [0], [1], ... but array length = 1, 2, 3
      if (checkFilterUser.length == 0) {
        // [{}, {}] => choice 2nd one & update
        oldData[editIndex]["uName"] = formData.uName;
        oldData[editIndex]["uEmail"] = formData.uEmail;
        oldData[editIndex]["uPhone"] = formData.uPhone;
        oldData[editIndex]["uMessage"] = formData.uMessage;

        toast.info("User Data Updated!", {
          position: "top-left",
        });

        setUserData(oldData);

        setFormData({
          uName: "",
          uEmail: "",
          uPhone: "",
          uMessage: "",
          index: "",
        });
      } else {
        toast.error("Email & Number Already Exists...");
      }
    }
  };

  //console.log(formData);

  // Delete User Data
  let deleteRow = (indexNumber) => {
    //alert(indexNumber);

    let filterDataAfterDelete = userData.filter((v, i) => i != indexNumber);
    //console.log(filterDataAfterDelete);
    toast.success("User Data Delete!", {
      position: "bottom-center",
    });
    setUserData(filterDataAfterDelete);
  };

  // Edit User Data

  let editRow = (indexNumber) => {
    //alert(indexNumber);

    let editData = userData.filter((v, i) => i == indexNumber)[0];
    //console.log(editData); // {uName: 'Hasan', uMessage: ''}

    // set a key "index" here bcz update it by index number below => handleSubmit() function
    editData["index"] = indexNumber;
    //console.log(editData); // {uName: 'Sofian', uMessage: '', index: 0}

    setFormData(editData);
  };

  return (
    <Container fluid>
      <ToastContainer />
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

          <Col lg={7} className="mt-5">
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
                          <Button
                            className="me-2"
                            variant="warning"
                            onClick={() => editRow(index)}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            onClick={() => deleteRow(index)}
                          >
                            Delete
                          </Button>
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
