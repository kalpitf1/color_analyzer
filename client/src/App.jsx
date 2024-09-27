import { React } from 'react'
import { Upload } from "lucide-react"
import Dropzone from 'react-dropzone'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

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
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
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
