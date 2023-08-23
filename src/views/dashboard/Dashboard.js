import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CRow,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

const Dashboard = () => {

  return (
    <>
      <CCol xs={12}>
        <CRow>
          {[
            { color: 'light', textColor: 'dark', header: 'Checkins', total: '2' },
            { color: 'light', textColor: 'dark', header: 'Checkouts', total: '3' },
            { color: 'light', textColor: 'dark', header: 'Items', total: '51' },
            { color: 'light', textColor: 'dark', header: 'Contacts', total: '50' },
          ].map((item, index) => (
            <CCol sm={3} key={index}>
              <CCard color={item.color} textColor={item.textColor} className="mt-3 mb-3 border-0 shadow p-3 mb-5 bg-body rounded">
                <CCardBody>
                  <CCardTitle>{item.total}</CCardTitle>
                  <CCardTitle>{item.header}</CCardTitle>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CCol>
      <CForm className="row g-3">
        <CCol md={6}>
          <CFormSelect id="inputState">
            <option>Choose...</option>
            <option>...</option>
          </CFormSelect>
        </CCol>
        <CCol md={6}>
          <CFormSelect id="inputState">
            <option>Choose...</option>
            <option>...</option>
          </CFormSelect>
        </CCol>
      </CForm>
    </>
  )
}

export default Dashboard
