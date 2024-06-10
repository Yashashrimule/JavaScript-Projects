var searchValues=[
    "how to cook",
    "how to get place within one month",
    "where is the placements",
    "Am I good?",
    "how to create website?",
    "LeadSoft Placement Academy",
    "is winter is coming?",
    "Happy Diwali :)",
    "why"
]
var searchText=document.querySelector("#searchText")
var list=document.querySelector("#list")

searchText.addEventListener("keydown",function(){
    var result=[]
    if(searchText.value){
        result=searchValues.filter(function(keyword){
            return keyword.toLowerCase().includes(searchText.value.toLowerCase())
        })
        console.log(result)
        var content=""
        result.forEach(function(element){
            var temp="<li onclick=display(this)>"+element+"</li>"
            content=content+temp;
        })
        list.innerHTML=content
    }
    
})
function display(element){
    searchText.value=element.innerText
    list.innerHTML=""
}