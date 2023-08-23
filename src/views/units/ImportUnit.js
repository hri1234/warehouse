import React, { Component } from 'react'

export default class ImportUnit extends Component {
  render() {
    return (
      <div>
        <h4>Import Unit</h4>
        <h6>Please upload the excel file to import records.</h6>
        <form class="form-container" enctype='multipart/form-data'>
          <div class="upload-files-container col-md-12">
            {/* <span className='col-md-1'>Excel File</span> */}
            <div class="drag-file-area ">
              <label class="label">
                <span class="browse-files ">
                  <input type="file" class="default-file-input d-flex justify-content-center" />
                  <span class="browse-files-text text-primary">Select file</span> <span>or drag and drop</span>
                  <p style={{ fontSize: "14px" }}>Excel file should have code, name, phone, email, address & active columns.
                    You must fill the name & code columns along with active as `yes` or `no`</p>
                </span>
              </label>
            </div>
            <span class="cannot-upload-message">
              <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
            <div class="file-block">
              <div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
              <span class="material-icons remove-file-icon">delete</span>
              <div class="progress-bar"> </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
