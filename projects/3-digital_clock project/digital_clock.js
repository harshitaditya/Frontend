const clock=document.querySelector('#clock');
setInterval(() => {             // using this we can run the clock continuously.
const mydate=new Date();
const ans=mydate.toLocaleTimeString();
clock.innerHTML=`${ans}`;
}, 1000);