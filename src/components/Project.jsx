import {
    Heading,
    Card,
    CardBody,
    CardFooter,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Text,
    Image,
} from '@chakra-ui/react'

import { FaGithub } from 'react-icons/fa'

import {
    DonBoscoHiepSiSkills,
    RestaurantExpressSkills,
    ScreamAustinSkills,
    SocialNetworkAPISkills,
    TechBlogSkills,
    TextEditorSkills
} from '../components/Skills'

const Projects = [
    {
        id: 'restaurant-express-image',
        src: 'images/Restaurant Express.png',
        name: 'Restaurant Express',
        text: `This is an app for ordering from a restaurant.
        Users can create an account and login.
        Simply navigate through the menu to create the order.
        You will be able to add and subtract from your order as you wish.
        When finished, you can click the view order button,
        Look over your order to ensure it is what you desire and the click the confirm order button.`,
        skills: <RestaurantExpressSkills />,
        githubURL: 'https://github.com/esbev/Restaurant',
        deployedURL: 'https://restaurant-express-c9c955225096.herokuapp.com/'
    },
    {
        id: 'text-editor-image',
        src: 'images/JATE-Demo.png',
        name: 'Text Editor',
        text: `This is a text editor that can run in a browser or as a Progressive Web Application.
        Users can save any text inputs in the text editor and it will save into a database when the user clicks out of the application.
        This application can also function offline since the data in the app is stored locally through IndexedDB.`,
        skills: <TextEditorSkills />,
        githubURL: 'https://github.com/cmdnguyen/Text-Editor',
        deployedURL: 'https://cmdnguyen-text-editor-fbc030432d18.herokuapp.com/'
    },
    {
        id: 'tech-blog-image',
        src: 'images/Tech Blog.png',
        name: 'Tech Blog',
        text: `This is a tech blog created with Express and Sequelize.
        This blog publishes users' posts and comments.
        Users can also see other posts and comments.
        Users can create their own account and use it to login.
        They can add, edit and delete posts.
        They can also add comments to other posts.`,
        skills: <TechBlogSkills />,
        githubURL: 'https://github.com/cmdnguyen/Tech-Blog',
        deployedURL: ' https://cmdnguyen-tech-blog-0555a22cc12a.herokuapp.com/'
    },
    {
        id: 'social-network-image',
        src: 'images/Social Network API.png',
        name: 'Social Network API',
        text: `This is a Social Media API that can add, update and remove users and thoughts into the database.
        You can also create and remove friends and reactions to the associated user and thought respectively.`,
        skills: <SocialNetworkAPISkills />,
        githubURL: 'https://github.com/cmdnguyen/Social-Network-API'
    },
    {
        id: 'scream-austin-image',
        src: 'images/Scream Austin.png',
        name: 'Scream Austin',
        text: `This is a website that showcases local Austin, Texas artists and venues.
        It provides music connoisseurs easy access to information on their favorite local artists.
        The site highlights artists with their bios and YouTube videos.`,
        skills: <ScreamAustinSkills />,
        githubURL: 'https://github.com/alexisstrong11/Scream-Austin',
        deployedURL: 'https://alexisstrong11.github.io/Scream-Austin/'
    },
    {
        id: 'don-bosco-hiep-si-image',
        src: 'images/Don Bosco Hiep Si.png',
        name: 'Don Bosco Hiep Si',
        text: `This is an app for the Knights of the Eucharist division for my local VEYM chapter.
        The students can create an account, view the announcements and submit feedback.
        They can keep track of their team points and vote on life lesson ideas.
        I started on the project shortly after the creator deployed it.
        I am still learning the technologies, but I will be an occasional contributor.`,
        skills: <DonBoscoHiepSiSkills />,
        deployedURL: 'https://hiepsi.donbosco.cc/'
    }

]

const ProjectGitHubButton = ({
    href,
}) => {
    return (
        <Button
            id='github-button'
            as={'a'}
            variant='solid'
            colorScheme='blue'
            href={href}
            leftIcon={<FaGithub />}>
            Repo
        </Button>
    )
}

const DeployedSiteButton = ({
    href,
}) => {
    return (
        <Button
            id='deployed-site-button'
            as={'a'}
            variant='solid'
            colorScheme='blue'
            href={href}
        >
            Website
        </Button>
    )
}

export default function ProjectCard() {
    return (
        <>
            {Projects.map((project) => (
                <Card key={project.id} maxW="400px" m={3}>
                    <CardBody>
                        <Image
                            id={project.id}
                            src={project.src}
                            alt={project.name}
                            borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3">
                            <Heading size="md">{project.name}</Heading>
                            <Text>{project.text}</Text>
                            {project.skills}
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing="1">
                            {project.githubURL && (
                                <ProjectGitHubButton href={project.githubURL} />
                            )}
                            {project.deployedURL && (
                                <DeployedSiteButton href={project.deployedURL} />
                            )}
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}

        </>
    )
}