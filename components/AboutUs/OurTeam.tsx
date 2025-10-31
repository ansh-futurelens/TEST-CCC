import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
interface Member {
    name: string;
    role: string;
    image: string;
    description: string;
}

interface Section {
    id: string;
    title: string;
    members: Member[];
}
const teamData: Section[] = [
    {
        id: "leadership",
        title: "Leadership",
        members: [
            {
                name: "Sree Mitra",
                role: "Co-Founder & CEO",
                image: "/media/about_us/Sree.png",
                description:
                    "Drawing on an extensive business background of more than 25 years, Sree founded Q Studio to offer a groundbreaking paradigm that transforms how we master our thoughts, emotions, and actions. Her firsthand experience on the criticality of mental fitness on performance drives her mission to make mental fitness accessible to everyone.",
            },
            {
                name: "Krish Krithivasan",
                role: "Co-Founder & CTO",
                image: "/media/about_us/krish.png",
                description:
                    "Krish brings Q Studio's vision to life by finding innovative ways for everyone to access the knowledge, connect with the concepts, and firmly believe that mental excellence is achievable. From changing the lives of farmers in rural India to architecting complex systems, Krish believes in harnessing the potential of technology to bring real change in the world. He brings over 25 years of experience as a business first technologist working with some of the largest organizations across the world.",
            },
        ],
    },
    {
        id: "advisors",
        title: "Board of Advisors",
        members: [
            {
                name: "Mike Portegello",
                role: "Advisor - Strategy & Growth",
                image: "/media/about_us/mike.png",
                description:
                    "Mike is a global business executive and financial expert with over 37 years of experience. He is widely recognized as advisor to high-growth organizations and has cultivated a vast network within the entrepreneurial ecosystem. He advises the founders of Q Studio on growth strategy, GTM plans, and capital sourcing.",
            },
            {
                name: "Steven Hickman",
                role: "Advisor - Program & Content",
                image: "/media/about_us/steven.png",
                description:
                    "Steve is a renowned Clinical Psychologist and expert in mindfulness and self-compassion. He has been instrumental in conceptualizing how Q Studio can deliver on its mission and purpose. His extensive experience in psychology coupled with holistic practices have been an essential part of Q Studio's concepts and content structure.",
            },
        ],
    },
    {
        id: "team",
        title: "Team",
        members: [
            {
                name: "Nachiket Ghelani",
                role: "Digital & Technology Leader",
                image: "/media/about_us/Nachiket_bio.jpg",
                description:
                    "Nachiket leads Q Studio’s software development team and is instrumental in developing innovative digital solutions. Nachiket is a seasoned technologist with more than 9 years of experience building applications across various platforms. As a mindfulness practitioner in his personal life, Nachiket understands the transformative benefits of a trained mind and is committed to Q Studio’s mission.",
            },
            {
                name: "Breanna Kinney-Orr",
                role: "Research & Content Lead",
                image: "/media/about_us/Breanna.png",
                description:
                    "Drawing upon 15+ years in emergency and neurotrauma nursing, Breanna brings her passion for the fascinating ways our brains work. At Q Studio, she works with a team of experts and copywriters to explore the science behind it all, and create engaging content full of practical ways to boost mental fitness. ",
            },
            {
                name: "Mominah Ambreen",
                role: "Senior Researcher & Copywriter",
                image: "/media/about_us/Mominah.png",
                description:
                    "Mominah is a Clinical Psychologist passionate about making mental health support accessible and impactful. She combines her clinical and research expertise with a love for writing to curate insightful, engaging content that educates and supports others with their mental wellbeing. ",
            },
            {
                name: "Odawni Palmer",
                role: "Researcher & Copywriter",
                image: "/media/about_us/odawni.JPG",
                description:
                    "Odawni is a psychology researcher, writer, user experience designer, and mental health advocate. The breadth of her writing centers on mental health awareness and exploring the depth of the human experience. She sees words as both a tool for transformation and a bridge to self-awareness.  ",
            },
            {
                name: "Hiral Dudhat",
                role: "Software Engineer",
                image: "/media/about_us/hiral.png",
                description:
                    "Hiral is an integral part of Q Studio’s technology team and supports various initiatives. As a software engineer, Hiral is passionate about building user-centric applications that deliver results.  Hiral works closely with Q Studio’s technology leadership on solving some of the newest challenges.",
            },
            {
                name: "Ayushi Limbasiya",
                role: "Software Engineer",
                image: "/media/about_us/ayushi.png",
                description:
                    "Ayushi is a software engineer who believes in bringing ideas to life with innovative and user-friendly solutions. Ayushi is a quick learner with a passion for building engaging and functional applications that make an impact. ",
            },
            {
                name: "Rutu Gabani",
                role: "Software Engineer",
                image: "/media/about_us/rutu.png",
                description:
                    "Rutu is a developer on Q Studio's technology team. Rutu navigates the evolving tech landscape with agility and a drive for continuous learning. She is fueled by a passion for scalable, future-proof solutions.",
            },
            {
                name: "Chris",
                role: "Independent Concept Artist",
                image: "/media/about_us/chris.png",
                description:
                    "Chris is an accomplished artist having worked as graphic designer, freelance illustrator working with renowned brands. Chris is also an adjunct professor in the College of Art + Design at RIT. Chris the master mind behind creating the stunning art that has become Q Studio's signature.  ",
            },
        ],
    }, {
        id: "qguides",
        title: "Q Guides",
        members: [
            {
                name: "Amy Noelle",
                role: "Q Guide",
                image: "/media/about_us/Amy_pic.png",
                description:
                    "Amy is a mindfulness and self-compassion coach. Amy brings her experience working with corporations developing programs to cultivate the optimal conditions for performance and mental wellbeing. She also advises the Q Studio team on design elements, ideating on content, and curating the learning experience.",
            },
            {
                name: "Alec Arons",
                role: "Q Guide",
                image: "/media/about_us/Alec_HS.png",
                description:
                    "Alec Arons is an experienced executive and coach with a passion for helping clients achieve their personal and professional goals. With over 35 years of experience as a senior leader, he understands the unique challenges that high performers and senior executives face and is committed to helping them unlock their full potential.",
            },
            {
                name: "Bernadette Cabrera",
                role: "Q Guide",
                image: "/media/about_us/Bernadette_HS.png",
                description:
                    "Bernadette is committed to inspiring leaders to ﬁnd their unique strength, talent and voice, enabling them to bring ‘their whole selves’ to their professional and personal lives. As a coach, she is known to bring warmth, sincerity and directness that enables her to engage effectively and relate authentically with professionals at all levels.",
            },
        ],
    },
];

