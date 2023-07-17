const navbar = {
    title: "Arcosx Galaxy",
    logo: {
        alt: "Arcosx Galaxy Logo",
        src: "img/galaxy-logo.svg",
    },
    items: [
        {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Wiki",
        },
        {
            href: "https://github.com/arcosx",
            position: "right",
            className: 'header-github-link',
        },
        {
            href: "https://github.com/arcosx",
            position: "right",
            className: 'header-twitter-link',
        },
    ],
}

module.exports = navbar;
