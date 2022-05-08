let menu_options = Array.from(document.querySelectorAll('.menu-option'))

menu_options.forEach(menu_option => {
    menu_option.addEventListener('click', ()=>{
        console.log('Hallo!');
    })
    menu_option.addEventListener('mouseover', ()=>{
        menu_option.setAttribute('style', 'background-color:white; color:black;')
    })
    menu_option.addEventListener('mouseleave', ()=>{
        menu_option.setAttribute('style', 'background-color:transparent; color:white;')
    })
})