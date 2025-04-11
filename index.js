  document.querySelectorAll('.award-accordion-content').forEach(content => {
    content.style.display = 'none'; 
});

document.querySelectorAll('.award-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement; 
        const content = header.nextElementSibling; 

        const isActive = content.style.display === 'block';
        content.style.display = isActive ? 'none' : 'block';
              if (!isActive) {
                content.classList.add('active');
                header.classList.add('active'); 
                accordion.classList.add('active'); 
            } else {
                content.classList.remove('active');
                header.classList.remove('active'); 
                accordion.classList.remove('active'); 
                content.style.display = 'none'; 
            }
        });
    });