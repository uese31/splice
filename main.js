function clickBurgerMenu(){
    let elem = document.getElementById(`header-nav`);
    if(elem.classList.contains(`active`)){
        elem.classList.remove(`active`);
    }
    else{
        elem.classList.add(`active`);
    }
}