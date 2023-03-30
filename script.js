const searchResult= document.querySelector('.search');
const btnSearch= document.querySelector('.btn');
const input= document.querySelector(".input");


btnSearch.addEventListener('click', () => {
    searchResult.classList.toggle('active');
    input.focus()
})