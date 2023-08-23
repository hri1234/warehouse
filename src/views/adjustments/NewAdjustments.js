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
const NewAdjustments = () => {
  return (
    <div>
        <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Create New Adjustment</strong>
            {/* <small>Gutters</small> */}
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="inputEmail4">Date</CFormLabel>
                <CFormInput type="date" id="inputEmail4" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputState">Contact</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputAddress">Reference</CFormLabel>
                <CFormInput id="inputAddress" placeholder="1234 Main St" />
              </CCol>
              <CCol xs={6}>
                <CFormLabel htmlFor="inputState">Warehouse</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="inputState">State</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol md={12}>
                <CFormLabel htmlFor="inputState">Drtails</CFormLabel>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
              </CCol>
              <CCol xs={6}>
                <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
              </CCol>
              <CCol xs={6} className='d-flex justify-content-end'>
                <CButton type="submit" className='btn-dark'>Save</CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default NewAdjustments
