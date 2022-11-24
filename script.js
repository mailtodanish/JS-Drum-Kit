(() => {
    document.addEventListener("keydown", (e) => {
        const el = document.querySelector(`div[data-key="${e.which}"]`);
        if (!el) return;

        el.classList.add('play');

        const a = document.querySelector(`audio[data-key="${e.which}"]`);
        a.currentTime=0;
         a.play();
    });

    const keys = document.querySelectorAll('.key');
    keys.forEach((k) => {
        k.addEventListener("transitionend", (e) => {
            if (e.propertyName === 'transform') {
                k.classList.remove("play");
            }

        })
    });
})();
