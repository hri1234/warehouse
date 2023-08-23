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

const NewUnit = () => {
  return (
    <div>
      <h4>Create New Unit</h4>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <small>Please fill the form below to add new record.</small>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={12}>
                <CFormLabel htmlFor="inputEmail4">Name</CFormLabel>
                <CFormInput type="text" id="inputEmail4" />
              </CCol>

              <CCol xs={12}>
                <CFormLabel htmlFor="inputAddress">Code</CFormLabel>
                <CFormInput id="inputAddress" placeholder="1234 Main St" />
              </CCol>

              <CCol xs={12}>
                <CFormLabel htmlFor="inputAddress">Base Unit</CFormLabel>
                <CFormInput id="inputAddress" placeholder="1234 Main St" />
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

export default NewUnit
