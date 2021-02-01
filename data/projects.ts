import { Projects } from "@/interfaces/index";

const projects: Projects = [
    {
        name: "Covid HK",
        description:
            "Detailed statistics for coronavirus in Hong Kong, with searching capabilities for finding covid cases near you",
        link: "https://covidhk.feli.page/",
        images: ["/assets/images/covidhk.feli.page_1.png"],
    },
    {
        name: "Next Train",
        description:
            "A redesign of MTR’s Next Train, provides realtime arrival time information",
        link: "https://nexttrain.feli.page/",
        images: [
            "/assets/images/nexttrain.feli.page_1.png",
            "/assets/images/nexttrain.feli.page_2.png",
            "/assets/images/nexttrain.feli.page_3.png",
        ],
    },
    {
        name: "Event Ticketing System",
        description:
            "A school project, titled ‘Event Ticketing System’. Mainly written in Pascal, Dart, and Javascript",
        link: "https://ets.feli.page/",
        images: [
            "/assets/images/ets.feli.page_1.png",
            "/assets/images/ets.feli.page_2.png",
            "/assets/images/ets.feli.page_3.png",
        ],
    },
    {
        name: "Homework",
        description: "A homework app integrated with Google Calendar",
        link: "https://hw.feli.page/",
        images: [
            "/assets/images/hw.feli.page_1.png",
            "/assets/images/hw.feli.page_2.png",
            "/assets/images/hw.feli.page_3.png",
        ],
    },
    {
        name: "Feli URL Shortener",
        description: "Simple URL shortener app with chrome extension available",
        link: "https://url.feli.page/",
        images: ["/assets/images/url.feli.page_1.png"],
    },
];

export { projects };
