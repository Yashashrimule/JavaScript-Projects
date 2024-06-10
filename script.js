function addToList(){
    var task=document.querySelector('#task')
    var listItems=document.querySelector('#listItems')
    if(task.value==""){
        alert("Add some task !!")
    }else{
        var item=document.createElement("li")
        item.innerHTML="<i class='fa-regular fa-circle'></i> "+task.value+"<span><i class='fa-solid fa-xmark'></i></span>"
        listItems.appendChild(item)
        task.value=""
    }
    saveToLocalStorage()
    getFromLocalStorage()
}
function saveToLocalStorage(){
    var listItems=document.querySelector('#listItems')
    localStorage.setItem("items",listItems.innerHTML)
    task()
}
function getFromLocalStorage(){
    var listItems=document.querySelector('#listItems')
    listItems.innerHTML=localStorage.getItem("items")
    task()
}
getFromLocalStorage()
function task(){
    var items=document.querySelectorAll("#listItems li")
    var listItems=document.querySelector("#listItems")
    console.log(items)
    items.forEach(function(item){
        item.addEventListener("click",function(details){
            if(details.target.tagName=="I"){
                listItems.removeChild(item)
            }else if(details.target.tagName=="LI"){
                console.log("skdjfkd")
                items.style.textDecoration="line-through"
                var checkIcon=item.childNodes[0]
                if(checkIcon.classList.contains("fa-circle")){
                    checkIcon.classList.remove("fa-circle")
                    checkIcon.classList.add("fa-circle-check")
                }
            }
            saveToLocalStorage()
        })
    })
}