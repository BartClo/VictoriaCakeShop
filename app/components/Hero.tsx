"use client";

import Image from "next/image";
import { useMenuModal } from "../context/MenuModalContext";

const WHATSAPP_URL = "https://wa.me/message/BMO62JS3G7LDN1";

export default function Hero() {
    const { openMenu } = useMenuModal();
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, #f5efe6 0%, #fdfbf7 55%, #f9f4ed 100%)",
            }}
        >
            {/* Subtle dot-texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #8c6b5d18 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Large decorative soft circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-[#8c6b5d]/[0.04]" />
                <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-[#8c6b5d]/[0.04]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#f5ede3]/40 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="hero-fade-in inline-flex items-center gap-2 bg-[#8c6b5d]/10 border border-[#8c6b5d]/20 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#8c6b5d] animate-pulse" />
                            <span className="text-[#8c6b5d] text-sm font-medium">
                                Astorga 618, Rancagua
                            </span>
                        </div>

                        <h1 className="hero-fade-in-delay-1 font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
                            El dulce{" "}
                            <span className="text-[#8c6b5d] italic">equilibrio</span>{" "}
                            en Rancagua
                        </h1>

                        <p className="hero-fade-in-delay-2 text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
                            Pastelería artesanal que combina lo mejor de la{" "}
                            <strong className="text-gray-800">tradición</strong> con una
                            línea{" "}
                            <strong className="text-gray-800">saludable y sin culpa</strong>.
                        </p>

                        <p className="hero-fade-in-delay-2 text-base text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0">
                            Tortas golosas, waffles, milkshakes y nuestra exclusiva línea
                            keto — sin azúcar ni harinas refinadas.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-600/25 hover:scale-105 active:scale-95"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Hacer Pedido por WhatsApp
                            </a>

                            <button
                                onClick={openMenu}
                                className="inline-flex items-center justify-center gap-2 border-2 border-[#8c6b5d] text-[#8c6b5d] hover:bg-[#8c6b5d] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                            >
                                Ver Menú
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="hero-fade-in-delay-3 flex items-center gap-6 mt-10 justify-center lg:justify-start text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#8c6b5d]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Artesanal
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#8c6b5d]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Opciones Keto
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-[#8c6b5d]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Envío Rancagua
                            </div>
                        </div>
                    </div>

                    {/* Hero Image — organic large format */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        {/* Soft decorative glow behind image */}
                        <div className="relative hero-image-entrance">
                            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[40%_60%_55%_45%/45%_55%_60%_40%] bg-[#8c6b5d]/15 blur-2xl scale-95" />
                            {/* Blob-shaped image container */}
                            <div
                                className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] overflow-hidden shadow-2xl shadow-[#8c6b5d]/20"
                                style={{
                                    borderRadius: "40% 60% 55% 45% / 45% 55% 60% 40%",
                                }}
                            >
                                <Image
                                    src="/images/hero-cake.png"
                                    alt="Torta artesanal de Postres Victoria - Pastelería en Rancagua"
                                    fill
                                    className="object-cover scale-110"
                                    priority
                                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 560px"
                                />
                            </div>

                            {/* Floating accent badge */}
                            <div className="float-badge absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100">
                                <span className="text-2xl">🎂</span>
                                <div>
                                    <p className="text-xs text-gray-500 leading-none mb-0.5">Pedidos</p>
                                    <p className="text-sm font-bold text-gray-800 leading-none">100% Artesanal</p>
                                </div>
                            </div>

                            {/* Floating keto badge */}
                            <div className="float-badge-alt absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2 border border-gray-100">
                                <span className="text-xl">🌿</span>
                                <p className="text-sm font-bold text-gray-800">Línea Keto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
