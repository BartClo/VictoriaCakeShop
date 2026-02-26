import Image from "next/image";

const galleryImages = [
    {
        src: "/images/torta.png",
        alt: "Torta artesanal de Postres Victoria",
        span: "row-span-1",
    },
    {
        src: "/images/tortaselvanegra.png",
        alt: "Torta Selva Negra - Postres Victoria",
        span: "row-span-2",
    },
    {
        src: "/images/milkshake.png",
        alt: "Milkshake cremoso de Postres Victoria",
        span: "row-span-1",
    },
    {
        src: "/images/croissant.png",
        alt: "Croissant artesanal de Postres Victoria",
        span: "row-span-1",
    },
    {
        src: "/images/sandwich.png",
        alt: "Sándwich artesanal en ciabatta",
        span: "row-span-1",
    },
    {
        src: "/images/hero-cake.png",
        alt: "Pastel artesanal de Postres Victoria",
        span: "row-span-2",
    },
    {
        src: "/images/waffles.png",
        alt: "Waffles de Postres Victoria",
        span: "row-span-1",
    },
];

export default function Gallery() {
    return (
        <section id="galeria" className="py-24 sm:py-32 bg-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#8c6b5d]/[0.02] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 reveal">
                    <span className="inline-block text-[#8c6b5d] font-medium text-sm uppercase tracking-widest mb-4">
                        Galería de Tentaciones
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Síguenos en nuestras{" "}
                        <span className="text-[#8c6b5d] italic">dulzuras</span> diarias
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Cada imagen cuenta una historia de sabor artesanal
                    </p>
                    <div className="w-16 h-[3px] bg-[#8c6b5d] mx-auto mt-8 rounded-full" />
                </div>

                {/* Masonry-style grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4 rounded-3xl overflow-hidden">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className={`reveal-scale stagger-${Math.min(i + 1, 6)} relative ${img.span} overflow-hidden group rounded-2xl`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, 33vw"
                            />
                            {/* Hover overlay with text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#6d4f43]/70 via-[#8c6b5d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                                <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instagram handle */}
                <div className="text-center mt-10 reveal">
                    <a
                        href="https://www.instagram.com/postres.victoriacakeshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/25 hover:scale-105 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Síguenos en @postres.victoriacakeshop
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
