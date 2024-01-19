const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

const editBtn=document.createElement('button');
const editBtnTxt=document.createTextNode('Edit');
editBtn.appendChild(editBtnTxt);
editBtn.className='edit-btn'

const lis=document.querySelectorAll('.fruit');

lis.forEach(function(lis){
    const editBtn=document.createElement('button');
    const editBtnTxt=document.createTextNode('Edit');
    editBtn.appendChild(editBtnTxt);
    editBtn.className='edit-btn'
    lis.appendChild(editBtn)
})






form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById('fruit-to-add');
    
    const newLi=document.createElement('li');
    newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>'
    fruits.appendChild(newLi);
})


    
    
fruits.addEventListener('click',function(event){
    if (event.target.classList.contains('delete-btn')){
       const fruitToDelete=event.target.parentElement;
       fruits.removeChild(fruitToDelete); 
    }
})