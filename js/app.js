var tl1 = new TimelineMax({repeat: -1, repeatDelay: 1.2});

tl1.from('#logo', 1.1, { top: -100, ease: Back.easeOut.config(1.2), y: -100 });

tl1.from('#bag', 1.2, { delay:0.5, ease: Back.easeOut.config(1.7), y: 400}, {opacity:0})
.to('#bag', 1.5, { delay: 0.5, ease: Back.easeOut.config(0.2), y: 500})
.staggerFrom("#new", 0.5, {scale:0.5, opacity:0, ease: Elastic.easeOut});



tl1.from('#premium', 1, {delay: -1, ease: Back.easeOut.config(1), x: -300})
.from('#chocolates', 1, {delay: -1, ease: Back.easeOut.config(1), x: 300})
.to('#premium', 1, { delay: 2, ease: Back.easeOut.config(0.2), x: -300})
.to('#chocolates', 1, { delay: -1, ease: Back.easeOut.config(0.2), x: 300})
.from('#trex', 1.2, { delay:6, ease: Back.easeOut.config(1.2), y: 400}, {opacity:0})
.to('#trex', .7, { delay: 2, y: 400});

 tl1.staggerFrom(".kisses", 0.5, {scale:0.5, opacity:0, ease: Elastic.easeOut}, 0.2);




