import React from 'react'
import { MutliUploader } from '../Uploader/Uploaders'



const MultiUploads = () => {
    return (
        <div>
              <div className="container flex-grow-1">
      <div className="col-md-6 col-sm-12 mx-auto">
        <div className="card">
          <div className="card-header">
            <h3 className="text-primary font-weight-bold">Upload your Images</h3>
          </div>
          <div className="card-body">
            <form>
              <MutliUploader
                id="multi-upload"
                labe="Upload Multiple Files"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default MultiUploads
