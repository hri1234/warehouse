import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import Button from "../../compo/button/Button";
import Input from "src/compo/input/Input";

const NewIProduct = () => {
  const [itemNo, setItemNo] = useState("");
  const [desc, setDesc] = useState("");
  const [packing, setPacking] = useState("");
  const [measurement1, setMeasurement1] = useState();
  const [measurement2, setMeasurement2] = useState();
  const [measurement3, setMeasurement3] = useState();
  const [netWeight, setNetWeight] = useState();
  const [grossWeight, setGrossWeight] = useState();
  const [file, setFile] = useState("");
  const [cartooncbn, setCartoonCBN] = useState();

  const [errorscon, setErrorsCon] = useState(false);
  const [errorscontact, setErrorsContact] = useState("");
  const [errorsem, setErrorsEm] = useState(false);
  const [errorsemail, setErrorsEmail] = useState("");
  const [errorspass, setErrorspass] = useState(false);
  const [errorspassword, setErrorsPassword] = useState("");

  // let userToken = localStorage.getItem("token");

  const history = useNavigate();
  const onClickCancel = () => {
    history(`/`);
  };


  console.log("file.....", file);
  function handleChange(e) {
    console.log("image url",e.target.files);
    const [file] = e.target.files;
    console.log("file name", [file])
    setFile(URL.createObjectURL(file));
  }

  const addProduct = () => {
    console.log("data");
    const data = {
      itemno: itemNo,
      itemdescription: desc,
      itempacking: packing,
      cartoonmeasurementl: measurement1,
      cartoonmeasurementb: measurement2,
      cartoonmeasurementh: measurement3,
      itemnetweight: netWeight,
      itemgrossweight: grossWeight,
      avatar:file,
      cartooncbn: cartooncbn
    }
    console.log(data);
    axios
      .post(
        `http://localhost:8090/api/product`,
        {
          itemno: itemNo,
          itemdescription: desc,
          itempacking: packing,
          cartoonmeasurementl: measurement1,
          cartoonmeasurementb: measurement2,
          cartoonmeasurementh: measurement3,
          itemnetweight:netWeight,
          itemgrossweight:grossWeight,
          avatar:file,
          cartooncbn: cartooncbn
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )

      .then((res) => {
        // console.log("add new User data", res.data);
        history("/product/product-list");
      });
  };

  return (
    <div>
      <h4>Create New Product</h4>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Please fill the form below to add new record.</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputEmail4">Item No.</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setItemNo(e.target.value) }}
                  inputId=""
                />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">Item Descreption</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setDesc(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputAddress">Item Packing</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setPacking(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol xs={3}>
                <CFormLabel htmlFor="inputState">Item Net Weight</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setNetWeight(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="inputState">Item Gross Weight</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setGrossWeight(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputState">Cartoon Measurement</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setMeasurement1(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol xs={2}>
                <CFormLabel htmlFor="inputState"></CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control mt-2"
                  inputEvent={(e) => { setMeasurement2(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputState"></CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control mt-2"
                  inputEvent={(e) => { setMeasurement3(e.target.value) }}
                  inputId=""
                />

              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">Cartoon CBM</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent={(e) => { setCartoonCBN(e.target.value) }}
                  inputId=""
                />
              </CCol>
              <CCol md={6}>
                {/* <CFormLabel htmlFor="inputState">Upload Image</CFormLabel> */}
                <label className="label">
                  <span className="browse-files ">
                    <input type="file" onChange={handleChange} src={file} className="default-file-input d-flex justify-content-center" />
                    <span className="browse-files-text text-primary">Select file</span> <span>upload Image</span>
                  </span>
                </label>

                <span className="cannot-upload-message">
                  <span className="material-icons-outlined">error</span> Please select a file first <span className="material-icons-outlined cancel-alert-button">cancel</span> </span>
                <div className="file-block">
                  <div className="file-info"> <span className="material-icons-outlined file-icon">description</span> <span className="file-name"> </span> | <span className="file-size">  </span> </div>
                  <span className="material-icons remove-file-icon">delete</span>
                  <div className="progress-bar"> </div>
                </div>
                <img src={file} width="100px" height="100px" />
              </CCol>
              <CCol xs={12} className='d-flex justify-content-end'>
                <Button
                  type="button"
                  btnName="Save"
                  btnStyle="btn btn-dark m-2"
                  btnEvent={addProduct}
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default NewIProduct
