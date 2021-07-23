const divScreen =document.querySelector('#screen')
const btnCreateNumber =document.querySelector('#creatNumber')
const btnCallNumber =document.querySelector('#callNumber')
const spanNewNumber =document.querySelector('#newNumber')
const spanqueue =document.querySelector('#queue')

let n=0;
let queue=[];
btnCreateNumber.onclick=()=>{
  console.log('weqw')
  n+=1;
 // queue.push(n)
  queue.push.call(queue,n)
  spanNewNumber.innerText=n;
  spanqueue.innerText=JSON.stringify(queue)
}
btnCallNumber.onclick=()=> {
  const m=queue.shift.call(queue)
  if (m===undefined) {
   return ''
  }else{
  divScreen.innerHTML+='<div>请 '+m+'号就餐</div>'
  spanqueue.innerText=JSON.stringify(queue)
  divScreen.scrollTo(0,5000)
  }
}