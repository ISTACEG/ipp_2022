
var workshopData = [
    {
        eventName: "AWS Workshop",
        eventType: "4",
        eventImgUrl: "./posters/aws workshop.jpeg",
        date: Date.parse("02 Feb 2023"),
        location: "Ada Lovelace Auditorium - IT Department",
        rounds: [
            {
                time: Date.parse("02 Feb 2023 08:30:00 AM"),
                duration: null
            }
        ],
        eventDescription: [
            `i++ is back with a bang to open up opportunities for the students to learn and showcase their skills and talents. 
            `,null,`
            In this edition of i++, we are bringing to you a workshop on one of the trending topics in the field of technology - Serverless applications on AWS cloud. 
            `,null,`
            It's a hands-on workshop conducted by Karthik Appadurai and team from KBX Digital Pvt Ltd. 
            
            All you need to have is a laptop and a AWS account. `
            ,null,`
            REGISTRATION CLOSING TIME: 02.02.2023  08:30 am
    
            Registration Fee: Rs.100/-
            Timing: 8:30am to 3:30pm`
        ],
        prize: null,
        benefits: "",
        member: "1",
        link: "https://forms.gle/GHveBxZNXBdzcxsw8",
        organiser: [
            {
                name: "Akashram J",
                number: "+91 7708477840"
            },
            {
                name: "Praveen R",
                number: "+91 9361352512"
            },
            {
                name: "Ramya N",
                number: "+91 9790463187"
            },
        ]

    },
]


var hackathonData = [
    {
        eventName: "Hackathon",
        eventType: "3",
        eventImgUrl: "./posters/Hackathon.png",
        date: Date.parse("02 Feb 2023"),
        location: "IT Department Laboratory",
        rounds: [
            {
                time: Date.parse("02 Feb 2023 07:00:00 AM"),
                duration: "5 hrs"
            }
        ],
        eventDescription: [
            `A soulful coder knows that programming is a pulse of life that is a way of figuring out a solution for the problem beyond mere lines of code. Are you such a techie who perceives problems with logic to solve them? Are you a Sherlock Holmes in the world of tech who cracks the solution to any problem? Do you like to indulge yourself into hours of coding tasks to rejuvenate your mind?
            `,null,`That's exactly what you have to do here. i++'s 8hr technical hackathon is going to have you as one of the toughest unbeatable contenders. It's happening on the 2nd of Feb. Come as a clan of 2 or 3 adroit coders and get a chance to win a total cash prize of Rs. 10,000 including winners and runners and a free incubation worth Rs. 10,000.
            `
        ],
        prize: {
            winner: 7000,
            runner: 3000,
        },
        benefits: "Free Incubation worth of 10k ",
        member: "3",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdBhecuWMJ6YdFPIqSgI-VtZt6lNpBrKsF8sO0E4dlCEfi2RA/viewform",
        organiser: [
            {
                name: "Akashram J",
                number: "+91 7708477840"
            },
            {
                name: "Praveen R",
                number: "+91 9361352512"
            },
            {
                name: "Ramya N",
                number: "+91 9790463187"
            },
        ]

    },

]


var nontechEventsListData = [
    {
        eventName: "Connections",
        eventType: "2",
        eventImgUrl: "./posters/connections poster.jpg",
        date: Date.parse("03 Feb 2023"),
        location: "IT Department Laboratory",
        rounds: [
            {
                time: Date.parse("03 Feb 2023 09:00:00 AM"),
                duration: "30 mins"
            },
            {
                time: Date.parse("03 Feb 2023 02:00:00 PM"),
                duration: "1 hr"
            }
        ],
        eventDescription: [
        `Round 1: 
                Solve 25 logical questions.`,
        `Round 2: 
                Solve puzzles to find the next set of clues in a room and using those clues find the connection.
        `],
        prize: {
            winner: 750,
            runner: 500,
        },
        benefits: null,
        member: "2",
        organiser: [
            {
                name: "Akashram J",
                number: "+91 7708477840"
            },
            {
                name: "Praveen R",
                number: "+91 9361352512"
            },
            {
                name: "Ramya N",
                number: "+91 9790463187"
            },
        ]

    },

    {
        eventName: "Treasure Hunt",
        eventType: "2",
        eventImgUrl: "./posters/treasureHunt poster.jpg",
        date: Date.parse("03 Feb 2023"),
        location: "IT Department Laboratory",
        rounds: [
            {
                time: Date.parse("03 Feb 2023 10:00:00 AM"),
                duration: null
            }
        ],
        eventDescription: [
        `A total of 9 places have to be found. Initially they'll be given a starting place. It won't be same for all. It would be in a circular fashion. At the spot there'll be a QR code which they have to scan for the next spot's clue. But this QR code is password protected that is the code from previous clue will be used to ensure that places are visited in correct order. After finding each spot, a screenshot of the code in clue should be sent to the organisers number.` 
        ],
        prize: {
            winner: 750,
            runner: 500,
        },
        benefits: null,
        member: "2",
        organiser: [
            {
                name: "Akashram J",
                number: "+91 7708477840"
            },
            {
                name: "Praveen R",
                number: "+91 9361352512"
            },
            {
                name: "Ramya N",
                number: "+91 9790463187"
            },
        ]

    },

]


