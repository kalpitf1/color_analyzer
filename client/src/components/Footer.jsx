import { SiGithub as Github } from '@icons-pack/react-simple-icons'

function Footer() {
    return (
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
    )
}

export default Footer;