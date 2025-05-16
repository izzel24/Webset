import React, { useState, useEffect } from 'react'
import hamburger from "../assets/Group 10.svg"
import close from "../assets/Group 10.svg"
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ open }) {
    const [isOpen, setIsopen] = useState(open)

    const handleOPen = () => {
        setIsopen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    const menuItems = ["Home", "About", "People", "Program", "Partner", "News", "Service", "Connect Us"]

    const containerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "100vh",
            transition: {
                staggerChildren: 0.05,
                when: "beforeChildren"
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                when: "afterChildren"
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    return (
        <>
            <button
                onClick={handleOPen}
                className='fixed top-5 left-5 z-[999] cursor-pointer p-2'
            >
                <img src={isOpen ? close : hamburger} alt="menu" className='w-7' />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className='fixed top-0 left-0 w-screen h-screen bg-white z-[998] flex items-center justify-center overflow-hidden'
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                    >
                        <div className='flex flex-col items-center w-full max-w-md px-5'>
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className='w-full'
                                >
                                    <Link
                                        className='py-4 block text-center hover:bg-[#EAEAEA] font-Bricolage font-semibold'
                                        onClick={() => setIsopen(false)}
                                        to={`/${item.toLowerCase()}`}
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
