import { Project } from "./Project";

export const ProjectData: Project[] = [
  {
    body: {
      title: "whimsydecor",
      displayTitle: "Whimsy Decor",
      header: "Curating spaces that inspire, one design at a time",
      desc: "Curating spaces that inspire, one design at a time",
      theme: "theme-darkgreen",
    },
    sct1: {
      title: "Curating spaces that <h>inspire</h>, with every design.",
      overview: "Whimsy Decor, a local Saint Louis interior design company, specializes in creating unique and personalized spaces through services like interior reconstruction, mural painting, floor plan layout, and furniture design. To enhance their online presence, I developed a website that reflects their distinctive style and makes it easy for customers to connect with Naomi and Brad. By understanding their brand vision, I created intuitive, responsive designs using Figma and built a site that facilitates seamless user interaction. This new online platform has significantly boosted client engagement and generated numerous new leads, solidifying Whimsy Decor's market presence.",
      timeframe: {
        num: "3",
        type: "months",
        desc: "Minimum viable product"
      },
      technologies: {
        react: 1,
        mysql: 1,
        next: 1,
        php: 0,
        wordpress: 0,
        ts: 1,
        figma: 1,
        photoshop: 1,
        tailwind: 1,
        html: 0,
        sass: 0,
        digitalOcean: 0,
        ubuntu: 0,
        nginx: 0,
      }
    },
    sct2: {
      header: "The Strategy",
      desc: "To create an exceptional online presence for Whimsy Decor, I immersed myself in understanding their unique aesthetics and brand vision. This insight allowed me to develop a website that not only reflects their style but also facilitates a seamless user experience, making it easy for customers to contact the business.",
      card1: {
        header: "Solution",
        desc: "UX & UI<br>Design"
      },
      card2: {
        header: "Solution",
        desc: "Web<br>Development"
      }
    },
    sct3: {
      header1: "UX & UI Design",
      desc1: "Using Figma, I crafted both mobile and web designs from the ground up, establishing a cohesive design system tailored to Whimsy Decor’s brand. My focus was on creating an intuitive and visually appealing interface that enhances user engagement and interaction.",
      header2: "Website Development",
      desc2: "I developed a responsive website that ensures a smooth browsing experience across all devices. The site features streamlined navigation and interactive elements, making it effortless for users to explore Naomi and Brad's work and connect with them for future projects."
    },
    sct4: {
      header: "The Outcome",
      desc: "The redesigned website has significantly boosted Whimsy Decor's online presence, providing a professional platform for showcasing their portfolio. This has led to increased customer engagement and higher conversion rates, as users can easily view their work and contact them for new projects. The site is now a powerful marketing tool, attracting potential clients and driving business growth."
    },
    sct5: {
      header: "Growth Highlights",
      items: [{
        header: "Figma",
        headerLow: "Design",
        desc: "Working directly with Figma provided me with valuable experience in collaborating with designers. This process improved my ability to understand how their terminology applies to my codebase."
      }, {
        header: "CMS",
        headerLow: "Skills",
        desc: "Throughout this project, I gained hands-on experience setting up a DigitalOcean server to host and manage several Next.js applications, each with its own MySQL database. I now have a solid understanding of how Nginx works on Linux and how to efficiently run multiple projects from a single server."
      }]
    }
  },
  {
    body: {
      title: "jamdealer",
      displayTitle: "Jamdealer",
      header: "Amplifying your music experience, one beat at a time.",
      desc: "Jamaine, your go-to for creating awesome jams, is devoted to making music. JamDealer serves as his platform to connect with new audiences and assist them in selecting the perfect beats for their music projects.",
      theme: "theme-purple1",
    },
    sct1: {
      title: "Your go-to fam for <h>creating<h> awesome jams.",
      overview: "Jamdealer is a platform designed for musicians to buy and sell beats and songs. Developed for Jamaine, who is passionate about creating sophisticated music, the site aims to help him connect with more musicians, showcase his work, and handle payments for those interested in purchasing his music or collaborating with him. Built on WordPress, the website integrates Stripe for transactions and MySQL for the backend database. It’s fully customized to fit Jamaine’s needs, featuring a CMS that allows him to easily update and manage the site.",
      timeframe: {
        num: "1",
        type: "Week",
        desc: "Completed Website and CMS"
      },
      technologies: {
        react: 0,
        mysql: 1,
        next: 0,
        php: 1,
        wordpress: 1,
        ts: 0,
        figma: 0,
        photoshop: 1,
        tailwind: 0,
        html: 1,
        sass: 0,
        digitalOcean: 1,
        ubuntu: 1,
        nginx: 1,
      }
    },
    sct2: {
      header: "Helping Creators Find Their Beat",
      desc: "Jamaine approached me with the ambition to expand his music outreach, aiming to support fellow creators and generate income. I offered my services to swiftly develop a website showcasing his portfolio, facilitating payments, and delivering beats. Additionally, I provided instructional videos on navigating and managing products within the WordPress platform.",
      card1: {
        header: "Solution",
        desc: "CMS<br>Wordpress Website"
      },
      card2: {
        header: "Networking",
        desc: "Online<br>Portfolio"
      }
    },
    sct3: {
      header1: "Designing JamDealer",
      desc1: "I collaborated directly with Jamaine to design JamDealer on WordPress, ensuring the website reflects the desired vibe. JamDealer functions as a catalog shop where beats are categorized for easy browsing, allowing users to listen to demos before purchasing. Beyond its e-commerce capabilities, the site serves as Jamaine's portfolio, showcasing his musical style and facilitating networking with new artists. The WordPress platform enables Jamaine to effortlessly update content, add new beats to the shop, and make adjustments as needed. To simplify this process, I created instructional videos guiding him through website updates and remain readily available for any further assistance.",
      header2: "Musical Outreach",
      desc2: "JamDealer not only serves as an e-commerce platform but also enhances Jamaine's outreach to a broader audience. By providing a user-friendly interface where beats are neatly categorized and accompanied by demos, the website empowers potential buyers to make informed decisions. Additionally, Jamaine's portfolio section effectively communicates his artistic vision and strengths, fostering connections within the music industry. With WordPress's intuitive editing capabilities and ongoing support, Jamaine can confidently manage and expand his online presence, focusing more on creating music and less on technicalities.",
    },
    sct4: {
      header: "Relaxed and Trustworthy Product",
      desc: "The website is crafted to emit a relaxed and trustworthy vibe, offering straightforward access to information about Jamaine Tucker and his latest releases. It provides a seamless user experience, ensuring visitors can easily navigate and discover details about Jamaine's music. The design emphasizes clarity and accessibility, making it effortless for users to engage with his portfolio and stay updated on his newest tracks.",
    },
    sct5: {
      header: "What I Learned:",
      items: [{
        header: "CMS",
        headerLow: "Management",
        desc: "Through this project, I mastered the integration of WordPress into my existing DigitalOcean server without disrupting the Next.js sites already in place. I ensured that the client has complete access to their CMS and database while also setting up the server to support multiple WordPress sites simultaneously. This experience has broadened my skills in server management and multi-platform hosting."
      }, {
        header: "Video",
        headerLow: "Tutorials",
        desc: "Since Jamaine was new to using a CMS, I created a series of video tutorials to guide him through WordPress after we completed the website. I organized these tutorials in Dropbox, arranging them into folders with clear titles to make navigation easy. This experience improved my ability to explain technical concepts to non-technical users and enhanced my skills in client communication, all while deepening my own understanding of the CMS technology."
      }]
    }
  },
  {
    body: {
      title: "fitprimes",
      displayTitle: "Fitprimes",
      header: "Empowering fitness journeys with intuitive wellness solutions",
      desc: "A wellness app crafted to assist virtual personal trainers in creating customized wellness plans and inspiring their clients to achieve their fitness goals.",
      theme: "theme-orange",
    },
    sct1: {
      title: "Empowering fitness journeys with <h>intuitive<h> wellness solutions.",
      overview: "FitPrimes is a prototype social media platform designed to connect individuals with personal trainers. The platform enables trainers to create fitness plans, publish articles, monitor client progress, and facilitate seamless payments. A key feature is the fully developed article system, powered by a custom CMS built with Next.js. This dynamic content creation system allows trainers to contribute health-related articles, boosting FitPrime's SEO by increasing the site's visibility through relevant search terms.",
      timeframe: {
        num: "2",
        type: "Weeks",
        desc: "Project Prototype"
      },
      technologies: {
        react: 1,
        mysql: 1,
        next: 1,
        php: 0,
        wordpress: 0,
        ts: 1,
        figma: 1,
        photoshop: 1,
        tailwind: 1,
        html: 1,
        sass: 1,
        digitalOcean: 1,
        ubuntu: 1,
        nginx: 1,
      }
    },
    sct2: {
      header: "Crafting an Idea",
      desc: "FitPrimes was designed to showcase the envisioned website appearance once the client's business plan for personal trainers is implemented. The client aimed to secure domain ownership and draw inspiration for their ideas while refining the website's functionality. The website has, already implemented, an article creation system for personal trainers to write health-related articles. This feature aims to elevate the website's domain authority and improve its visibility in Google search results for health-related topics.",
      card1: {
        header: "Prototype",
        desc: "Next.JS<br>Web Application"
      },
      card2: {
        header: "SEO",
        desc: "Articles by<br>Personal Trainers"
      }
    },
    sct3: {
      header1: "Elegantly Crafted Prototype",
      desc1: "Next.js was instrumental in crafting the modern and visually appealing design of the FitPrimes website. Leveraging Next.js's capabilities, I structured the site to deliver a seamless and responsive user experience with fast loading times and efficient routing.<br><br> SASS played a crucial role in styling the website, allowing us to maintain clean and organized CSS code while utilizing variables, mixins, and nested styles for enhanced flexibility and maintainability. Additionally, CSS keyframe animations were employed to add subtle yet impactful visual elements that engage users and bring dynamic aspects to the site's interface. Together, these technologies enabled us to create a website that not only meets aesthetic standards but also prioritizes performance and usability.",
      header2: "SEO Optimization",
      desc2: "Using React elements, I've crafted an intuitive article creation system tailored for fitness influencers on the platform. This system empowers influencers to easily create health-related articles, tapping into their expertise to provide valuable content to users. Fitness-focused articles are pivotal for boosting a website's SEO, driving organic traffic and engagement. Encouraging personal trainers and fitness influencers to contribute articles not only enriches the user experience with informative content but also enhances the website's authority in health and fitness domains. This strategic approach aims to strengthen visibility and relevance in search engine results, promoting growth and community engagement within the client's fitness-oriented platform.",
    },
    sct4: {
      header: "The Finished Prototype",
      desc: "FitPrimes is a modern Next.js web app featuring an intuitive article creation system and advanced CSS keyframe animations. These animations are smooth and contribute significantly to its modern design. The intuitive article creation system allows users to easily generate health-related content, enhancing engagement and education. Combined with Next.js's efficiency, the platform ensures fast loading times and seamless navigation, making FitPrimes a compelling choice for fitness enthusiasts and professionals seeking a contemporary online presence.",
    },
    sct5: {
      header: "Key Takeaways",
      items: [{
        header: "NextJS",
        headerLow: "Framework",
        desc: "Working on Fitprimes, my first Next.js project, allowed me to dive deep into the workings of both Next.js and React. I was able to seamlessly integrate what I already knew about JavaScript and SASS with these new tools, expanding my skills and understanding of modern web development."
      }, {
        header: "CMS",
        headerLow: "Hardcoded",
        desc: "The most challenging part of Fitprimes was designing a custom CMS that dynamically generates articles with MySQL. It handles various content types like paragraphs, lists, images, and descriptions. This taught me to simplify complex processes, making them intuitive and user-friendly."
      }]
    }
  },
  {
    body: {
      title: "fanslyte",
      displayTitle: "Fanslyte",
      header: "Equipping creators with innovative tools for digital storytelling.",
      desc: "A social media platform designed for influencers to produce exclusive content updates for their supporters via a tiered system, while efficiently organizing their follower base using labels, tags, and databases.",
      theme: "theme-purple2",
    },
    sct1: {
      title: "Equipping creators with <h>innovative</h> tools for digital storytelling.",
      overview: "FansLyte is a platform designed for content creators to sell their work directly to fans, fostering a direct and supportive relationship. I developed the FansLyte website from the ground up, focusing on both functionality and visibility. By creating a user-friendly and responsive site, I ensured a seamless experience for both creators and fans. Through strategic SEO efforts, I increased the site's online presence, driving more traffic and engagement.",
      timeframe: {
        num: "3",
        type: "months",
        desc: "Minimum viable product"
      },
      technologies: {
        react: 0,
        mysql: 1,
        next: 0,
        php: 1,
        wordpress: 0,
        ts: 1,
        figma: 1,
        photoshop: 1,
        tailwind: 0,
        html: 1,
        sass: 1,
        digitalOcean: 1,
        ubuntu: 1,
        nginx: 1,
      }
    },
    sct2: {
      header: "Fully Custom Webapp",
      desc: "FansLyte involved building a website that caters to the needs of content creators and their fans, where pages are dynamically generated and purchasing is a seamless process. The unique requirements of such a platform required a hard-coded website using custom dynamic PHP content generation and database modeling. ",
      card1: {
        header: "Solution",
        desc: "Hard-Coded<br>Web Application"
      },
      card2: {
        header: "Outreach",
        desc: "SEO<br> Optimization"
      }
    },
    sct3: {
      header1: "Hardcoded Webapp",
      desc1: "After thorough discussions about the client’s business objectives and researching their competitors, I concluded that creating a mobile-friendly, single-page web application would be the ideal approach for this project. This type of website updates content smoothly without needing to reload the entire page, providing a seamless user experience.<br><br>To achieve this, I developed a framework using PHP to generate HTML dynamically. This means that when you interact with the website—like scrolling to load more posts—information stored in a MySQL database is pulled and displayed instantly. This approach ensures that the website feels responsive and efficient, adapting to user actions in real-time while maintaining a streamlined and engaging interface.",
      header2: "SEO Optimization",
      desc2: "Maintaining a trustworthy social media platform is crucial for attracting new influencers and driving on-site sales. To achieve this goal for FansLyte, I focused on enhancing their online reputation. This involved actively managing reviews across platforms and optimizing search engine results for relevant keywords. By strengthening FansLyte's online presence, I significantly boosted their conversion rates and increased website traffic. This strategic approach helped solidify FansLyte as a reliable choice in the competitive social media landscape.",
    },
    sct4: {
      header: "Reaching the Top of Google with a Polished Webapp",
      desc: "FansLyte's trustworthy and dynamic platform has significantly contributed to its success, providing influencers with a robust platform to engage meaningfully with their fans while driving business growth. This website marks the initial iteration of FansLyte and has served as their primary online presence for over two years.",
    },
    sct5: {
      header: "Skill I Learned",
      items: [{
        header: "SEO",
        headerLow: "Optimization",
        desc: "For Fanslyte, I worked on boosting the website’s Google ranking to build trust with the audience. I achieved top search results, encouraged reviews, and established hyperlinks. This project enhanced my skills in SEO and social media integration while teaching me effective strategies for increasing online visibility and trust."
      }, {
        header: "Webapp",
        headerLow: "Hardcoded",
        desc: "Working on the Fanslyte project, I gained a solid understanding of PHP by hardcoding a system that made web pages update without reloading the entire page. This taught me how many website builders and frameworks work behind the scenes."
      }]
    }
  }, 
];