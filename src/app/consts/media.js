import proxy from "../proxies/media"

const media = {
    discord: {
        id: "914240860101681163",
        tag: "elias.dev.",
    },
    stackOverflow: {
        id: "19758208",
        name: "elias",
    },
    linkedin: "serina-ndukaire",
    github: "EliasDevis",
    figma: "elias_dev",
    replit: "EliasDev",
    codewars: "EliasDevis",
    devTo: "eliasdevis",
    cssBattle: "elias_dev",
    codepen: "elias_dev",
    dribble: "Elias_dev",
    email: "serinadera@gmail.com"

}

export default new Proxy(media, proxy);

