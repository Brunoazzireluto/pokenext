const Footer = () => {
    return (
        <footer aria-label="Site Footer" className="bg-gray-700">
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-red-600 sm:justify-start font-fira">
                <h1>PokeNext</h1>
            </div>

            <p className="mt-2 text-center text-sm text-gray-300 lg:mt-0 lg:text-right font-fira">
                Copyright &copy; 2023. All rights reserved.
            </p>
            </div>
        </div>
        </footer>

    )
}

export default Footer;