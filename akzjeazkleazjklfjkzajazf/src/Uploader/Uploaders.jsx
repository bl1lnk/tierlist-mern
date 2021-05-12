import React,{useState} from 'react'
import axios from 'axios'
import _ from 'lodash'

export const SingleUploader = (props) => {
    const {id, label} = props;
    const [uploadedImage, setUploadedImage] = useState('')
    
    const SingleUploadHandler = async(e)=>{
        console.log(e.target.files[0])
        let formData = new FormData();
        setUploadedImage('')
        formData.append('file', e.target.files[0])
        const {data} = await axios.post('/api/images/single-upload', formData)
        console.log(data.imagePath)
        setUploadedImage(data.imagePath)
    }
    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bol font-size-sm">{label}</label>
            <input type="file" 
                id={id} className="form-control"
                onChange={(e)=>SingleUploadHandler(e)}
            />
            <img src={uploadedImage} alt="Uploaded-image" className="ml-3 img-fluid img-thumbnail"/>
        </div>
    )
}


export const MutliUploader = (props) => {
    const {id, label} = props;
    const [uploadedImage, setUploadedImage] = useState([])
   

    const multiUploadHandler = async(e)=>{
        
        let formData = new FormData();
        _.forEach(e.target.files, file=>{
            formData.append('files',file)
        })
   
        setUploadedImage([])
        console.log(formData)
        const {data} = await axios.post('/api/images/multi-upload', formData)
        console.log(data)
        setUploadedImage(data)
    }
    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bol font-size-sm">{label}</label>
            <input type="file" 
                id={id} className="form-control"
                multiple
                onChange={(e)=>multiUploadHandler(e)}
            />
         <div className="d-lex flex-wrap">
               {/* <img src={uploadedImage} alt="Uploaded-image" className="ml-3 img-fluid img-thumbnail"/>*/}
           {
               uploadedImage.length ? uploadedImage.map(img => (
                <img src={img} alt="Uploaded-image" className="ml-3 img-fluid img-thumbnail"/>
               )) : null
           }
         </div>
        </div>
    )
}
