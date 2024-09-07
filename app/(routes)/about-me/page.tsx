"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        Formacion profesional
                    </span>
                </h1>
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;