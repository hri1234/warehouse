import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'
import Button from "../../compo/button/Button";
import Input from 'src/compo/input/Input';

const NewWarehouses = () => {
  return (
    <div>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create New Warehouse</strong>
            {/* <small>Gutters</small> */}
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputEmail4">Code</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent=""
                  inputId="inputEmail4"
                />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">Contact</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent=""
                  inputId="inputEmail4"
                />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputAddress">Name</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent=""
                  inputId="inputEmail4"
                />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Email</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent=""
                  inputId="inputEmail4"
                />
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="inputState">Logo</CFormLabel>
                <Input
                  inputType="text"
                  inputStyle="form-control"
                  inputEvent=""
                  inputId="inputEmail4"
                />
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="inputState">Address</CFormLabel>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">  
                  </textarea>
                </div>
              </CCol>
              <CCol xs={6}>
                <CFormCheck type="checkbox" id="gridCheck" label="Active" />
              </CCol>
              <CCol xs={6} className='d-flex justify-content-end'>
                {/* <CButton type="submit" className='btn-dark'>Save</CButton> */}
                <Button
                  type="submit"
                  btnName="Save"
                  btnStyle="btn btn-dark m-2"
                />
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default NewWarehouses
