import Image from "next/image";

const galleryImages = [
    {
        src: "/images/torta.png",
        alt: "Torta artesanal de Postres Victoria",
    },
    {
        src: "/images/tortaselvanegra.png",
        alt: "Torta Selva Negra - Postres Victoria",
    },
    {
        src: "/images/milkshake.png",
        alt: "Milkshake cremoso de Postres Victoria",
    },
    {
        src: "/images/sandwich.png",
        alt: "Sándwich artesanal en ciabatta",
    },
    {
        src: "/images/hero-cake.png",
        alt: "Pastel artesanal de Postres Victoria",
    },
    {
        src: "/images/waffles.png",
        alt: "Waffles de Postres Victoria",
    },
];

export default function Gallery() {
    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-[#8c6b5d] font-medium text-sm uppercase tracking-widest mb-4">
                        Galería de Tentaciones
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900">
                        Síguenos en nuestras{" "}
                        <span className="text-[#8c6b5d] italic">dulzuras</span> diarias
                    </h2>
                </div>

                {/* Instagram-style grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-1.5 rounded-2xl overflow-hidden">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative aspect-square overflow-hidden group"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-[#8c6b5d]/0 group-hover:bg-[#8c6b5d]/30 transition-colors duration-500" />
                        </div>
                    ))}
                </div>

                {/* Instagram handle */}
                <div className="text-center mt-8">
                    <a
                        href="https://www.instagram.com/postres.victoriacakeshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-[#8c6b5d] hover:text-[#6d4f43] font-semibold text-base transition-colors duration-300 group"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @postres.victoriacakeshop
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
