const testimonials = [
    {
        name: "Camila R.",
        text: "La torta Selva Negra estaba INCREÍBLE. Se nota que es artesanal de verdad. Todos en el cumple quedaron encantados 🎂",
        rating: 5,
        tag: "Torta Selva Negra",
    },
    {
        name: "Francisca M.",
        text: "Pedí la línea keto para mi mamá diabética y no podía creer lo rica que estaba. ¡Por fin postres sin culpa de verdad!",
        rating: 5,
        tag: "Línea Sin Culpa",
    },
    {
        name: "José Luis P.",
        text: "Los waffles con milkshake son adictivos. La atención por WhatsApp es súper rápida y amable. 100% recomendado.",
        rating: 5,
        tag: "Waffles & Milkshake",
    },
    {
        name: "Valentina S.",
        text: "El sándwich de mechada en ciabatta es lo mejor que he probado en Rancagua. El pan artesanal hace toda la diferencia.",
        rating: 5,
        tag: "Sándwich Ciabatta",
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonios" className="py-24 sm:py-32 bg-[#fdfbf7] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8c6b5d]/[0.03] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#8c6b5d]/[0.03] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="inline-block text-[#8c6b5d] font-medium text-sm uppercase tracking-widest mb-4">
                        Lo que dicen nuestros clientes
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-5">
                        Testimonios que{" "}
                        <span className="text-[#8c6b5d] italic">endulzan</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        La mejor publicidad es un cliente feliz. Esto es lo que opinan
                        quienes ya probaron nuestros productos.
                    </p>
                    <div className="w-16 h-[3px] bg-[#8c6b5d] mx-auto mt-8 rounded-full" />
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`reveal stagger-${i + 1} group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100/80 transition-all duration-500 hover:-translate-y-1 relative`}
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 text-[#8c6b5d]/10">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                                </svg>
                            </div>

                            <StarRating count={t.rating} />

                            <p className="text-gray-600 text-base leading-relaxed mt-4 mb-6 italic">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder */}
                                    <div className="w-10 h-10 rounded-full bg-[#8c6b5d]/10 flex items-center justify-center text-[#8c6b5d] font-bold text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">
                                            {t.name}
                                        </p>
                                        <p className="text-gray-400 text-xs">Cliente verificado</p>
                                    </div>
                                </div>

                                <span className="text-xs font-medium text-[#8c6b5d] bg-[#8c6b5d]/8 px-3 py-1 rounded-full">
                                    {t.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social proof footer */}
                <div className="mt-14 text-center reveal">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
                        <div className="flex -space-x-2">
                            {["C", "F", "J", "V"].map((letter, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-[#8c6b5d] text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                                >
                                    {letter}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600">
                            <strong className="text-gray-800">+200 clientes</strong> felices
                            en Rancagua
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
