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

import {Projects} from '../utils/Projects'

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