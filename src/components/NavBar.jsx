import { Link, useLocation } from 'react-router-dom'

function NavBar() {
    const currentPage = useLocation().pathname

    return (
        <ul>
            <li>
                <Link
                    to="/"
                    className={currentPage === '/'}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="/About"
                    className={currentPage === '/About'}
                >
                    About Ne
                </Link>
            </li>
            <li>
                <Link
                    to="/Portfolio"
                    className={currentPage === '/'}
                >
                    Portfolio
                </Link>
            </li>
            <li>
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact'}
                >
                    Contact
                </Link>
            </li>
            <li>
                <Link
                    to="/Resume"
                    className={currentPage === '/Resume'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    )

}

export default NavBar