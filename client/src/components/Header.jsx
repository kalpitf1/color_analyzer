function Header({title}) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-stone-100 border-b">
            <div className="flex items-center space-x-4">
            {/* <Image src="/placeholder.svg" alt="Logo" width={40} height={40} className="rounded-lg" /> */}
            <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <nav>
            <ul className="flex space-x-4">
                {/* <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li> */}
            </ul>
            </nav>
        </header>
    )
}

export default Header;