var eventListData= [
        {
            eventName: "OLPC",
            eventType: "1",
            eventImgUrl: "./posters/OLPC_Poster.png",
            date: Date.parse("02 Feb 2023"),
            location: "Online",
            rounds: [
                {
                    time: Date.parse("02 Feb 2023 08:00:00 PM"),
                    duration: "1 hr"
                },
                
            ],
            eventDescription: [
                `The ultimate test of coding skills is here, are you up for the challenge? This time i++ is back with an Online Programming Contest to unleash your coding genius. Prepare to be amazed as you tackle our simple yet tricky questions and compete against the best and brightest minds and come out on top to claim your victory. Think you have what it takes to be the winner? Then join us on this challenge on Feb 2nd and show off your coding prowess and take home some exciting cash prizes!`,
                null,`
                Wait… Wait… Wait… Did you think we would stop just with the cash prizes? If so, you are definitely wrong. The winner gets an opportunity for an interview with KBX Digital for Internship and FTE. So what are you waiting for? Get ready for the online contest revolution.`    
            ],
            prize: {
                winner: 3000,
                runner: 1500,
            },
            benefits: "Opportunity to interview with KBX Digital for Internship and full-time roles.",
            member: "1",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ],
            link: "https://forms.gle/2RaEhXPxcy4vXwZ7A"
        },

        {
            eventName: "OSPC",
            eventType: "1",
            eventImgUrl: "./posters/ospc poster.jpg",
            date: Date.parse("03 Feb 2023"),
            location: "Online",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: "40 mins"
                },
                {
                    time: Date.parse("03 Feb 2023 02:00:00 PM"),
                    duration: "1 hr"
                },
            ],
            eventDescription: [
                `"Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer science." - By Maria Klawe`,
                null,`It's hard to imagine how much coding has intertwined with our lives. Are you a person of tech who gets exhilarated by lines of code? Is coding your way of life? Does the urge to learn about computers and technology never get you exhausted?`,
                null,`Then, i++ have the perfect event for you. Come and participate as a lone wolf coder in OSPC on the 3rd of Feb. The ones to unleash the 2 rounds of technical aptitude and competitive coding would be the bearer of a total cash prize of Rs. 6000 for both winners and runners and an internship offer from our title sponsor Kuriyam.`,
                
                
                null,`Round 1: Consists of 25 Multiple Choice Questions (including 6 tie-breaker questions) Questions will be provided from topics such as OOPS, DBMS, Code Debugging, Finding the Output, Operating Systems, Networks. Participants should answer the questions within the stipulated time. (in case of equal score and equal tie-breaker questions answered, time of submission will be considered for selection).`,
                null,`Round 2: Consists of 3 coding questions will be provided. Each of the questions will be of Easy, Intermediate and Hard difficulty level. Students can solve the coding questions using any programming language.`],
            prize: {
                winner: 4000,
                runner: 2000,
            },
            benefits: "Intern for winner(KURIYAM)",
            member: "1",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },

        {
            eventName: "Escape Room",
            eventType: "1",
            eventImgUrl: "./posters/escape room.jpg",
            date: Date.parse("03 Feb 2023"),
            location: "IT Department Laboratory",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: "45 mins"
                },
                {
                    time: Date.parse("03 Feb 2023 02:00:00 PM"),
                    duration: "2 hrs"
                },
            ],
            eventDescription: [
           `Won't it be thrilling to survive in the game by writing codes? This time ISTA and CSAU come together in i++ and invites you to compete among the fella coders for the attractive rewards in bizarre and fun filled coding rounds. Do you think you could survive till the end and take away those rewards by overcoming arduous obstacles? Then wear those green tracksuits and join us February 3rd in Squid Game. Ofcourse we warn the stakes are deadly`,
            null,`Round 1: Participants can register and enter the room where a gamemaster will randomly say the word “statue” and attempts to make them laugh for a short time if someone moves/laughs they will be given a one minute time out. Questions will be normal coding questions with debug the code (25 QNS).
            `,null,`Round 2: `,
            ,`TASK 1: Candy Carving (Participants will have to choose a number which will have 4 languages (C C++ Python Java). They will be given a set of 10 questions and 25 minutes time, the first 10 to solve all the questions in their chosen language will be selected. If time runs out before filling 10 then we will just select the rest from the leaderboard.)`
            ,null,`TASK 2: Tug of War (Participants will be divided into two teams 5v5. Each side will be given a set of 10 coding questions the team that solves first wins and the other team is eliminated. Team co-ordination is left up to the members.)`
            ,null,`TASK 3: Pebble Game (Remaining 5 Participants are ordered by the rank of their mcqs say 1 2 3 4 5. Since 1 has aced the mcq 1 can go to finals directly and 2 vs 3 and 4 vs 5 is conducted where only one easy question with an edge testcase is given and whoever solves first is chosen and the other is eliminated.)`
            ,null,`TASK 4: The Squid Game (With the last 3 players they are given a single question and a time of 10 minutes. Whoever passes the most test cases with a decent time complexity wins the game. ( Time of completion is taken for choosing the winning places ))`
            ],
            prize: {
                winner: 2000,
                runner: 1000,
            },
            benefits: null,
            member: "2",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },
        
        {
            eventName: "CODE-DECODE",
            eventType: "1",
            eventImgUrl: "./posters/code decode poster.jpeg",
            date: Date.parse("03 Feb 2023"),
            location: "IT Department Laboratory",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: "45 mins"
                },
                {
                    time: Date.parse("03 Feb 2023 02:00:00 PM"),
                    duration: "2 hrs"
                },
            ],
            eventDescription: [
            `The world has changed and so did many others things. Who knows what might happen in future? We might end up finding questions for answers instead of the other way round. Ahh, isn't that coool, but it's not as easy as it sounds. Don't agree with us? Prove us wrong by participating in the Code Decode event on February 3rd.

            `,null,`Round 1: Consists of 5 questions for which students have to write the pseudocode or C++/C/Java/Python code of the logic. 
            `,null,`Round 2: Consists of 5 questions for which .exe file will be provided. Students can execute the file and enter the inputs and get the outputs, using which they have to code the logic in any programming language.
            `],
            prize: {
                winner: 2000,
                runner: 1000,
            },
            benefits: "Opportunity to interview with KBX Digital for Internship and full-time roles.",
            member: "2",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },

        {
            eventName: "App Dev",
            eventType: "1",
            eventImgUrl: "./posters/Appdev poster.png",
            date: Date.parse("03 Feb 2023"),
            location: "IT Department Laboratory",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: "3 hrs"
                },
                {
                    time: Date.parse("03 Feb 2023 02:00:00 PM"),
                    duration: "2 hrs"
                },
            ],
            eventDescription: [
            `Are you an expert in creating visually appealing and user-friendly interfaces? Then hop in. i++ brings yet another thrilling App/Web Development competition to put your abilities to the test as you build and develop innovative web projects. With prizes for the top contestants and the opportunity for internship at Kuriyam, this is your chance to shine and advance your career. So folks, get ready to unleash your creativity and take your UI/UX skills to the next level.
            `,null,
            `Pre-requisites: Students must bring their own laptops, with the necessary platform setup with which they are comfortable. (Android Studio, React-Native, React, Angular). Once the task has been given, the student is expected to start working on it. Time will not be given separately for setting up their framework.`
            ,null,`Round 1: Student can choose from either a Web Development or App Development tasks. In either case, in the first round, the student has to design the required UI which will be provided to them in the form of an image sent through mail. Student can use any platform to develop the required UI (FrontEnd). Various UI requirements such as forms, navigation panels, display alignment, menus etc. will be provided which should be designed by the student.
            `,null,`Round 2: Student must continue working on the UI they developed in Round 1. Student will be given the required functionalities of a full fledged application that should be developed in continuation to the UI they developed in Round 1.Tasks such as Backend design, Connecting the Frontend with Backend, Demonstration(Phone/Emulator for Android App and Localhost deployment for WebApp) should be performed.
            `],
            prize: {
                winner: 4000,
                runner: 2000,
            },
            benefits: "Intern for winner(KURIYAM)",
            member: "1",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },

        {
            eventName: "Shark Tank",
            eventType: "1",
            eventImgUrl: "./posters/sharktank poster.jpeg",
            date: Date.parse("03 Feb 2023"),
            location: "IT Department Laboratory",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: null
                },
            ],
            eventDescription: [`
            “Business has only two functions — marketing and innovation.”
            Shark tank is an intensive brainstorming event where one has to diagnose predefined problems, identify the best opportunities and ideate the most viable solution.Join and enlighten us with your innovative ideas and win exciting cash prizes worth 4.5 K!
            `,null,
            `Kindly prepare a presentation that includes but is not limited to the following information to present during the pitch:`,
            null,`
            1.What's the PROBLEM?`,`
            2.What's your SOLUTION, i.e. PRODUCT (must strictly be a technical product or must have a significant techincal component)`,
            `
            3.The MARKET?`,
            `
            4.Who is the COMPETITION?`,
            `
            5.What makes you so SPECIAL?`,`6.FEASIBILITY
            `,`
            7.SCALABILITY`,`8.Requirements: What are the resources and tools that might be neede to complete the prototype.`
        
            ],
            prize: {
                winner: 3000,
                runner: 1500,
            },
            benefits: "Free Incubation worth of 10k",
            member: "1",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },


        {
            eventName: "Break the Query",
            eventType: "1",
            eventImgUrl: "./posters/BreakTheQuery.png",
            date: Date.parse("03 Feb 2023"),
            location: "IT Department Laboratory",
            rounds: [
                {
                    time: Date.parse("03 Feb 2023 09:00:00 AM"),
                    duration: "40 mins"
                },
                {
                    time: Date.parse("03 Feb 2023 02:00:00 PM"),
                    duration: "2 hrs"
                },
            ],
            eventDescription: [
                `"Select EVENTS from i++ where name="BREAK THE QUERY;" Yes!! this event is all about SQL queries....Showcase your knowledge on SQL and DBMS in this event and stand a chance to win cash prizes worth 3K!`
                ,null,`Round 1: Consists of 30 MCQ questions related to SQL.
                `,null,`Round 2: Participants will be given a set of questions and will be required to write SQL queries to find the answers. The event will test their knowledge of Table creation, cursors, PL/SQL and Triggers and SQL related questions.
            `],
            
            prize: {
                winner: 2000,
                runner: 1000,
            },
            benefits: null,
            member: "1",
            organiser: [
                {
                    name: "Akashram J",
                    number: "+91 7708477840"
                },
                {
                    name: "Praveen R",
                    number: "+91 9361352512"
                },
                {
                    name: "Ramya N",
                    number: "+91 9790463187"
                },
            ]
        },
        


        

        
    ]



var sponsorsList = [
    {
        sponsorName: "Kuriyam",
        // sponsorLogo: "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        sponsorLogo: "./posters/kuriyam.png",
        type: "Title Sponsor"
    },
    {
        sponsorName: "KBX Digital",
        // sponsorLogo: "https://images.unsplash.com/photo-1668027686570-aff6795ed3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        sponsorLogo: "./posters/KBX Logo.png",
        type: "Workshop Partner"
    },
    {
        sponsorName: "Anna University Incubation Center",
        // sponsorLogo: "https://plus.unsplash.com/premium_photo-1667857391858-a40fc91136e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        sponsorLogo: "./posters/2.png",
        type: "Event Sponsor"
    },
    
]


export {eventListData, sponsorsList, nontechEventsListData, workshopData, hackathonData}