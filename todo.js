const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos';

let toDos = [];
let idNumbers = 1;


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDos(toDos);
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON.stringify => 자바스크립트의 object를 string으로 바꿔준다
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtm = document.createElement("button");
    delBtm.innerText="❌";
    delBtm.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = idNumbers;
    idNumbers+=1;
    span.innerText = text
    li.appendChild(delBtm);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadToDos= localStorage.getItem(TODOS_LS);
    if(loadToDos!== null) {
        const parsedToDos = JSON.parse(loadToDos);
        //JSON이 다시 opject로 string을 변환시킴
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();

    toDoForm.addEventListener("submit", handleSubmit)
}

init();