import { Link, useLocation } from 'react-router-dom'
import { Tabs, TabList, Tab, } from '@chakra-ui/react'

function NavBar() {
    const currentPage = useLocation().pathname

    return (
        <Tabs bg='blue.100'>
            <TabList>
                <Tab>
                    <Link
                        to="/"
                        className={currentPage === '/'}
                    >
                        Home
                    </Link>
                </Tab>
                <Tab>
                    <Link
                        to="/About"
                        className={currentPage === '/About'}
                    >
                        About Me
                    </Link>
                </Tab>
                <Tab>
                    <Link
                        to="/Portfolio"
                        className={currentPage === '/'}
                    >
                        Portfolio
                    </Link>
                </Tab>
                <Tab>
                    <Link
                        to="/Contact"
                        className={currentPage === '/Contact'}
                    >
                        Contact
                    </Link>
                </Tab>
                <Tab>
                    <Link
                        to="/Resume"
                        className={currentPage === '/Resume'}
                    >
                        Resume
                    </Link>
                </Tab>
            </TabList>
        </Tabs>
    )

}

export default NavBar