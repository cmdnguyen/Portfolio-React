import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    HStack,
    Tag,
    TagLabel,
    TagRightIcon,
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
    SiNextdotjs,
    SiDirectus,
    SiMongodb,
    SiMongoose,
    SiApollographql,
    SiVite
} from 'react-icons/si'

import { DiMaterializecss } from 'react-icons/di'

const SkillTab = ({
    children1,
    children2
}) => {
    return (
        <HStack spacing={2}>
            <Tag colorScheme="blue">
                <TagLabel>{children1}</TagLabel>
                <TagRightIcon>{children2}</TagRightIcon>
            </Tag>
        </HStack>
    )
}

export default function MainSkills() {
    return (
        <Container maxW='full'>
            {/* Skills section with tooltip describing the icon while hover over it */}
            <Text>Here are some of my technical skills:</Text>
            <SimpleGrid
                id='skill-grid'
                columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing={1}
            >
                <SkillTab children1={"React"} children2={<FaReact size={25} />} />
                <SkillTab children1={"JavaScript"} children2={<FaJs size={25} />} />
                <SkillTab children1={"HTML5"} children2={<FaHtml5 size={25} />} />
                <SkillTab children1={"CSS3"} children2={<FaCss3Alt size={25} />} />
                <SkillTab children1={"Bootstrap"} children2={<FaBootstrap size={25} />} />
                <SkillTab children1={"Chakra UI"} children2={<SiChakraui size={25} />} />
                <SkillTab children1={"Node.js"} children2={<FaNodeJs size={25} />} />
                <SkillTab children1={"Express.js"} children2={<SiExpress size={25} />} />
                <SkillTab children1={"MySQL"} children2={<SiMysql size={25} />} />
                <SkillTab children1={"Sequelize"} children2={<SiSequelize size={25} />} />
                <SkillTab children1={"MongoDB"} children2={<SiMongodb size={25} />} />
                <SkillTab children1={"Mongoose"} children2={<SiMongoose size={25} />} />
                <SkillTab children1={"Vite"} children2={<SiVite size={25} />} />
                <SkillTab children1={"Apollo GraphQL"} children2={<SiApollographql size={25} />} />
                <SkillTab children1={"TypeScript"} children2={<SiTypescript size={25} />} />
                <SkillTab children1={"Next.js"} children2={<SiNextdotjs size={25} />} />



                {/* Add more SkillTab components for other skills */}

                {/* <SkillTab label={'JavaScript'}>
                    <FaJs size={25} />
                </SkillTab>
                <SkillTab label={'HTML5'}>
                    <FaHtml5 size={25} />
                </SkillTab>
                <SkillTab label={'CSS3'}>
                    <FaCss3Alt size={25} />
                </SkillTab>
                <SkillTab label={'Bootstrap'}>
                    <FaBootstrap size={25} />
                </SkillTab>
                <SkillTab label={'Chakra UI'}>
                    <SiChakraui size={25} />
                </SkillTab>
                <SkillTab label={'Node.js'}>
                    <FaNodeJs size={25} />
                </SkillTab>
                <SkillTab label={'Express.js'}>
                    <SiExpress size={25} />
                </SkillTab>
                <SkillTab label={'MySQL'}>
                    <SiMysql size={25} />
                </SkillTab>
                <SkillTab label={'Sequelize'}>
                    <SiSequelize size={25} />
                </SkillTab>
                <SkillTab label={'MongoDB'}>
                    <SiMongodb size={25} />
                </SkillTab>
                <SkillTab label={'Mongoose'}>
                    <SiMongoose size={25} />
                </SkillTab>
                <SkillTab label={'Vite'}>
                    <SiVite size={25} />
                </SkillTab>
                <SkillTab label={'Apollo GraphQL'}>
                    <SiApollographql size={25} /> */}
                {/* </SkillTab> */}
            </SimpleGrid>
        </Container>
    )
}

export function RestaurantExpressSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} spacing={1}>
                <SkillTab children1={"JavaScript"} children2={<FaJs size={25} />} />
                <SkillTab children1={"Express.js"} children2={<SiExpress size={25} />} />
                <SkillTab children1={"Handlebars.js"} children2={<SiHandlebarsdotjs size={25} />} />
                <SkillTab children1={"Materialize CSS"} children2={<DiMaterializecss size={25} />} />
                <SkillTab children1={"MySQL"} children2={<SiMysql size={25} />} />
                <SkillTab children1={"Sequelize"} children2={<SiSequelize size={25} />} />
                <SkillTab children1={"Node.js"} children2={<FaNodeJs size={25} />} />
            </SimpleGrid>
        </>
    )
}

export function TechBlogSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} spacing={1}>
                <SkillTab children1={"JavaScript"} children2={<FaJs size={25} />} />
                <SkillTab children1={"Express.js"} children2={<SiExpress size={25} />} />
                <SkillTab children1={"Bootstrap"} children2={<FaBootstrap size={25} />} />
                <SkillTab children1={"MySQL"} children2={<SiMysql size={25} />} />
                <SkillTab children1={"Sequelize"} children2={<SiSequelize size={25} />} />
                <SkillTab children1={"dotenv"} children2={<SiDotenv size={25} />} />
                <SkillTab children1={"Handlebars.js"} children2={<SiHandlebarsdotjs size={25} />} />
            </SimpleGrid>
        </>
    )
}

export function DonBoscoHiepSiSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} spacing={1}>
                <SkillTab children1={"React"} children2={<FaReact size={25} />} />
                <SkillTab children1={"Chakra UI"} children2={<SiChakraui size={25} />} />
                <SkillTab children1={"TypeScript"} children2={<SiTypescript size={25} />} />
                <SkillTab children1={"Next.js"} children2={<SiNextdotjs size={25} />} />
                <SkillTab children1={"Directus"} children2={<SiDirectus size={25} />} />
                <SkillTab children1={"Yarn"} children2={<FaYarn size={25} />} />
            </SimpleGrid>
        </>
    )
}

export function CircleCollaborativeSkills() {
    return (
        <>
            <Heading size='sm'>Technologies used:</Heading>
            <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} spacing={1}>
                <SkillTab children1={"React"} children2={<FaReact size={25} />} />
                <SkillTab children1={"JavaScript"} children2={<FaJs size={25} />} />
                <SkillTab children1={"Express.js"} children2={<SiExpress size={25} />} />
                <SkillTab children1={"Node.js"} children2={<FaNodeJs size={25} />} />
                <SkillTab children1={"Apollo GraphQL"} children2={<SiApollographql size={25} />} />
                <SkillTab children1={"MongoDB"} children2={<SiMongodb size={25} />} />
                <SkillTab children1={"Mongoose"} children2={<SiMongoose size={25} />} />
                <SkillTab children1={"Vite"} children2={<SiVite size={25} />} />
            </SimpleGrid>
        </>
    )
}