import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";
import people5 from "../assets/people5.png";
import people6 from "../assets/people6.png";
import people7 from "../assets/people7.png";
import people8 from "../assets/people8.png";
import people9 from "../assets/people9.png";
import people10 from "../assets/people10.png";
import people11 from "../assets/people11.png";
import people12 from "../assets/people12.png";
import people13 from "../assets/people13.png";
import people14 from "../assets/people14.png";


// import person3 from "../assets/person3.png";
// import person4 from "../assets/person4.png";
// import person5 from "../assets/person5.png";
// import person6 from "../assets/person6.png";
// import person7 from "../assets/person7.png";
// import person8 from "../assets/person8.png";
// import person9 from "../assets/person9.png";
// import person10 from "../assets/person10.png";
// import person11 from "../assets/person11.png";
// import person12 from "../assets/person12.png";
// import person13 from "../assets/person13.png";
// import person14 from "../assets/person14.png";
// import person15 from "../assets/person15.png";
// import person16 from "../assets/person16.png";
// import person17 from "../assets/person17.png";
// import person18 from "../assets/person18.png";
// import person19 from "../assets/person19.png";
// import person20 from "../assets/person20.png";
// import person21 from "../assets/person21.png";
// import person22 from "../assets/person22.png";
// import person23 from "../assets/person23.png";
// import person24 from "../assets/person24.png";
// import person25 from "../assets/person25.png";
// import person26 from "../assets/person26.png";
// import person27 from "../assets/person27.png";
// import person28 from "../assets/person28.png";
// import person29 from "../assets/person29.png";
// import person30 from "../assets/person30.png";
// import person31 from "../assets/person31.png";
// import person32 from "../assets/person32.png";
// import person33 from "../assets/person33.png";
// import person34 from "../assets/person34.png";
// import person35 from "../assets/person35.png";
// import person36 from "../assets/person36.png";
// import person37 from "../assets/person37.png";
// import person38 from "../assets/person38.png";
// import person39 from "../assets/person39.png";
// import person40 from "../assets/person40.png";
// import person41 from "../assets/person41.png";
// import person42 from "../assets/person42.png";
// import person43 from "../assets/person43.png";
// import person44 from "../assets/person44.png";
// import person45 from "../assets/person45.png";
// import person46 from "../assets/person46.png";
// import person47 from "../assets/person47.png";
// import person48 from "../assets/person48.png";
// import person49 from "../assets/person49.png";
// import person50 from "../assets/person50.png";
// import person51 from "../assets/person51.png";
// import person52 from "../assets/person52.png";

