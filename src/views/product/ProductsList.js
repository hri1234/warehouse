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
import Button from "../../compo/button/Button";

class ProductList extends React.Component {
  // State array variable to save and show data
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    //Get all users details in bootstrap table
    console.log('helloE')
    axios
      .get("http://localhost:8090/api/product", {
        headers: {
          "content-type": "application/json",
          // Authorization: "Bearer " + userToken,
        },
      })
      .then((res) => {
        //Storing users detail in state array object
        console.log("get data responce", res.data);
        this.setState({ userData: res.data });
      });
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }

  addNewProduct = () => {
    this.props.navigate(`/product/new-product`);
  };

  importNewProduct = () => {
    this.props.navigate(`/product/import-product`);
  }

  updateProduct = (id) => {
    // this.props.navigate(`/editUserDetail/${id}`);
  };

  deleteProduct = (id) => {
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
              <h4 className="mt-3">List of Product</h4>
              <div>
                <Button
                  type="button"
                  btnName="Create New Product"
                  btnStyle="btn btn-dark m-2"
                  btnEvent={this.addNewProduct}
                />

                <Button
                  type="button"
                  btnName=" Import Product"
                  btnStyle="btn btn-dark m-2"
                  btnEvent={this.importNewProduct}
                />
              </div>
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
                        <th>Item No.</th>
                        <th>Item Descreption</th>
                        <th>Item Packing</th>
                        <th>Item Net Weight</th>
                        <th>Item Gross Weight</th>
                        <th>Cartoon CBM</th>
                        <th>Cartoon Measurement</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.userData?.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.itemno}</td>
                            <td>{user.itemdescription}</td>
                            <td>{user.itempacking}</td>
                            <td>{user.itemnetweight}</td>
                            <td>{user.itemgrossweight}</td>
                            <td>{user.cartooncbn}</td>
                            <td>{user.cartoonmeasurementl}, {user.cartoonmeasurementb}, {user.cartoonmeasurementh}</td>
                            <td><img src={user.avatar} width="50px" height="50px"/></td>
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
                                      this.updateProduct(user.id);
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
                                      this.deleteProduct(user.id)
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

export default withRouter(ProductList)
