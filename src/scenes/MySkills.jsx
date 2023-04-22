import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

    return(
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition= {{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-red">Skills</span>
                        <LineGradient width="w-1/3" />
                        <p className="mt-10 mb-7">
                            Proficiency in client-side and server-side languages, libaries and tools.
                        </p>
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                                before:w-full before:h-full
                                before:border-2 before:border-tan before:z-[-1]"
                        >
                            <img
                                alt="skills"
                                className="z-10"
                                src="assets/skills-image-2.png"
                            />
                        </div>
                    ) : (
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image-2.png"
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
                <motion.div
                    className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition= {{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playerfair font-semibold text-5xl">01</p>
                            <p className="font-playerfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 bg-tan absolute right-0 top-0 z-[-1] h-32"></div>
                    </div>
                    <p className="mt-5">
                        Over 5 years of experience delivering high-performance, scalable projects. Experienced in  managing complex projects from conception to delivery.
                    </p>

                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition= {{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playerfair font-semibold text-5xl">02</p>
                            <p className="font-playerfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 bg-red absolute right-0 top-0 z-[-1] h-32"></div>
                    </div>
                    <p className="mt-5">
                        Adept at taking a holistic view of a project, and are able to see how different pieces of the technology stack fit together to create a cohesive and effective solution.
                    </p>

                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition= {{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                >
                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playerfair font-semibold text-5xl">03</p>
                            <p className="font-playerfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 bg-ruby absolute right-0 top-0 z-[-1] h-32"></div>
                    </div>
                    <p className="mt-5">
                        Passion for pushing the boundaries of what's possible with web technologies. Known for being a creative problem solver
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

export default MySkills