const groupedImages = [
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501976/person1_jix2jd.png",
      name: "Fitra Abdillah",
      role: "Presiden",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501976/person2_x2x8ct.png",
      name: "Rayhan Fayza",
      role: "Wakil Presiden",
      major: "Administrasi Bisnis 2022",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501975/person3_gfxxcl.png",
      name: "Syadita Geroldin",
      role: "Sekretaris Kabinet",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501977/person4_yfarb5.png",
      name: "Marcellina Antia",
      role: "Deputi Kesekretariatan Eksternal",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501974/person5_qqrswd.png",
      name: "Syilvawan Maulana",
      role: "Deputi Kesekretariatan Internal",
      major: "Administrasi Bisnis 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501974/person6_evrev5.png",
      name: "Desika Putri",
      role: "Bendahara Kabinet",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501979/person7_kkl4x4.png",
      name: "Muhammad Handoko",
      role: "Deputi Keuangan Eksternal",
      major: "Perpajakan 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501974/person8_adid3z.png",
      name: "Khansa Afifah",
      role: "Deputi Keuangan Internal",
      major: "Administrasi Bisnis 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501978/person9_difeql.png",
      name: "Henri Vannes",
      role: "Kepala Satuan Pendayagunaan Aparatur dan Reformasi Organisasi",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501980/person10_yatvoq.png",
      name: "Ibni Miftah",
      role: "Wakil Kepala Satuan Pendayagunaan Aparatur dan Reformasi Organisasi",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501996/person11_atubt9.png",
      name: "Nada Nisrina",
      role: "Kepala Divisi Pengawasan dan Peningkatan Kapasitas Aparatur",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501992/person12_wl0vzn.png",
      name: "Azzahra Karimah",
      role: "Kepala Divisi Jaminan Mutu dan Reformasi Organisasi",
      major: "Administrasi Publik 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501968/person13_wgdcc8.png",
      name: "Davina Nasywa",
      role: "Kepala Biro Desain Komunikasi Visual",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501994/person14_fqmzki.png",
      name: "Daniel Rudolf",
      role: "Wakil Kepala Biro Desain Komunikasi Visual",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person15_vhqkr8.png",
      name: "Maulana Abdan",
      role: "Kepala Bagian Visual Kreatif",
      major: "Administrasi Publik 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501995/person16_hroccq.png",
      name: "Syafiq Sofiyullah",
      role: "Kepala Bagian Konten Digital",
      major: "Administrasi Bisnis 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501968/person17_qvalih.png",
      name: "Daffa Novian",
      role: "Kepala Biro Ekonomi Kreatif",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501968/person18_nzjr18.png",
      name: "Affina Mustika",
      role: "Wakil Kepala Biro Ekonomi Kreatif",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501995/person19_jwcaw6.png",
      name: "Khairi Yahya",
      role: "Kepala Bagian Pengembangan Bisnis dan Produk Kreatif",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501996/person20_hontmz.png",
      name: "Masayu Diva",
      role: "Kepala Bagian Kemitraan dan Pemasaran Digital",
      major: "Administrasi Publik 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501978/person21_g8ybeo.png",
      name: "Nurfathur Rohman",
      role: "Menteri Agama",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501970/person22_e9ggjd.png",
      name: "Elizabeth Pascalia",
      role: "Wakil Menteri Agama",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501995/person23_u0m7rd.png",
      name: "Tyo Hydro",
      role: "Direktorat Jenderal Kajian dan Toleransi",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501970/person24_vipbxc.png",
      name: "Khaira Ajeng",
      role: "Direktorat Jenderal Kerukunan Umat Beragama",
      major: "Administrasi Publik 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501998/person25_sjhjjs.png",
      name: "Iqbal Noeryazid",
      role: "Menteri Advokasi dan Kesejahteraan Mahasiswa",
      major: "Ilmu Perpustakaan 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person26_vvjyg1.png",
      name: "Aissyah Rekso",
      role: "Wakil Menteri Advokasi dan Kesejahteraan Mahasiswa",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501971/person27_jfie5j.png",
      name: "Alfina Putri",
      role: "Direktorat Jenderal Advokasi",
      major: "Administrasi Publik 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748502007/person28_ayv9vk.png",
      name: "Naomy Mutiara",
      role: "Direktorat Jenderal Kesejahteraan Mahasiswa",
      major: "Perpajakan 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748502007/person29_ac3uad.png",
      name: "Raden Wahyu",
      role: "Menteri Kajian dan Aksi Strategis",
      major: "Perpajakan 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501971/person30_dorm9k.png",
      name: "Dava Nuprehan",
      role: "Wakil Menteri Kajian dan Aksi Strategis",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748502007/person31_tudcp1.png",
      name: "Eberhard Emmanuel",
      role: "Direktorat Jenderal Aksi dan Propaganda",
      major: "Perpajakan 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748502008/person32_nowgoe.png",
      name: "Haidar Tsaqib",
      role: "Direktorat Jenderal Kajian dan Pencerdasan Isu",
      major: "Administrasi Publik 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501972/person33_fgiiop.png",
      name: "Putri Maharani",
      role: "Menteri Pemberdayaan Mahasiswa",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501973/person34_gwqqpi.png",
      name: "Rifki Adha",
      role: "Wakil Menteri Pemberdayaan Mahasiswa",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person35_url6xo.png",
      name: "Lazuardi Adzikri",
      role: "Direktorat Jenderal Pengembangan Sumberdaya Mahasiswa",
      major: "Administrasi Publik 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person36_ibqlgn.png",
      name: "Saliha Ayesha",
      role: "Direktorat Jenderal Seni Budaya",
      major: "Administrasi Bisnis 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person37_feeljc.png",
      name: "Riza Putra",
      role: "Menteri Sosial Masyarakat",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501964/person38_akkurw.png",
      name: "Daffa Anggita",
      role: "Wakil Menteri Sosial Masyarakat",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501966/person39_sgjb7j.png",
      name: "Gracia Melvina",
      role: "Direktorat Jenderal Pemberdayaan Masyarakat",
      major: "Perpajakan 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person40_zfv2ri.png",
      name: "Ikhsan Maulana",
      role: "Direktorat Jenderal Lingkungan Hidup",
      major: "Administrasi Pendidikan 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person41_k9djyo.png",
      name: "Caroline Janice",
      role: "Menteri Dalam dan Luar Negeri",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person42_msifbq.png",
      name: "Rama Narendra",
      role: "Wakil Menteri Dalam dan Luar Negeri",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501963/person43_vhqppf.png",
      name: "Rania Azzahra",
      role: "Direktorat Jenderal Dalam Negeri",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501966/person44_wz2a9n.png",
      name: "Ebenhaezer Yobel",
      role: "Direktorat Jenderal Luar Negeri",
      major: "Administrasi Bisnis 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501976/person45_uxug0r.png",
      name: "Michael",
      role: "Menteri Riset dan Inovasi Karya",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501966/person46_c220oy.png",
      name: "Ni Putu Febi",
      role: "Wakil Menteri Riset dan Inovasi Karya",
      major: "Administrasi Publik 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501976/person47_pvpbwt.png",
      name: "Tariza Putri",
      role: "Direktorat Jenderal Riset dan Prestasi",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501969/person48_y0zb9i.png",
      name: "Bellivia Atali",
      role: "Direktorat Jenderal Inovasi dan Karya",
      major: "Administrasi Publik 2023",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person49_rsavdk.png",
      name: "Athaya Raissa",
      role: "Menteri Pengarusutamaan Gender",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person50_bbepqk.png",
      name: "Nessa Athalia",
      role: "Wakil Menteri Pengarusutamaan Gender",
      major: "Administrasi Bisnis 2022",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501990/person51_gw8jgn.png",
      name: "Yasmina Putri",
      role: "Direktorat Jenderal Kesetaraan Bersama",
      major: "Administrasi Bisnis 2023",
    },
    {
      src: "https://res.cloudinary.com/diofvdwig/image/upload/v1748501980/person52_jjfcnt.png",
      name: "Queen Bilqis",
      role: "Direktorat Jenderal Perlindungan dan Pendampingan",
      major: "Administrasi Publik 2023",
    },
  ],
];

