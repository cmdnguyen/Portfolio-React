import {
    DonBoscoHiepSiSkills,
    RestaurantExpressSkills,
    TechBlogSkills,
    CircleCollaborativeSkills
} from './Skills'

export const Projects = [
    {
        id: 'circle-collaborative-image',
        src: 'images/circleProjectGif.gif',
        name: 'Circle',
        text: `This is a social media platform where users can create and join “circles” as a means of interacting with people that have similar interests. 
        We believe our project takes inspiration from the likes of Reddit’s subbreddits with how groups are made and interact with each other as well as the look of sites like Twitter, Facebook, and Pintrest for a visually appealing user interface.`,
        skills: <CircleCollaborativeSkills />,
        githubURL: 'https://github.com/mj470/circle-collaborative',
        deployedURL: 'https://circle-collaborative-37d794c2b6b2.herokuapp.com/'
    },
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