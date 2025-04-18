import projects1 from '../assets/projects1.webp';
import projects2 from '../assets/projects2.webp';
import projects3 from '../assets/projects3.webp';
import projects4 from '../assets/projects4.webp';
import projects5 from '../assets/projects5.webp';
import projects6 from '../assets/projects6.webp';

import person1 from '../assets/person1.webp';
import person2 from '../assets/person2.webp';
import person3 from '../assets/person3.webp';
import person4 from '../assets/person4.webp';
import person5 from '../assets/person5.webp';
import person6 from '../assets/person6.webp';

export const LINKS = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
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
    paragraphs: [
        'I am a final-year frontend development student with a strong passion for building modern and user-friendly web applications. Throughout my academic journey, I have worked on various personal and team projects — from single-page websites to more complex systems — with a focus on performance, responsive design, and creating seamless user experiences.',
        'I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.'
    ]
};

export const EXPERIENCES = [
    {
        yearRange: 'January 2024 — April 2024',
        title: ' Frontend Engineer',
        location: 'District Tan Phu',
        description: [
            'Developed a real-time chat feature using WebSockets, resulting in a 20% increase in user engagement and customer satisfaction',
            'Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.',
            'Driving innovation through continuous improvements in performance and UI/UX design.'
        ]
    }
];

export const TESTIMONIALS = [
    {
        name: 'Sarah Johnson',
        title: 'Frontend Engineer, Google',
        feedback:
            "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
        image: person1
    },
    {
        name: 'Michael Anderson',
        title: 'Product Manager, Facebook',
        feedback:
            "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
        image: person2
    },
    {
        name: 'Emily Davis',
        title: 'Lead Designer, Amazon',
        feedback:
            'Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.',
        image: person3
    },
    {
        name: 'David Lee',
        title: 'Senior Developer, Microsoft',
        feedback:
            "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
        image: person4
    },
    {
        name: 'Laura Martinez',
        title: 'CTO, Shopify',
        feedback:
            'Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.',
        image: person5
    },
    {
        name: 'Chris Brown',
        title: 'Co-founder, Stripe',
        feedback:
            'Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.',
        image: person6
    }
];

export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
        "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
    email: 'ducbii0402@gmail.com',
    socialLinks: [
        // {
        //     platform: 'Twitter',
        //     url: 'https://twitter.com/yourprofile',
        //     ariaLabel: 'Follow me on Twitter',
        //     icon: 'RiTwitterXFill'
        // },
        {
            platform: 'GitHub',
            url: 'https://github.com/Ducbii4202',
            ariaLabel: 'View my GitHub profile',
            icon: 'RiGithubFill'
        },
        {
            platform: 'LinkedIn',
            url: 'www.linkedin.com/in/thanh-nguyen0402',
            ariaLabel: 'Connect with me on LinkedIn',
            icon: 'RiLinkedinFill'
        }
    ],
    footerText: `© ${new Date().getFullYear()} Duc Thanh. All rights reserved.`
};
