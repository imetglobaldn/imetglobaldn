import React from 'react';

// Define the type for the cohorts data
export interface Cohort {
    title: string;
    main?: string;
    info?: string;
    description?: string;
    points: JSX.Element[];
    image: string; // Add image property
}

const StyledSpan: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span style={{ color: 'black', textDecoration: 'underline', fontWeight: 'bold' }}>
        {children}
    </span>
);

export const cohortsData: Cohort[] = [
    {
        title: "COHORT 01",
        main: "PG Students",
        info: "MBA/MCA/MS CA/CS/CMA",
        image: "/cohorts/Cohort 01.webp",
        points: [
            <>
                More and <StyledSpan>better placement</StyledSpan> prospects/opportunities
            </>,
            <>
                Professional Edge over other students with similar qualifications in the cut-throat <StyledSpan>competitive landscape</StyledSpan>
            </>,
            <>
                Increase in <StyledSpan>professional acumen</StyledSpan>
            </>,
        ],
    },
    {
        title: "COHORT 02 (A)",
        main: "Drop-outs/Career Change",
        info: "Dropped out from CA/CS/CMA/CFA",
        image: "/cohorts/Cohort 02 (A).webp",
        points: [
            <>
                <StyledSpan>Rethinking</StyledSpan> on continuing with the present studies!
            </>,
            <>
                <StyledSpan>Don’t feel like giving these exams anymore.</StyledSpan> But I have no other option. What to Do!
            </>,
            <>
                <StyledSpan>I want to keep a backup option</StyledSpan> if I keep clearing all the groups.
            </>,
            <>
                I don’t clear <StyledSpan>all the groups</StyledSpan>.
            </>,
        ],
    },
    {
        title: "COHORT 02 (B)",
        main: "Drop-outs/Career Change",
        info: "Not interested to do conventional PG including MBA/MCA/MS",
        image: "/cohorts/Cohort 02 (B).webp",
        points: [
            <>
                Conventional Degrees have become <StyledSpan>redundant</StyledSpan>.
            </>,
            <>
                <StyledSpan>No guarantee</StyledSpan> of employment.
            </>,
            <>
                Don’t want to be part of <StyledSpan>the Rat Race</StyledSpan>.
            </>,
            <>
                Exorbitant fees. Can’t afford. <StyledSpan>Don’t want to take a bank loan</StyledSpan>.
            </>,
            <>
                Doesn’t comply with <StyledSpan>NEP 2020</StyledSpan>.
            </>,
        ],
    },
    {
        title: "COHORT 02 (C)",
        main: "Drop-outs/Career Change",
        info: "Not interested to give competitive government exams / UPSC anymore",
        image: "/cohorts/Cohort 02 (C).webp",
        points: [
            <>
                Enough of living in this <StyledSpan>disguised unemployment</StyledSpan>.
            </>,
            <>
                Don’t want to continue, <StyledSpan>feel like quitting</StyledSpan> but don’t have any option. So what to do!
            </>,
            <>
                This year also I don’t get through the government exam. <StyledSpan>I’m already 25+</StyledSpan>.
            </>,
        ],
    },
    {
        title: "COHORT 03",
        main: "Graduates",
        info: "Hotel Management | BBA/BCA with 1+ year of experience BTechs",
        image: "/cohorts/Cohort 03.webp",
        points: [
            <>
                I have done my graduation from open. <StyledSpan>How to get a job?</StyledSpan>
            </>,
            <>
                <StyledSpan>Professional Edge over other students</StyledSpan> with similar qualifications to do higher studies (from India or Abroad) in the cut-throat competitive landscape.
            </>,
            <>
                <StyledSpan>What If I don’t want to pursue higher studies.</StyledSpan> How to get a high paying job?
            </>
        ],
    },
    {
        title: "COHORT 04",
        main: "Working Professionals",
        info: "with 5+ years of work experience",
        image: "/cohorts/Cohort 04.webp",
        points: [
            <>
                Want to <StyledSpan>up-skill</StyledSpan> myself to remain employable. How to get a job?
            </>,
            <>
                Don’t want to do field sales, night shift jobs or customer service desk jobs. <StyledSpan>How to change my domain?</StyledSpan>
            </>,
            <>
                I want a <StyledSpan>better appraisal / promotion</StyledSpan>
            </>,
        ],
    },
    {
        title: "COHORT 05",
        info: "Startup Founders | Business Owners | Self Employed | Business Leadership | Aspirants - Content Creators/ Budding Influencers",
        image: "/cohorts/Cohort 05.webp",
        points: [
            <>
                Need to have <StyledSpan>cost effective marketing</StyledSpan>.
            </>,
            <>
                Want to expand to <StyledSpan>new markets and countries</StyledSpan>.
            </>,
            <>
                Need to <StyledSpan>scale up/diversify my venture</StyledSpan>.
            </>,
            <>
                To become a <StyledSpan>DIY professional</StyledSpan>.
            </>,
            <>
                Budgets are moving to Digital. <StyledSpan>Do Digital or Die!</StyledSpan>
            </>,
            <>
                Need to understand this domain to set up <StyledSpan>my in-house department</StyledSpan>.
            </>,
        ],
    },
    {
        title: "COHORT 06",
        main: "10+2 Pursuing Graduation, Schooling",
        info: "",
        image: "/cohorts/Cohort 06.webp",
        points: [
            <>
                I want to do <StyledSpan>internships</StyledSpan> alongside graduation.
            </>,
            <>
                I want to enhance my credentials in the CV and professional personality to get preference in <StyledSpan>competitive exams or study abroad</StyledSpan>.
            </>,
        ],
    },
    
    {
        title: "COHORT 07",
        // info: "Entrepreneurship",
        main: "Entrepreneurship",
        image: "/cohorts/Cohort 07.webp",
        points: [
            <>
                I want to have my own start-up leveraging the power of Digital/Social Media & AI.
            </>,
            // <>
            //     <StyledSpan>No guarantee</StyledSpan> of employment.
            // </>,
            // <>
            //     Don’t want to be part of <StyledSpan>the Rat Race</StyledSpan>.
            // </>,
            // <>
            //     Exorbitant fees. Can’t afford. <StyledSpan>Don’t want to take a bank loan</StyledSpan>.
            // </>,
            // <>
            //     Doesn’t comply with <StyledSpan>NEP 2020</StyledSpan>.
            // </>,
        ],
    },
    {
        title: "COHORT 08",
        info: "Not interested to give competitive government exams / UPSC anymore",
        image: "/cohorts/6.webp",
        points: [
            <>
                Enough of living in this <StyledSpan>disguised unemployment</StyledSpan>.
            </>,
            <>
                Don’t want to continue, <StyledSpan>feel like quitting</StyledSpan> but don’t have any option. So what to do!
            </>,
            <>
                This year also I don’t get through the government exam. <StyledSpan>I’m already 25+</StyledSpan>.
            </>,
        ],
    },
   
];