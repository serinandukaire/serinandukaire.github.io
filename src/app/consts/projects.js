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
        id: "tamaplushy",
        links: {
            github: "serinandukaire/TamaPlushy-Game",
            live: "https://btecoreo.itch.io/tamaplushy"
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
];

export default projects;
