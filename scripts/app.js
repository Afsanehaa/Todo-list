let doinput=document.querySelector('.doinput')
let todoul =document.querySelector('.todoul')
let trash= document.querySelector('.delete')
let deletebtn = document.querySelector('.deletebtn');

deletebtn.addEventListener('click' , function(event){
    event.target.parentElement.parentElement.remove()
})

doinput.addEventListener('keydown' , function(event){
    //trim :اسپیس ها ی اضافه را پاک میکنه
  let inputvalue = event.target.value.trim()
if(inputvalue){
    if(event.code ==='Enter' ){
        let newTodoli=document.createElement('li')
        newTodoli.setAttribute('class' , 'todoli')

        let newTodoSpan = document.createElement('span')
        newTodoSpan.innerHTML = inputvalue 

        let newTodoTrash = document.createElement('span')
        newTodoTrash.innerHTML= '<img src="./images/dustbin.png" alt="" style=" width: 25px;height: 25px;"></img>';
        newTodoTrash.setAttribute('class','deletebtn');
        
        newTodoTrash.addEventListener('click', function(event){
            event.target.parentElement.parentElement.remove()
        } )


        newTodoli.append(newTodoSpan , newTodoTrash)
        todoul.append(newTodoli)
        doinput.value=''
   
       }
}

})


