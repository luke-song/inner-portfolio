import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>InterviewRocket</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://interviewpractice.com'}
                        >
                            <h4>www.interviewpractice.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer</h3>
                        <b>
                            <p>Jan 2023 - Dec 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards people who are looking to practice their
                    interview skills, Interview Rocket is the home of over 5+ AI
                    voice Agents. Written in Javascript using React, Next.js,
                    Python, FastApi, and TailwindCSS.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Led the front-end development of InterviewRocket
                            using Next.js, creating an intuitive user interface
                            for real-time, AI-powered mock interviews.
                        </p>
                    </li>
                    <li>
                        <p>
                            Seamlessly integrated frontend with Python backend
                            via WebSockets, ensuring smooth user interactions
                            and conversational flow with AI agents.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Identity</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://identity.com/'}
                        >
                            <h4>www.identity.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Associate Frontend Software Engineer</h3>
                        <b>
                            <p>May 2022 - Jan 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Managed a data portal and gateway protocol of the
                    identity.com. Written in Typescript, React, and Rust.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Spearheaded the development of the Gateway v2
                            Protocol (Gv2), encompassing a Rust program,
                            TypeScript client service, and exhaustive
                            documentation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with the CTO and senior developers,
                            achieving 90% test code coverage for the DID-SOL and
                            Cryptid projects using Mocha and Jest.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Freelance</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://lukesong.xyz'}
                        >
                            <h4>www.lukesong.xyz</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Software Engineer</h3>
                        <b>
                            <p>June 2021 - Current</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed various web applications and tools, utilizing
                    technologies such as HTML, CSS, Javascript, Typescript,
                    React and Node.js.{' '}
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Continuity Compass v0.1 for checking USDWS
                            compliance
                        </p>
                    </li>
                    <li>
                        <p>Full Stack Starbucks online store and back office</p>
                    </li>
                    <li>
                        <p>
                            Responsive web application for Little Minds, a
                            decentralized Mobile Identification Card for San
                            Jose State University (Pseudo Pass)
                        </p>
                    </li>
                    <li>
                        <p>cross-platform mobile application for Appointzen</p>
                    </li>
                    <li>
                        <p>
                            contributed to an open-source community forum
                            software at STEM AWAY
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>SpotMeSolutions</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer Intern</h3>
                        <b>
                            <p>June 2018 - Sep 2019</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Solved parking problems for San Jose State University
                    student and professors with motion sensors and react-native
                    app.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Pioneered a cross-platform parking app, adopted by
                            over 3,000 San José State students, streamlining
                            real-time parking spot discovery.
                        </p>
                    </li>
                    <li>
                        <p>
                            Orchestrated the UI, integrating features like
                            login, navigation, and location tracking using
                            Google Maps API.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
