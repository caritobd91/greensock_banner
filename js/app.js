var tl1 = new TimelineMax();

tl1.from('#logo', 1.1, { top: -100, ease: Back.easeOut.config(1.2), y: -100 });

tl1.from('#bag', 1.2, { delay:0.5, ease: Back.easeOut.config(1.7), y: 500}, {opacity:0})
.to('#bag', 1.5, { delay: 0.5, ease: Back.easeOut.config(0.2), y: 500});

tl1.from('#premium', 1, {delay: -1, ease: Back.easeOut.config(1.7), x: -300})
.from('#chocolates', 1, {delay: -1, ease: Back.easeOut.config(1.7), x: 300});

