var bookMarkName = document.getElementById("name")
var url = document.getElementById("url")
  if(localStorage.getItem("localAll") != null){
       var allUrl = JSON.parse(localStorage.getItem("localAll"))
       display()
    }else{
        var allUrl = []
    }
// var Aurl = [{name:"google",url:"www.google.com"}]
// console.log(Aurl.json.stringify())
// localStorage.setItem("allUrl" , )
function addBookMark(){
     var urlRegexp =/^www.[a-z]+.com$/
    var nameRegexp = /^[a-zA-Z]{3,}/
    if(urlRegexp.test(url.value) && nameRegexp.test( bookMarkName.vlue)){
        var Bookmark= {
    name:bookMarkName.value,
    url:url.value,
  }
  allUrl.push(Bookmark)
  localStorage.setItem("localAll" , JSON.stringify(allUrl))
  clearInput()
  display()
   document.getElementById("warning").classList.replace("d-block" ,"d-none" )
    }else{
        document.getElementById("warning").classList.replace("d-none" ,"d-block")
    }
//   if(search() == true){
     
//   }else{
//     console.log("there is a Bookmark with the same name")
//   }
  
}
// function search(){
//   var  BookmarkS  =bookMarkName.value.trim().toLowerCase()
//     for(var i =0 ; i< allUrl.length ; i++){
//         if(allUrl[i].name.toLowerCase() != BookmarkS){
//            console.log("yes")
//         }else{
//            console.log("no")
//         }
//     }
// }
function clearInput(){
    bookMarkName.value =""
    url.value = ""
}
function display(){
    cartona =""
    for(var i=0 ;i<allUrl.length ;i++){
        cartona +=`
            <tr>
                <td>${i+1}</td>
                <td>${allUrl[i].name}</td>
                <td><a target="_blank" href="https://${allUrl[i].url}"><button class="btn btn-visit"><i class="fa-solid fa-eye"></i>Visit</button></a></td> 
                <td><button onclick ="deleteUrl(${i})" class="btn btn-danger">Delete</button></td>
            </tr>
        `
    }
    document.getElementById("dispaly").innerHTML = cartona
}
function deleteUrl(index){
    allUrl.splice(index ,1) 
    display()  
    localStorage.setItem("localAll" , JSON.stringify(allUrl))
}
