import { motion ,useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

export default function Cards({ title, content, color}) {

    const controls = useAnimation();
    const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            rotateX: 0,
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 80 },
          });
        } else {
          controls.start({
            rotateX: -90,
            opacity: 0,
            y: 100,
            transition: { duration: 0.5 },
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ rotateX: -90, opacity: 0, y: 100 }}
      className='z-99 min-h-[450px] h-[500px] sm:w-[300px] md:w-[325px] lg:w-[350px] xl:w-[400px] flex items-center justify-start lg:sticky lg:top-0'
    >
      <div className='w-full h-full bg-[#FEFEFE] border-[3px] rounded-[52px] flex flex-col gap-3'>
        <div
          className='h-[75%] w-full rounded-[47px] border-[2px] border-b-3 text-center p-5 flex justify-center items-center'
          style={{ backgroundColor: color }}
        >
          <h1 className='font-Bricolage text-2xl'>{title}</h1>
        </div>
        <p className='text-center text-xl m-1 font-Bricolage font-extrabold'>{content}</p>
      </div>
    </motion.div>
  );
}

