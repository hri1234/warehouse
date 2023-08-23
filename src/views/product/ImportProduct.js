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

const ImportProduct = () => {
  return (
    <div>
      <h4>Import Product</h4>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Please fill the form below to add new record.</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputEmail4">Refrence  No.</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">Company Refres No</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputAddress">Suppliyer Name</CFormLabel>
                <CFormInput id="inputAddress" placeholder="" />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Details</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Door to Door</option>
                  <option>By Container</option>
                  <option>Air</option>
                  <option>Local Purchas</option>
                </CFormSelect>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">model no</CFormLabel>
                <CFormInput id="inputAddress" placeholder="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">prod desc</CFormLabel>
                <CFormInput id="inputAddress" placeholder="" />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputState">image </CFormLabel>
                <CFormInput id="inputAddress" placeholder="" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">packing,</CFormLabel>
                <CFormInput id="inputAddress" placeholder="" />
              </CCol>
              <CCol xs={12} className='d-flex justify-content-end'>
                <CButton type="submit" className='btn-dark'>Save</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default ImportProduct
