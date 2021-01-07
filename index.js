const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function hadleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS)
    // if(hasClass) {
    //     title.classList.remove(CLICKED_CLASS)
    // }else {
    //     title.classList.add(CLICKED_CLASS)
    // }

    // 위를 아래로 퉁칠 수 있다 왛 
    title.classList.toggle(CLICKED_CLASS);
};


function init() {
    title.addEventListener("click", hadleClick);
}

init();