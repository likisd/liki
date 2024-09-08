const yesOption = document.getElementById('yes-option');
const noOption = document.getElementById('no-option');

yesOption.addEventListener('click', () => {
    alert('Yay! I'm so happy you said yes, Vaishnavi!');
});

noOption.addEventListener('click', (e) => {
    e.preventDefault();
    noOption.style.top = `${Math.random() * window.innerHeight}px`;
    noOption.style.left = `${Math.random() * window.innerWidth}px`;
});
