let title = document.getElementById("title");
let desc = document.getElementById("desc");
let save = document.getElementById("save");
let listDiv = document.getElementById("listDiv");
let deleteBtn = document.getElementsByClassName("delete");




save.addEventListener("click",addTask);


function addTask(){
    let taskDiv = document.createElement("div");
    taskDiv.innerHTML=`<div class="col title">
                            ${title.value}
                        </div>
                        <div class="col-6">
                            ${desc.value} 
                        </div>
                        <div class="col">
                            <button class="btn btn-danger delete" type="button">X</button>
                        </div>`;
    taskDiv.classList="row task";
    title.value="";
    desc.value="";
    listDiv.appendChild(taskDiv);
    for(let i=0;i<deleteBtn.length;i++){
        deleteBtn[i].addEventListener('click',deleteDiv);
    }
}

function deleteDiv(){
    let task=this.parentNode.parentNode;
    listDiv.removeChild(this.parentNode.parentNode);
}
