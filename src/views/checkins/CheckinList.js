import React from "react";
//Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
//For API Requests
import axios from "axios";
import { FaEdit, FaTimes } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";
import { withRouter } from "../withRouter";
import { AiOutlinePlus } from 'react-icons/ai'

class CheckinList extends React.Component {
  // State array variable to save and show data
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    //Get all users details in bootstrap table
    axios
      .get("https://dummyjson.com/products", {
        headers: {
          "content-type": "application/json",
          // Authorization: "Bearer " + userToken,
        },
      })
      .then((res) => {
        //Storing users detail in state array object
        console.log(res.data.products);
        this.setState({ userData: res.data.products });
      });
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }

  addNewUser = () => {
    this.props.navigate(`/checkins/new-checkin`);
  };

  updateUser = (id) => {
    // this.props.navigate(`/editUserDetail/${id}`);
  };

  deleteUser = (id) => {
    // console.log(id);
    // axios
    //   .delete(`http://localhost:4000/test/api/deleteUserById/${id}`, {
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: "Bearer " + userToken,
    //     },
    //   })

    //   .then((res) => {
    //     console.log("delete User data", res.data);
    //     this.componentDidMount();
    //   });
  };

  render() {
    //Datatable HTML
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <h4 className="mt-3">List of Checkins</h4>
              <button
                className="btn btn-dark m-2"
                onClick={this.addNewUser}
              >
                <AiOutlinePlus /> Create New Checkin
              </button>
            </div>
            <div
              className="card"
              style={{ maxHeight: "480px", overflowY: "auto" }}
            >
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example"
                    className="display table table-striped table-hover overflow-y:auto"
                  >
                    <thead>
                      <tr>
                        <th>S. No</th>
                        <th>Checkin</th>
                        <th>Relations</th>
                        <th>Details</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.userData?.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.title}</td>
                            <td>{user.price}</td>
                            <td>{user.description}</td>
                            <td>
                              {user.status == 1 ? (
                                <BsCheckLg className="text-success" />
                              ) : (
                                <FaTimes className="text-danger" />
                              )}
                            </td>
                            <td>
                              <div className="d-flex justify-content-flex-start">
                                <div
                                  className="edit-icon"
                                  style={{ cursor: "pointer" }}
                                >
                                  <FaEdit
                                    onClick={() => {
                                      this.updateUser(user.id);
                                    }}
                                    id={user.id}
                                  />
                                </div>
                                <div
                                  className="delete-icon"
                                  style={{
                                    marginLeft: "15px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <RiDeleteBin5Line
                                    onClick={() =>
                                      this.deleteUser(user.id)
                                    }
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CheckinList);
