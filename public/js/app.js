console.log("fuck java sript")


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageone=document.querySelector('#msg1')
const messagtwo = document.querySelector('#msg2')
///messageone.textContent='from javascript page'

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location= search.value
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                //console.log('welcome to heck!')
                messageone.textContent= data.error
                messagtwo.textContent=''

            
            }
            else 
            {
               // messageone.textContent='from javascript page'
                messageone.textContent=data.location
                messagtwo.textContent=data.forecast
            }
        })
    })
})