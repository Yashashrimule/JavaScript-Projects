async function getHeader(){
    var raw=await fetch('header.html')
    var content=await raw.text()
    var header=document.querySelector("#header")
    header.innerHTML=content;
    
}
getHeader()
async function getFooter(){
    var raw=await fetch('footer.html')
    var content=await raw.text()
    var footer=document.querySelector("#footer")
    footer.innerHTML=content;
}
getFooter()




