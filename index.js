let tl = new TimelineMax({paused: true});

tl
.to('.btn', .3, {opacity: 0})
.to('.intro-text h2', .3, {opacity: 0})
.staggerFrom('.hide-text', 1.5, {y: '100%', ease: Power4.easeOut}, 0.15);

document.getElementById('button').addEventListener('click', () => {
  tl.play();
});
