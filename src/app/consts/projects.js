/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "galactic",
        links: {
            live: "btecoreo.itch.io/galactic-invaders",
            github: "serinandukaire/Galactic-Invaders"
        },
        techs: ["node", "html", "css", "sqlite"],
        hasImage: true,
    },
    {
        id: "jump-platformer",
        links: {
           // live: "pixelbattle.fun",
            github: "serinandukaire/Jump-Platform-Game",
        },
        techs: ["unity", "c", "vscode"],
        hasImage: true
    },
    {
        id: "portfolio",
        techs: ["js", "sass", "webpack"],
        links: {
            github: "/serinandukaire.github.io",
            live: "serinandukaire.github.io"
        },
        hasImage: true,
    },
    {
        id: "chertnodes",
        links: {
            figma: "1149829028455305659",
        },
        techs: ["python", "flask", "scss"],
        hasImage: true,
    },
    {
        id: "protectx",
        techs: ["react", "node", "discordJs"],
        links: {
            figma: "1168662007492356291",
        },
        hasImage: true,
    },
    {
        id: "khanswers",
        techs: ["express", "node", "ejs"],
        links: {
            live: "khanswers.vercel.app",
            github: "/kahoot-answers",
        },
        hasImage: true,
    },
    {
        id: "kotikbot",
        techs: ["html", "css", "js"],
        links: {
            live: "kotikbot.github.io",
            github: "kotikbot/kotikbot.github.io",
        },
        hasImage: true,
    },
    {
        id: "speedtyp",
        techs: ["python", "tk", "node"],
        links: {
            github: "serinandukaire/speed-typing-test",
        },
        isSmall: true,
    },
    {
        id: "chesspro",
        techs: ["figma"],
        links: {
            figma: "1148344443083977909",
        },
        isSmall: true,
    },
    {
        id: "madhost",
        techs: ["pug", "less", "gulp", "node"],
        links: {
            live: "madhost.pw",
        },
        hasImage: true,
    },
];

export default projects;
