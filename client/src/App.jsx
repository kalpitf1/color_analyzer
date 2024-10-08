import { React, useState } from 'react'
import { Upload } from "lucide-react"
import Dropzone from 'react-dropzone'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [myFile, setMyFile] = useState(null);

  function handleUploadedFile(file) {
    if (file.length != 1) {
      alert('Please submit only 1 image in the formats: ".jpeg", ".jpg", or ".png"');
      return
    }
    console.log(file)
    setMyFile(file[0])
    if (!file) {
      alert("Something went wrong. Please try uploading again.");
      return;
    }
    sendImageToServer()
  }

  function sendImageToServer() {
    console.log('from sendImageToServer: ', myFile)
    let formData = new FormData();

    formData.append("image", myFile);

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }

    console.log(formData);

    axios({
      url: "http://localhost:3000/upload-file",
      method: "POST",
      headers: {
          // TODO: add auth
          // authorization: "your token comes here",

          'Content-Type': 'multipart/form-data'
      },

      data: formData,
    })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
  }

  return (
    <div className='flex flex-col h-screen'>
      <Header
        title={'Color Analyzer'}
      />

      <main className="flex-grow flex flex-col items-center p-6 bg-gradient-to-br from-fuchsia-100 to-green-100">
        <h2 className="text-4xl font-bold text-center mb-4">Start Korean Color Analysis</h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          100% automatic and free
        </p>
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
          <Dropzone
            accept={{
              "image/jpeg": [".jpeg", ".jpg"],
              "image/png": [".png"]
            }}
            onDrop={acceptedFiles => handleUploadedFile(acceptedFiles)}
          >
            {({getRootProps, getInputProps}) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className='flex-grow flex flex-col items-center justify-center'>
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-4 text-lg text-gray-600">Drag and drop your image here</p>
                    <p className="mt-2 text-sm text-gray-500">or</p>
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                      Upload Image
                    </button>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default App
