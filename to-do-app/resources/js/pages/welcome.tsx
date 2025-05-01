import Effortless from '@/assets/Effortless.png';
import Focus from '@/assets/Focus.png';
import landingPhoto from '@/assets/landingPagePhoto.png';
import Simple from '@/assets/Simple.png';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const featureCards = [
        {
            img: Effortless,
            alt: 'Effortless Task Creation',
            title: 'Effortless Task Creation',
            desc: 'Quickly add and organize tasks without the clutter. Just click, type, and go.',
        },
        {
            img: Focus,
            alt: 'Stay Focused',
            title: 'Stay Focused',
            desc: 'Declutter your day with a clean, distraction-free interface built for productivity.',
        },
        {
            img: Simple,
            alt: 'Simple and Fast',
            title: 'Simple and Fast',
            desc: 'No confusing buttons or menus—just a straightforward way to manage tasks efficiently.',
        },
    ];

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <div className="flex w-full items-center justify-center lg:grow">
                    <main className="flex w-full max-w-[335px] flex-col-reverse text-[#1b1b18] lg:max-w-5xl lg:flex-row lg:items-center lg:justify-between dark:text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full space-y-4 px-2 text-center md:px-8 lg:w-1/2 lg:text-left"
                        >
                            <h1 className="text-3xl font-bold lg:text-5xl">
                                Organize Your Tasks <span className="text-custom-violet">Like a Pro</span>
                            </h1>
                            <p className="text-justify text-base text-gray-600 dark:text-gray-400">
                                Stay productive and on track with our easy-to-use task manager. Whether you're planning a project or just managing
                                your day, we've got you covered.
                            </p>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="bg-custom-violet hover:bg-custom-light-violet inline-block rounded-sm px-6 py-3 font-medium text-white transition-colors"
                                >
                                    Start your task!
                                </Link>
                            ) : (
                                <Link
                                    href={route('register')}
                                    className="bg-custom-violet hover:bg-custom-light-violet inline-block rounded-sm px-6 py-3 font-medium text-white transition-colors"
                                >
                                    Sign Up Now!
                                </Link>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 flex w-full justify-center lg:mb-0 lg:w-1/2"
                        >
                            <img
                                src={landingPhoto}
                                alt="Landing Page"
                                className="h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-[500px]"
                            />
                        </motion.div>
                    </main>
                </div>

                <section className="mt-12 grid w-full max-w-4xl gap-10 text-center lg:grid-cols-3">
                    {featureCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            <img src={card.img} alt={card.alt} className="h-56 w-56 object-contain" />
                            <h3 className="text-lg font-semibold text-[#1b1b18] dark:text-white">{card.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
                        </motion.div>
                    ))}
                </section>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
