import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { CircleUserRound, Menu } from 'lucide-react';
import { FaPaperPlane } from "react-icons/fa";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-between mx-2">
                            <div className="flex items-center gap-4">

                                <Image src="/profile.png" alt="Profile image" width={40} height={40} className="rounded-full w-10 h-10 object-cover object-top" />
                                {/* <CircleUserRound className="w-10 h-10" /> */}

                                <div className="hidden lg:flex flex-col">
                                    <span>Deepak</span>
                                    <span>Software Developer</span>
                                </div>
                            </div>

                            <Sheet>
                                <SheetTrigger>
                                    <div className="flex lg:hidden">
                                        <Menu />
                                    </div>
                                </SheetTrigger>

                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle className="flex mt-10 justify-center">
                                            <div className="flex flex-col text-center">
                                                <span>Deepak</span>
                                                <span>Software Developer</span>
                                            </div>
                                        </SheetTitle>

                                        <SheetDescription className="flex flex-col items-center">
                                            <ul className="flex flex-col mt-10 gap-5 text-lg">
                                                <Link href="#home"><li>Home</li></Link>
                                                <Link href="#about"><li>About</li></Link>
                                                <Link href="#projects"><li>Projects</li></Link>
                                                <Link href="#contact"><li>Contact</li></Link>
                                            </ul>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>

                            <ul className="hidden lg:flex gap-6 mx-auto h-16 items-center">
                                <Link href="#home" scroll={false} className="h-full">
                                    <li className="cursor-pointer h-full flex items-center border-b-[2px] border-transparent hover:border-b-sky-700">Home</li>
                                </Link>
                                <Link href="#about" scroll={false} className="h-full">
                                    <li className="cursor-pointer h-full flex items-center border-b-[2px] border-transparent hover:border-b-sky-700">About</li>
                                </Link>
                                <Link href="#projects" scroll={false} className="h-full">
                                    <li className="cursor-pointer h-full flex items-center border-b-[2px] border-transparent hover:border-b-sky-700">Projects</li>
                                </Link>
                            </ul>

                            <Link href="#contact" scroll={false} className="hidden lg:flex rounded-lg overflow-hidden">
                                <button className="ml-auto hidden lg:flex border-[2px] border-slate-900 px-3 py-2 rounded-lg gap-2 justify-center items-center hover:bg-slate-900 hover:text-white hover:transition-all hover:duration-100"><FaPaperPlane /> Let's talk</button>
                            </Link>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar