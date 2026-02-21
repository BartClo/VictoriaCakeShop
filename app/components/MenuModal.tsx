"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { useMenuModal } from "../context/MenuModalContext";

const menuImages = [
    {
        src: "/images/menu1.png",
        alt: "Menú — Línea Tradicional: café, waffles y milkshakes",
    },
    {
        src: "/images/menu2.png",
        alt: "Menú — Línea Tradicional: tortas, muffins y cookies",
    },
    {
        src: "/images/menu3.png",
        alt: "Menú — Sándwiches y Ciabatta artesanal",
    },
    {
        src: "/images/menu4.png",
        alt: "Menú — Línea Sin Culpa: postres keto sin azúcar",
    },
];

const WHATSAPP_URL = "https://wa.me/message/BMO62JS3G7LDN1";

export default function MenuModal() {
    const { isMenuOpen, closeMenu } = useMenuModal();
    const [current, setCurrent] = useState(0);
    const [zoomed, setZoomed] = useState(false);

    const total = menuImages.length;

    const prev = useCallback(() => {
        setZoomed(false);
        setCurrent((c) => (c - 1 + total) % total);
    }, [total]);

    const next = useCallback(() => {
        setZoomed(false);
        setCurrent((c) => (c + 1) % total);
    }, [total]);

    const handleKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (zoomed) setZoomed(false);
                else closeMenu();
            }
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        },
        [zoomed, closeMenu, prev, next]
    );

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("keydown", handleKey);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setCurrent(0);
            setZoomed(false);
        }
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen, handleKey]);

    if (!isMenuOpen) return null;

    /* ── ZOOM MODE ── */
    if (zoomed) {
        return (
            <div
                className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
                onClick={() => setZoomed(false)}
            >
                <button
                    onClick={() => setZoomed(false)}
                    aria-label="Cerrar zoom"
                    className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-200"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none">
                    Clic para cerrar · ESC
                </p>

                {/* Full-screen image */}
                <div
                    className="relative w-full h-full"
                    style={{ maxWidth: "1100px", padding: "56px 16px 40px" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Image
                        src={menuImages[current].src}
                        alt={menuImages[current].alt}
                        fill
                        className="object-contain cursor-zoom-out"
                        onClick={() => setZoomed(false)}
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Navigation in zoom mode */}
                {total > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            aria-label="Anterior"
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            aria-label="Siguiente"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        );
    }

    /* ── CAROUSEL MODE ── */
    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeMenu}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de Postres Victoria"
        >
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
                style={{ maxHeight: "92dvh" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
                    <div>
                        <p className="text-[#8c6b5d] text-xs font-medium uppercase tracking-widest mb-0.5">
                            Postres Victoria
                        </p>
                        <h2 className="font-heading text-2xl font-bold text-gray-900">
                            Nuestro Menú
                        </h2>
                        <p className="text-gray-400 text-xs mt-1">
                            Desliza para ver más · toca la imagen para hacer zoom
                        </p>
                    </div>
                    <button
                        onClick={closeMenu}
                        aria-label="Cerrar menú"
                        className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200 active:scale-95 ml-3"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Image area — FIXED height so it never collapses */}
                <div className="px-6 pt-5 flex-shrink-0">
                    <div
                        className="relative w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100"
                        style={{ height: "460px" }}
                    >
                        <Image
                            key={current}
                            src={menuImages[current].src}
                            alt={menuImages[current].alt}
                            fill
                            className="object-contain cursor-zoom-in"
                            onClick={() => setZoomed(true)}
                            sizes="(max-width: 640px) 92vw, 520px"
                            priority
                        />

                        {/* Zoom badge */}
                        <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            Zoom
                        </div>

                        {/* Left arrow */}
                        {total > 1 && (
                            <button
                                onClick={prev}
                                aria-label="Anterior"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        {/* Right arrow */}
                        {total > 1 && (
                            <button
                                onClick={next}
                                aria-label="Siguiente"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Dots */}
                {total > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-4 pb-3 flex-shrink-0">
                        {menuImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setZoomed(false); setCurrent(i); }}
                                aria-label={`Ir a imagen ${i + 1}`}
                                className={`rounded-full transition-all duration-300 ${i === current
                                        ? "w-6 h-2.5 bg-[#8c6b5d]"
                                        : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* WhatsApp CTA */}
                <div className="px-6 pb-6 pt-1 flex-shrink-0">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-600/30 active:scale-95"
                    >
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Hacer Pedido por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
