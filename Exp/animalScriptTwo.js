barba.init({
    transitions: [
        {
            name: "curtain-transition",

            async leave(data) {

                await gsap.to(".transition-curtain", {
                    xPercent: 100,
                    duration: 0.6,
                    ease: "power2.inOut"
                });
            },

            async enter(data) {

                await gsap.to(".transition-curtain", {
                    xPercent: 200,
                    duration: 0.6,
                    ease: "power2.inOut"
                });

                gsap.set(".transition-curtain", {
                    xPercent: 0
                });
            }
        }
    ]
});