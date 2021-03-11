const splash = document.querySelector('.splash');
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburger = document.querySelector('#hamburger');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        splash.classList.add('disappear')
    }, 3500);

    navToggle.addEventListener("click", () => {
        nav.classList.toggle('open');
        navIcon.forEach(icon => {
            icon.classList.toggle('hidden');
        });
    });

    window.addEventListener('resize', () => {
        if (document.body.clientWidth > 720)
            nav.classList.remove('open');
            navIcon.forEach(icon => {
                icon.classList.add('hidden');
            });
        hamburger.classList.remove('hidden');
    });

    const card = document.querySelector('.card');
    const container = document.querySelector('.container2');

    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / -60;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 60;

        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    });

    // animation snap and smmothness

    //smoothness in cursor transition hover
    container.addEventListener('mouseover', (e) => {
        card.style.transition = 'none';
    })



    // snap
    container.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });




});
