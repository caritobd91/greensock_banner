var tl1 = new TimelineMax();

tl1.from('#logo', 1.1, { top: -100, ease: Back.easeOut.config(1.2), y: -100 });


TweenLite.from('#bag', 1.5, { delay:0.5, ease: Expo.easeOut, y: 500}, {opacity:0});