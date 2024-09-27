import { React } from 'react'
import { Upload } from "lucide-react"
import { SiGithub as Github } from '@icons-pack/react-simple-icons'
import Dropzone from 'react-dropzone'
import './App.css'

function App() {

  return (
    <div className='flex flex-col h-screen'>
      <header className="flex items-center justify-between px-6 py-4 bg-stone-100 border-b">
        <div className="flex items-center space-x-4">
          {/* <Image src="/placeholder.svg" alt="Logo" width={40} height={40} className="rounded-lg" /> */}
          <h1 className="text-2xl font-bold">Color Analyzer</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {/* <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li> */}
          </ul>
        </nav>
      </header>

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

      <footer className="border-t border-gray-200 py-4 px-6 bg-stone-100">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Color Analyzer. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
