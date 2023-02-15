const input=document.querySelector("#grocery")
// console.log(inputvalue);
const btns =document.querySelectorAll("button")
// console.log(btns);
const item=document.querySelector(".grocery-list")
// console.log(item);
const alerting=document.querySelector(".alert")

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",(e)=>{
        e.preventDefault();
        // console.log(e.target);
        if (e.target.matches(".submit-btn")) {
            if(input.value==""){
                
                alerting.innerText = "Please add your Task";
                alerting.classList.add("remove")
                alerting.style.display="block"
                setTimeout(() => {
                    alerting.style.display="none "
                    alerting.classList.remove("remove")
                }, 1000);
            }
            else{
                 //creating li
            let li =document.createElement("li")
            li.innerText=input.value
            li.style.listStyle="none";
            li.style.display="flex";
            li.style.justifyContent = "space-between";

            //adding del button on li by appending
            let del = document.createElement("button");
            del.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
            li.appendChild(del)
            item.appendChild(li)   
            
            // alerting 
            alerting.innerText = "item added";
            alerting.classList.add("add")
            alerting.style.display="block"
            setTimeout(() => {
                alerting.style.display="none "
                alerting.classList.remove("add")
            }, 1000);
            input.value=""

            //adding event for delbutton
            del.addEventListener("click",(e)=>{
                e.target.parentElement.parentElement .remove();
                alerting.innerText = "item removed";
                alerting.classList.add("remove")
                alerting.style.display="block"
                setTimeout(() => {
                    alerting.style.display="none "
                    alerting.classList.remove("remove")
                }, 1000);
             })

            }


           
           
            
         

        }
        //adding event for clear alll items
        if(e.target.matches(".clear-btn")){
            if(item.innerHTML!=""){
                item.innerText=""
                alerting.innerText = "Removed All Item";
                alerting.classList.add("remove")
                alerting.style.display="block"
                setTimeout(() => {
                    alerting.style.display="none "
                    alerting.classList.remove("remove")
                }, 1000);
               
            }
            //it alerts when thetask is not listed
            else{
                
                alerting.innerText = "No Task Listed";
                alerting.classList.add("remove")
                alerting.style.display="block"
                setTimeout(() => {
                    alerting.style.display="none "
                    alerting.classList.remove("remove")
                }, 1000);

            }
            
           
        

        }
    })    
}