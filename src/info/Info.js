import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.JPG"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"
// import mock6 from "../img/mock6.svg"

// this is your theme colors 
export let colors = ["rgb(0, 204, 204)", "rgb(153, 0, 153)", "rgb(0, 204, 204)"];

export const info = {
    firstName: "Megan",
    lastName: "Butler",
    position: "Fullstack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0], //base color is the in colors
    miniBio: [
        {
            emoji: '🎨',
            text: 'Blender is my favourite place to be'
        },
        {
            emoji: '🏖️',
            text: 'I would co-author books like how to code for dummies'
        },
        {
            emoji: "💻",
            text: "Game Developer"
        },
        {
            emoji: "📧",
            text: "meganstar.300@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Popcorn-o0",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/megan-butler-99722821a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
        // {
        //     link: "https://twitter.com/ThayDevToBe",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
    ],
    bio: "Aspiring Game Developer who has skills in Fullstack Development, I love playing and watching gameplay in my free time and it'd be a dream to build them!",
    skills:
        {
            proficientWith: ['Java', 'C#', 'HTML', 'CSS', 'Python'],
            exposedTo: ['JavaScript']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🕹️'
        },
        {
            label: 'eating',
            emoji: '🍜'
        },
        {
            label: 'sports',
            emoji: '🏑'
        }

    ],
    // images and links to github and live sites - copy the object if you have more itemas to add - add urls in github and live - rename the mock variable to your project screenshots
    portfolio: [
        {
            image: mock1,
            github: "https://github.com/Popcorn-o0/Formal-website-development-assesment-1",
            gitIcon: "fa fa-github"
            //, liveIcon: "fa fa-link",
            // live: "https://thayydevvy.vercel.app/"
        },
        {
            image: mock2,
            github: "https://github.com/Popcorn-o0/Python-Formal-Assesment-1",
            gitIcon: "fa fa-github"
            //, liveIcon: "fa fa-link",
            // live: "https://thayydevvy.vercel.app/"
        }
        //, {
        //     image: mock3,
        //     github: "https://github.com/music-tko",
        //     gitIcon: "fa fa-github",
        //     liveIcon: "fa fa-link",
        //     live: "https://thayydevvy.vercel.app/"
        // },
        // {
        //     image: mock4,
        //     github: "https://github.com/music-tko",
        //     gitIcon: "fa fa-github",
        //     liveIcon: "fa fa-link",
        //     live: "https://thayydevvy.vercel.app/"
        // },
        // {
        //     image: mock5,
        //     github: "https://github.com/music-tko",
        //     gitIcon: "fa fa-github",
        //     liveIcon: "fa fa-link",
        //     live: "https://thayydevvy.vercel.app/"
        // },
        // {
        //     image: mock6,
        //     github: "https://github.com/music-tko",
        //     gitIcon: "fa fa-github",
        //     liveIcon: "fa fa-link",
        //     live: "https://thayydevvy.vercel.app/"
        // }
    ]
}