const OurTeam: React.FC = () => {
    const [openSections, setOpenSections] = useState<string[]>(["leadership"]);

    const toggleSection = (id: string) => {
        setOpenSections((prev) =>
            prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full bg-[#F9F9F9]">
            <div className="container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0E4C45] mb-12">
                    Meet our team
                </h2>

                <div className="relative border-l-2 border-gray-300 pl-6">
                    {teamData.map((section) => (
                        <div key={section.id} className="mb-10">
                            <div
                                className="flex items-center justify-between cursor-pointer hover:bg-gray-bg transition-all duration-300 p-3 rounded-lg"
                                onClick={() => toggleSection(section.id)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-[#0E4C45] rounded-full relative right-[43px]" />
                                    <h3 className="text-3xl font-bold text-[#0E4C45]">
                                        {section.title}
                                    </h3>
                                </div>
                                <GoChevronDown
                                    className={`text-[#0E4C45] text-2xl transform transition-transform duration-300 ${openSections.includes(section.id) ? "rotate-180" : "rotate-0"}`}
                                />
                            </div>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${openSections.includes(section.id)
                                    ? "max-h-[2000px] opacity-100 mt-6"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {section.members.map((member, i) => (
                                        <div
                                            key={i}
                                            className="bg-white rounded-2xl p-8 transition duration-300 flex flex-col items-center justify-start h-full"
                                        >
                                            <div className="flex items-center justify-center gap-6 mb-6 w-full">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-28 h-28 rounded-full object-cover  transition-transform duration-300"
                                                />
                                                <div className="flex flex-col justify-center">
                                                    <h4 className="text-2xl font-normal text-teal-900 text-center sm:text-left">
                                                        {member.name}
                                                    </h4>
                                                    <h4 className="text-[#C34C3A] text-lg font-normal text-center sm:text-left">
                                                        {member.role}
                                                    </h4>
                                                </div>
                                            </div>
                                            <h3 className="text-gray-700 text-lg leading-relaxed">
                                                {member.description}
                                            </h3>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
