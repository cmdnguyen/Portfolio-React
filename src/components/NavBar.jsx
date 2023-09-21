import { Link, useLocation } from 'react-router-dom'
import { Flex, Button, HStack } from '@chakra-ui/react';

function NavBar() {
    const currentPage = useLocation().pathname

    return (
        <Flex
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="center"
        >
            <HStack>
                <Button>
                    <Link
                        to="/"
                        className={currentPage === '/'}
                    >
                        About Me
                    </Link>
                </Button>
                <Button>
                    <Link
                        to="/Portfolio"
                        className={currentPage === '/Portfolio'}
                    >
                        Portfolio
                    </Link>
                </Button>
                <Button>
                    <Link
                        to="/Contact"
                        className={currentPage === '/Contact'}
                    >
                        Contact
                    </Link>
                </Button>
                <Button>
                    <Link
                        to="/Resume"
                        className={currentPage === '/Resume'}
                    >
                        Resume
                    </Link>
                </Button>
            </HStack>
        </Flex>
    )

}

export default NavBar