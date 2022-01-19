var elForm=document.querySelector(".todo__form");
var elInput=document.querySelector(".todo__input");
var elList=document.querySelector(".todo__list");


var todos=["Wake up","Wash your hands","Brush teeth","Have a break"]


function perevod(todoExample,element){
    for(var i=0;i<todoExample.length;i++){
       var newLi=document.createElement('li');
       var newLink=document.createElement('a');
       var newButton=document.createElement('button')


       newLink.textContent=todoExample[i];
       newButton.setAttribute('class','second__button')
       newLi.setAttribute('class','todo__item');
       newLink.setAttribute('href','#');
       newLink.setAttribute('class','todo__link')



        newButton.textContent="Delete"

       newLi.appendChild(newButton)
       newLi.appendChild(newLink)
       element.appendChild(newLi)
    }
}

perevod(todos,elList)



function handleFormSubmit(evt){
    evt.preventDefault();
   
    elList.innerHTML=null;

    var newTodoTitle=elInput.value.trim();


   todos.push(newTodoTitle);
   elInput.value=null


  perevod(todos,elList)


}
elForm.addEventListener("submit",handleFormSubmit)