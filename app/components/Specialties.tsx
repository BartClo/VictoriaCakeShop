"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/message/BMO62JS3G7LDN1";

const specialties = [
    {
        id: "tradicional",
        title: "Para el Cafecito ☕",
        subtitle: "Línea Tradicional",
        description:
            "Disfruta de nuestras tortas golosas como la Selva Negra, Tres Leches y Oreo. Acompaña con waffles recién hechos y milkshakes cremosos para el momento perfecto.",
        image: "/images/tortaselvanegra.png",
        imageAlt: "Tortas tradicionales y waffles de Postres Victoria",
        tag: "Coffee & Cake",
        tagColor: "bg-amber-50 text-amber-700 border border-amber-200",
    },
    {
        id: "saludable",
        title: "Línea Sin Culpa 🌿",
        subtitle: "Saludable & Keto",
        description:
            "Pastelería sin azúcar y sin harinas refinadas. Prueba nuestro Cheesecake de maracuyá keto o nuestros brownies saludables. Todo el sabor, sin culpa.",
        image: "/images/torta.png",
        imageAlt: "Postres saludables keto sin azúcar de Postres Victoria",
        tag: "Keto Friendly",
        tagColor: "bg-green-50 text-green-700 border border-green-200",
    },
    {
        id: "salado",
        title: "Sándwiches & Ciabatta 🥖",
        subtitle: "Lo Salado",
        description:
            "Para los que prefieren lo salado: nuestros sándwiches de mechada en pan ciabatta artesanal y opciones frescas que te van a encantar.",
        image: "/images/sandwich.png",
        imageAlt: "Sándwich de mechada en ciabatta artesanal",
        tag: "Recién Horneado",
        tagColor: "bg-orange-50 text-orange-700 border border-orange-200",
    },
];

type Specialty = (typeof specialties)[number];

export default function Specialties() {
    const [lightbox, setLightbox] = useState<Specialty | null>(null);

    // Close on Escape key
    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
        },
        []
    );

    useEffect(() => {
        if (lightbox) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [lightbox, handleKey]);

    return (
        <>
            <section
                id="especialidades"
                className="py-28 sm:py-36 bg-[#faf7f3] relative"
            >
                {/* Very subtle warm background texture */}
                <div
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238c6b5d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-20 reveal">
                        <span className="inline-block text-[#8c6b5d] font-medium text-sm uppercase tracking-widest mb-4">
                            Lo mejor de dos mundos
                        </span>
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
                            Nuestras Especialidades
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            Desde tortas irresistibles hasta opciones sin azúcar. En Victoria
                            Cake Shop encontrarás el postre perfecto para cada momento.
                        </p>
                        <div className="w-16 h-[3px] bg-[#8c6b5d] mx-auto mt-8 rounded-full" />
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {specialties.map((item, index) => (
                            <div
                                key={item.id}
                                className={`reveal stagger-${index + 1} group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100/80 hover:-translate-y-2`}
                            >
                                {/* Card Image — large, full-width, clickable */}
                                <button
                                    onClick={() => setLightbox(item)}
                                    className="relative h-72 w-full overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8c6b5d]"
                                    aria-label={`Ver imagen completa de ${item.title}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Very subtle gradient to prevent harsh edge */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                                    {/* "Ver foto" hint on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                />
                                            </svg>
                                            Ver foto
                                        </span>
                                    </div>
                                </button>

                                {/* Card Content */}
                                <div className="p-7">
                                    {/* Badge — now below the image */}
                                    <span
                                        className={`inline-block ${item.tagColor} px-3 py-1 rounded-full text-xs font-semibold mb-3`}
                                    >
                                        {item.tag}
                                    </span>

                                    <h3 className="font-heading text-2xl font-bold text-[#6d4f43] mb-3 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm mb-6">
                                        {item.description}
                                    </p>
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#8c6b5d] hover:text-[#6d4f43] font-semibold text-sm transition-all duration-300 group/link border-b border-[#8c6b5d]/30 hover:border-[#6d4f43] pb-0.5"
                                    >
                                        Consultar disponibilidad
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center reveal">
                        <p className="text-gray-500 mb-6 text-base">
                            ¿No ves lo que buscas? Pregúntanos, hacemos pedidos personalizados.
                        </p>
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#8c6b5d] hover:bg-[#6d4f43] text-white px-9 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#8c6b5d]/30 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Escríbenos por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Lightbox Modal ── */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightbox.imageAlt}
                >
                    <div
                        className="relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
                            aria-label="Cerrar imagen"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            Cerrar
                        </button>

                        {/* Full image */}
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={lightbox.image}
                                alt={lightbox.imageAlt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 800px"
                                priority
                            />
                        </div>

                        {/* Caption */}
                        <div className="mt-4 text-center">
                            <h3 className="font-heading text-white text-xl font-bold">
                                {lightbox.title}
                            </h3>
                            <p className="text-white/60 text-sm mt-1">{lightbox.subtitle}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
