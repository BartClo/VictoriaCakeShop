"use client";

import { useEffect } from "react";

/**
 * Hook that observes all elements with a `reveal` / `reveal-left` / `reveal-right` / `reveal-scale`
 * class and adds the `visible` class when they enter the viewport.
 *
 * Call once in the page root — it sets up a single global IntersectionObserver.
 */
export function useScrollReveal() {
    useEffect(() => {
        const selectors =
            ".reveal, .reveal-left, .reveal-right, .reveal-scale";

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // animate once
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        const elements = document.querySelectorAll(selectors);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
