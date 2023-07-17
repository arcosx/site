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
            href: "https://twitter.com/_arcosx",
            position: "right",
            className: 'header-twitter-link',
        },
        {
            href: "https://www.linkedin.com/in/wangguobin/",
            position: "right",
            className: 'header-linkedin-link',
        },
        {
            href: "https://stackoverflow.com/users/6897372/arcosx",
            position: "right",
            className: 'header-stackoverflow-link',
        },
    ],
}

module.exports = navbar;
