import {
    Container,
    Heading,
    Tooltip,
    Text,
    SimpleGrid,
    HStack
} from '@chakra-ui/react'

import {
    FaJs,
    FaNodeJs,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaYarn
} from 'react-icons/fa'

import {
    SiExpress,
    SiChakraui,
    SiMysql,
    SiSequelize,
    SiTypescript,
    SiDotenv,
    SiHandlebarsdotjs,
    SiBulma,
    SiNextdotjs,
    SiDirectus,
    SiInsomnia,
    SiMongodb,
    SiMongoose,
    SiApollographql,
    SiVite
} from 'react-icons/si'

import { DiJavascript, DiMaterializecss } from 'react-icons/di'

const SkillToolTip = ({
    children,
    label
}) => {
    return (
        <Tooltip
            label={label}
            fontSize='md'>
            <span>{children}</span>
        </Tooltip>
    )
}

export default function MainSkills() {
    return (
        <Container my={1}>
            {/* Skills section with tooltip describing the icon while hover over it */}
            <Text>Here are some of my technical skills:</Text>
            <SimpleGrid
                id='skill-grid'
                columns={{ base: 8, sm: 10, md: 15, lg: 15 }}
                spacing={5}
            >
                <SkillToolTip label={'React'}>
                    <FaReact size={25} />
                </SkillToolTip>
                <SkillToolTip label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'HTML5'}>
                    <FaHtml5 size={25} />
                </SkillToolTip>
                <SkillToolTip label={'CSS3'}>
                    <FaCss3Alt size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Bootstrap'}>
                    <FaBootstrap size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Chakra UI'}>
                    <SiChakraui size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Node.js'}>
                    <FaNodeJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillToolTip>
                <SkillToolTip label={'MySQL'}>
                    <SiMysql size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Sequelize'}>
                    <SiSequelize size={25} />
                </SkillToolTip>
                <SkillToolTip label={'MongoDB'}>
                    <SiMongodb size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Mongoose'}>
                    <SiMongoose size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Vite'}>
                    <SiVite size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Apollo GraphQL'}>
                    <SiApollographql size={25} />
                </SkillToolTip>
            </SimpleGrid>
        </Container>
    )
}

export function RestaurantExpressSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Handlebars.js'}>
                    <SiHandlebarsdotjs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Materialize CSS'}>
                    <DiMaterializecss size={25} />
                </SkillToolTip>
                <SkillToolTip label={'MySQL'}>
                    <SiMysql size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Sequelize'}>
                    <SiSequelize size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Node.js'}>
                    <FaNodeJs size={25} />
                </SkillToolTip>
            </HStack>
        </>
    )
}

export function TextEditorSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Node.js'}>
                    <FaNodeJs size={25} />
                </SkillToolTip>
            </HStack>
        </>
    )
}

export function TechBlogSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Bootstrap'}>
                    <FaBootstrap size={25} />
                </SkillToolTip>
                <SkillToolTip label={'MySQL'}>
                    <SiMysql size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Sequelize'}>
                    <SiSequelize size={25} />
                </SkillToolTip>
                <SkillToolTip label={'dotenv'}>
                    <SiDotenv size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Handlebars.js'}>
                    <SiHandlebarsdotjs size={25} />
                </SkillToolTip>
            </HStack>
        </>
    )
}

export function ScreamAustinSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'HTML5'}>
                    <FaHtml5 size={25} />
                </SkillToolTip>
                <SkillToolTip label={'CSS3'}>
                    <FaCss3Alt size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Bulma CSS'}>
                    <SiBulma size={25} />
                </SkillToolTip>
            </HStack>
        </>
    )
}

export function DonBoscoHiepSiSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'React'}>
                    <FaReact size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Chakra UI'}>
                    <SiChakraui size={25} />
                </SkillToolTip>
                <SkillToolTip label={'TypeScript'}>
                    <SiTypescript size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Next.js'}>
                    <SiNextdotjs size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Directus'}>
                    <SiDirectus size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Yarn'}>
                    <FaYarn size={25} />
                </SkillToolTip>
            </HStack>
        </>
    )
}

export function CircleCollaborativeSkills() {
        return (
            <>
            <Heading size='sm'>Technologies used:</Heading>
            <HStack id='portfolio-skills'>
                <SkillToolTip label={'React'}>
                    <FaReact size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Apollo GraphQL'}>
                    <SiApollographql size={25} />
                </SkillToolTip>
                <SkillToolTip label={'JavaScript'}>
                    <DiJavascript size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Vite'}>
                    <SiVite size={25} />
                </SkillToolTip>
                <SkillToolTip label={'MongoDB'}>
                    <SiMongodb size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Mongoose'}>
                    <SiMongoose size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillToolTip>
                <SkillToolTip label={'Node.js'}>
                    <FaNodeJs size={25} />
                </SkillToolTip>
            </HStack>
        </>
        )
}