const topIcons = [
  people1,
  people2,
  people3,
  people4,
  people5,
  people6,
  people7,
];
const bottomIcons = [people8, people9, people10, people11, people12, people13, people14];

const PeopleScrollShowcase = () => {
  const containerRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const totalSteps = groupedImages.length;

  // Preload images for a specific section
  const preloadImagesForSection = (sectionIndex) => {
    if (!groupedImages[sectionIndex] || preloadedImages.has(sectionIndex)) return;
    
    const newPreloadedImages = new Set(preloadedImages);
    newPreloadedImages.add(sectionIndex);
    setPreloadedImages(newPreloadedImages);

    groupedImages[sectionIndex].forEach(person => {
      const img = new Image();
      img.src = person.src;
    });
  };

  // Preload adjacent sections
  useEffect(() => {
    // Preload current section if not already loaded
    preloadImagesForSection(activeGroup);
    
    // Preload next section
    if (activeGroup < totalSteps - 1) {
      preloadImagesForSection(activeGroup + 1);
    }
    
    // Preload previous section
    if (activeGroup > 0) {
      preloadImagesForSection(activeGroup - 1);
    }
  }, [activeGroup]);

  const scrollToSection = (index) => {
    const stepHeight = window.innerHeight;
    const targetScroll = index * stepHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const stepHeight = window.innerHeight;
      
      const index = Math.min(
        totalSteps - 1,
        Math.max(0, Math.round(scrollY / stepHeight))
      );
      
      if (index !== activeGroup) {
        setActiveGroup(index);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeGroup, totalSteps]);

  const getGridClass = (count) => {
    if (count === 3) return "grid-cols-2 sm:grid-cols-3 grid-rows-2 sm:grid-rows-1";
    if (count === 4) return "grid-cols-2 sm:grid-cols-4 grid-rows-2 sm:grid-rows-1";
    if (count === 2) return "grid-cols-2 grid-rows-2 sm:grid-rows-1 ";
    return "grid-cols-1";
  };

  return (
    <div
      ref={containerRef}
      className="relative md:mb-84 mb-48"
      style={{ height: `${totalSteps * 100}dvh` }}
    >
      <div className="sticky top-0 h-screen bg-white flex flex-col justify-center gap-10 items-center overflow-hidden p-5">
        <h1 className="text-4xl z-30 font-EB-Garamond font-semibold italic">
          People Behind
        </h1>
        <div className="flex sm:gap-10 gap-5 mb-auto z-20 justify-center items-center">
          {topIcons.map((icon, i) => (
            <div
              key={i}
              onClick={() => scrollToSection(i)}
              className={`transition-all duration-300 cursor-pointer ${
                i === activeGroup
                  ? "scale-125"
                  : "hover:scale-125"
              }`}
            >
              <img
                src={icon}
                alt=""
                loading="lazy"
                className={`transition-all duration-300 sm:w-[35px] w-[25px] ${
                  i === activeGroup ? "filter brightness-0" : ""
                }`}
              />
            </div>
          ))}
        </div>

        <div className="relative w-full flex justify-center items-center h-[80%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup}
              initial={{ opacity: 1, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 0,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
                when: "beforeChildren",
              }}
              className={`absolute grid items-center gap-5 sm:gap-10 justify-items-center ${getGridClass(
                groupedImages[activeGroup].length
              )}`}
            >
              {groupedImages[activeGroup].map((person, i) => {
                let extraClass = "";
                if (groupedImages[activeGroup].length === 3 && i === 0) {
                  extraClass = "col-span-2 sm:col-span-1 flex justify-center";
                }
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center ${extraClass}`}
                  >
                    <img
                      src={person.src}
                      alt={person.name}
                      loading="lazy"
                      decoding="async"
                      className="lg:h-[200px] h-[135px] object-contain rounded-xl"
                    />
                    <div className="mt-2 flex flex-col text-center">
                      <h2 className="sm:text-xl text-lg font-semibold italic font-EB-Garamond">
                        {person.name}
                      </h2>
                      <div className="flex flex-col gap-1">
                        <p className="sm:text-sm text-xs font-Bricolage sm:w-[250px] w-[150px] font-extralight">
                          {person.role}
                        </p>
                        <p className="sm:text-xs text-[8px] bg-black sm:w-[180px] w-[125px] self-center text-white font-Bricolage font-extralight py-[1px] px-2">
                          {person.major}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex sm:gap-10 gap-5 mt-auto justify-center items-center z-20">
          {bottomIcons.map((icon, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(index + bottomIcons.length)}
              className={`text-4xl transition-all duration-300 cursor-pointer ${
                index + bottomIcons.length === activeGroup
                  ? "scale-125"
                  : "hover:scale-125"
              }`}
            >
             <img
                src={icon}
                alt=""
                loading="lazy"
                className={`transition-all duration-300 sm:w-[35px] w-[25px] ${
                  index + 7 === activeGroup ? "filter brightness-0" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PeopleScrollShowcase;
