import { useState } from 'react';

import logo from './assets/images/Logo.svg';
import heroImage from './assets/images/Hero.avif';
import section01Image from './assets/images/Section01.avif';
import section02Image from './assets/images/Section02.avif';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleCollapse1 = () => {
        setIsCollapsed1(!isCollapsed1);
    };

    const toggleCollapse2 = () => {
        setIsCollapsed2(!isCollapsed2);
    };

    const toggleCollapse3 = () => {
        setIsCollapsed3(!isCollapsed3);
    };

    return (
        <>
            <nav className="bg-at-purple p-4">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between ">
                    <div className="block cursor-pointer pb-3 pl-3 font-bold text-white">
                        <img className="w-13" src={logo} alt="AT-logo"></img>
                    </div>
                    <button className="block border-white px-2 py-1 text-white md:hidden" onClick={toggleNavbar}>
                        {isOpen ? '' : <MenuRoundedIcon style={{ fontSize: '3rem' }} />}
                    </button>
                    <div
                        className={`${isOpen ? '' : 'max-md:translate-x-full'} transform transition-transform duration-500 ease-in-out max-md:absolute max-md:left-0 max-md:top-0 max-md:h-full  max-md:w-screen max-md:bg-white max-md:p-5`}
                    >
                        <button
                            onClick={toggleNavbar}
                            className={`absolute right-0 top-0 p-5 ${isOpen ? '' : 'hidden'}`}
                        >
                            <CloseIcon fontSize="large" />
                        </button>
                        <ul className="z-40 items-center justify-center gap-[3vw] md:flex">
                            <li className={`mr-4 max-md:pb-10 ${isOpen ? '' : 'hidden'}`}>
                                <a href="#" className="max-md:text-black  hover:max-md:text-slate-500">
                                    HOME
                                </a>
                            </li>
                            <li className="mr-4 max-md:pb-10">
                                <a href="#" className="max-md:text-black  hover:max-md:text-slate-500 md:text-white">
                                    SERVICES
                                </a>
                            </li>
                            <li className="mr-4 max-md:pb-10">
                                <a href="#" className="max-md:text-black  hover:max-md:text-slate-500 md:text-white">
                                    ABOUT US
                                </a>
                            </li>
                            <li className="mr-4 max-md:pb-10">
                                <a href="#" className="max-md:text-black  hover:max-md:text-slate-500 md:text-white">
                                    CONTACT US
                                </a>
                            </li>
                            <li className="mr-4 max-md:pb-10">
                                <a href="#" className="max-md:text-black  hover:max-md:text-slate-500 md:text-white">
                                    CAREERS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mx-auto max-w-screen-2xl">
                <section className="lg:relative">
                    <div className="Lg:z-0 flex h-full w-full items-center justify-center">
                        <img src={heroImage} alt="Hero Image" />
                    </div>
                    <div className="heroText bg-gradient-to-r from-at-green to-at-blue px-5 pb-8 pt-6 max-md:w-full lg:absolute lg:bottom-[2rem] lg:left-[3rem] lg:z-20 lg:max-w-xl xl:bottom-[2rem] xl:left-[6rem]">
                        <h2 className="mb-5 font-inter text-4xl/9 font-bold tracking-tight text-white">
                            We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                        </h2>
                        <button className="rounded bg-at-orange px-5 py-3 font-inter font-semibold tracking-tight text-white">
                            GET FREE CONSULTATION
                        </button>
                    </div>
                </section>
                <section className="m-5 flex justify-center md:m-8">
                    <div className="flex flex-col items-center md:flex-row">
                        <div className='"md:w-2/5"'>
                            <img className="w-auto" src={section01Image} alt="Web and Mobile app development" />
                        </div>
                        <div className="max-w-xl flex-auto max-md:text-center md:ml-4 md:w-3/5">
                            <div className="mb-5 font-poppins text-3xl/8 font-semibold tracking-normal text-at-purple">
                                Web & Mobile App Development
                            </div>
                            <div className="font-inter text-base font-normal leading-5">
                                Your web and mobile Apps are pieces of the puzzle to grow your business. We use
                                frameworks which tailor content and engagement methods to respond to different intents
                                shown by your potential customers who interact with your business online.
                            </div>
                            <div className="pt-5">
                                <button className="rounded bg-at-orange px-5 py-3 font-inter font-semibold tracking-tight text-white">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-5 flex justify-center md:m-8">
                    <div className="flex flex-col items-center md:flex-row-reverse">
                        <div className='"md:w-2/5"'>
                            <img className="w-auto" src={section02Image} alt="Digital Strategy Consulting" />
                        </div>
                        <div className="max-w-xl flex-auto max-md:text-center md:ml-4 md:w-3/5">
                            <div className="mb-5 font-poppins text-3xl/8 font-semibold tracking-normal text-at-purple">
                                Digital Strategy Consulting
                            </div>
                            <div className="font-inter text-base font-normal leading-5">
                                Your digital strategy should complement the overall marketing strategy of the company.
                                In online marketing, each component will never work in isolation and every business
                                needs a different mix. We provide a clear concept and strategic overview to find the
                                most efficient model for your business.
                            </div>
                            <div className="pt-5">
                                <button className="rounded bg-at-orange px-5 py-3 font-inter font-semibold tracking-tight text-white">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-12 ml-5 mr-5 mt-20 justify-center md:m-8">
                    <h2 className="mb-5 text-center font-poppins text-3xl/8 font-semibold tracking-normal text-at-purple">
                        Frequently asked questions
                    </h2>
                    <div className="mx-auto mb-4 w-full max-w-4xl rounded-lg bg-at-purple-light p-4">
                        <button
                            className="flex w-full items-center justify-between rounded-md p-2"
                            onClick={toggleCollapse1}
                        >
                            <span
                                className={`text-left font-inter text-xl font-medium ${isCollapsed1 ? '' : 'text-at-purple'}`}
                            >
                                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            </span>
                            <span className="text-gray-600">
                                {isCollapsed1 ? (
                                    <AddRoundedIcon fontSize="large" />
                                ) : (
                                    <RemoveRoundedIcon fontSize="large" />
                                )}
                            </span>
                        </button>
                        {!isCollapsed1 && (
                            <div className="mt-2">
                                <p className="font-inter font-normal leading-7 text-at-grey">
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.
                                    Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus
                                    sagittis tortor integer.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mx-auto mb-4 w-full max-w-4xl rounded-lg bg-at-purple-light p-4">
                        <button
                            className="flex w-full items-center justify-between rounded-md p-2"
                            onClick={toggleCollapse2}
                        >
                            <span
                                className={`text-left font-inter text-xl  font-medium ${isCollapsed2 ? '' : 'text-at-purple'}`}
                            >
                                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            </span>
                            <span className="text-gray-600">
                                {isCollapsed2 ? (
                                    <AddRoundedIcon fontSize="large" />
                                ) : (
                                    <RemoveRoundedIcon fontSize="large" />
                                )}
                            </span>
                        </button>
                        {!isCollapsed2 && (
                            <div className="mt-2">
                                <p className="font-inter font-normal leading-7 text-at-grey">
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.
                                    Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus
                                    sagittis tortor integer.
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="mx-auto mb-4 w-full max-w-4xl rounded-lg bg-at-purple-light p-4">
                        <button
                            className="flex w-full items-center justify-between rounded-md p-2"
                            onClick={toggleCollapse3}
                        >
                            <span
                                className={`text-left font-inter text-xl font-medium ${isCollapsed3 ? '' : 'text-at-purple'}`}
                            >
                                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            </span>
                            <span className="text-gray-600">
                                {isCollapsed3 ? (
                                    <AddRoundedIcon fontSize="large" />
                                ) : (
                                    <RemoveRoundedIcon fontSize="large" />
                                )}
                            </span>
                        </button>
                        {!isCollapsed3 && (
                            <div className="mt-2">
                                <p className="font-inter font-normal leading-7 text-at-grey">
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum.
                                    Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus
                                    sagittis tortor integer.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <footer className="bg-at-purple pt-10">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="ml-5 mr-5 justify-center text-white md:ml-8 md:mr-8 lg:flex lg:flex-row">
                        <div className="lg:basis-2/4 xl:basis-3/5">
                            <div>
                                <img src={logo} alt="AT Digital" />
                            </div>
                            <div className="mb-10 mt-5">
                                <p className="max-w-md font-lato text-base font-light leading-5">
                                    Your goal is our target. Not anything in between. We use online marketing platforms
                                    and tools to achieve single objective - your business results.
                                </p>
                            </div>
                        </div>
                        <div className="md:flex md:flex-row lg:basis-2/4 xl:basis-2/5">
                            <div className="pb-10 md:mr-28">
                                <h3 className="mb-2 font-inter text-xl font-semibold">Our Technologies</h3>
                                <ul className="font-inter text-sm font-normal leading-7">
                                    <li className="cursor-pointer">ReactJS</li>
                                    <li className="cursor-pointer">Gatsby</li>
                                    <li className="cursor-pointer">NextJS</li>
                                    <li className="cursor-pointer">NodeJS</li>
                                </ul>
                            </div>
                            <div className="pb-10">
                                <h3 className="mb-2 font-inter text-xl font-semibold">Our Services</h3>
                                <ul className="font-inter text-sm font-normal leading-7">
                                    <li className="cursor-pointer">Social Media Marketing</li>
                                    <li className="cursor-pointer">Web & Mobile App Development</li>
                                    <li className="cursor-pointer">Data and Analytics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        <div className="mx-auto mb-2 max-w-xl justify-center border-t border-white"></div>
                        <div className="mx-auto flex flex-row justify-center pb-4 font-inter text-sm font-light leading-5">
                            <p className="mr-2 cursor-pointer">Privacy Policy</p>
                            <p className="mr-2">|</p>
                            <p className="cursor-pointer">Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
