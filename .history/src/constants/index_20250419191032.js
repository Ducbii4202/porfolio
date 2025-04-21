import projects1 from '../assets/projects1.webp';
import projects2 from '../assets/projects2.webp';
import projects3 from '../assets/projects3.webp';
import projects4 from '../assets/projects4.webp';
import projects5 from '../assets/projects5.webp';
import projects6 from '../assets/projects6.webp';

export const LINKS = [
    { href: '#about', label: 'About' },
    { href: '#project', label: 'Project' },
    { href: '#experience', label: 'Experience' },
    { href: '#skill', label: 'Skill' },
    { href: '#contact', label: 'Contact' }
];

export const HERO_CONTENT = {
    greeting: 'Hey there! 🖐️',
    introduction:
        'I’m Duc Thanh, a creative frontend developer, crafting immersive and intuitive web experiences.',
    description:
        'I’m currently helping businesses bring their visions to life through interactive digital solutions.',
    resumeLinkText: 'Download Resume',
    resumeLink: '/resume.pdf'
};

export const PROJECTS = [
    {
        name: 'Agricultural Supply Distribution Management Software – Enterprise Graduation Project',
        description: 'Stock Management and Supply Chain System for Resellers',
        image: projects1,
        link: 'https://github.com/GinTee7/HR-Management'
    },
    {
        name: 'Human Detection and Face ID-Based Attendance System – Graduation Project',
        description:
            'Integrating AI-Based Human Detection and Facial Recognition',
        image: projects2,
        link: 'https://github.com/HanShinVN/chu_he_nhung_nguoi_ban'
    },
    {
        name: 'Building a website to support creating and taking quizzes ',
        description:
            'Website to register. Admin can managament Users and create Quiz',
        image: projects3,
        link: 'https://github.com/Ducbii4202/study-react'
    },
    {
        name: 'Resell event tickets- Class Project',
        description:
            'A website that facilitates the easy and fast resale of tickets while they are still valid.',
        image: projects4,
        link: 'https://github.com/DatVX02/SWD392--ChienNV33'
    },
    {
        name: 'SimpleMovieWebsite- Coursera Project',
        description: 'Website to watch movies online Technologies:  ',
        image: projects5,
        link: 'https://github.com/Ducbii4202/react-simple-movie'
    },
    {
        name: 'License Real- Class Project',
        description:
            'Website to register for the online B2 drivers license course Technologies',
        image: projects6,
        link: 'https://github.com/Ducbii4202/License-Real'
    }
];

export const ABOUT_CONTENT = {
    paragraphs1: [
        'I am a final-year frontend development student with a strong passion for building modern and user-friendly web applications. Throughout my academic journey, I have worked on various personal and team projects — from single-page websites to more complex systems — with a focus on performance, responsive design, and creating seamless user experiences.     '
    ]
    paragraphs2: [
        'I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.'
    ]
};

export const EXPERIENCES = [
    {
        yearRange: 'January 2024 — April 2024',
        company: ' Amazing Tech Company',
        title: ' Frontend Engineer',
        location: 'District Tan Phu',
        description: [
            'Developed a real-time chat feature using WebSockets, resulting in a 20% increase in user engagement and customer satisfaction',
            'Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.',
            'Driving innovation through continuous improvements in performance and UI/UX design.'
        ]
    }
];

export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
        "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
    email: 'ducbii0402@gmail.com',
    socialLinks: [
        {
            platform: 'Twitter',
            url: 'https://twitter.com/yourprofile',
            ariaLabel: 'Follow me on Twitter',
            icon: 'RiTwitterXFill'
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/Ducbii4202',
            ariaLabel: 'View my GitHub profile',
            icon: 'RiGithubFill'
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/thanh-nguyen0402/',
            ariaLabel: 'Connect with me on LinkedIn',
            icon: 'RiLinkedinFill'
        }
    ],
    footerText: `© ${new Date().getFullYear()} Duc Thanh. All rights reserved.`
};
