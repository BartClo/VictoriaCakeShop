import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="nosotros" className="py-28 sm:py-36 bg-[#fdfbf7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ── Left: Text content ── */}
                    <div className="reveal-left">
                        <span className="inline-block text-[#8c6b5d] font-medium text-sm uppercase tracking-widest mb-4">
                            Nuestra Historia
                        </span>

                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.15] mb-8">
                            Hecho con amor en el{" "}
                            <span className="text-[#8c6b5d] italic">corazón</span>{" "}
                            de Rancagua
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            En Postres Victoria no solo horneamos pasteles; creamos momentos.
                            Cada receta combina la tradición artesanal con ingredientes de la
                            más alta calidad.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Ya sea que busques el sabor clásico que reconforta el alma, o
                            nuestra exclusiva línea &ldquo;Sin Culpa&rdquo; libre de azúcar,
                            aquí encontrarás un dulce refugio preparado especialmente para ti.
                        </p>

                        {/* Stats row */}
                        <div className="flex flex-wrap gap-8">
                            <div>
                                <p className="font-heading text-4xl font-bold text-[#8c6b5d]">
                                    100%
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Artesanal</p>
                            </div>
                            <div className="w-px bg-gray-200 self-stretch hidden sm:block" />
                            <div>
                                <p className="font-heading text-4xl font-bold text-[#8c6b5d]">
                                    3
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Líneas únicas</p>
                            </div>
                            <div className="w-px bg-gray-200 self-stretch hidden sm:block" />
                            <div>
                                <p className="font-heading text-4xl font-bold text-[#8c6b5d]">
                                    ❤️
                                </p>
                                <p className="text-sm text-gray-500 mt-1">Rancagua</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Photo collage ── */}
                    <div className="reveal-right grid grid-cols-2 gap-4 lg:gap-5">
                        {/* Large image — top left, spans 2 rows */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg row-span-2 h-[360px] sm:h-[440px]">
                            <Image
                                src="/images/tortaselvanegra.png"
                                alt="Tortas artesanales de Postres Victoria"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 40vw, 280px"
                            />
                        </div>

                        {/* Top-right image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[170px] sm:h-[210px]">
                            <Image
                                src="/images/torta.png"
                                alt="Postres saludables keto sin azúcar"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 40vw, 200px"
                            />
                        </div>

                        {/* Bottom-right image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg h-[170px] sm:h-[210px]">
                            <Image
                                src="/images/sandwich.png"
                                alt="Sándwiches en ciabatta artesanal"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 1024px) 40vw, 200px"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
