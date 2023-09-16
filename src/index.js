import './style.scss';

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const comunity__title = entry.target.querySelector('.comunity__title');
        // const comunity__text = entry.target.querySelector('.comunity__text');

        if(entry.isIntersecting){
            comunity__title.classList.add('text-animation');
            // comunity__text.classList.add('text-animation');

            return;
        }

        comunity__title.classList.remove('text-animation');
        // comunity__text.classList.remove('text-animation');
    });
});

observer.observe(document.querySelector('.comunity'));