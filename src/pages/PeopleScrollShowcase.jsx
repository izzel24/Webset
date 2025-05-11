import React from 'react'
import { motion } from 'framer-motion'

const people = [
  {
    name: "Fitra Abdillah",
    role: "Presiden",
    image: "/fitra.png"
  },
  {
    name: "Rayhan Fayza",
    role: "Wakil Presiden",
    image: "/rayhan.png"
  },
  {
    name: "Syudita Geraldin",
    role: "Sekretaris Kabinet",
    image: "/syudita.png"
  },
  // Tambahkan lainnya...
]

const PeopleScrollShowcase = () => {
  return (
    <div className="relative h-[500vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {people.map((person, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000"
            style={{ zIndex: people.length - index }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.6 }}
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-72 object-contain"
            />
            <h2 className="text-2xl font-bold mt-4">{person.name}</h2>
            <p className="text-gray-500">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PeopleScrollShowcase