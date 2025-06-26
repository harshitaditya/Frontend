const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach((item)=>{
    console.log(item);
    item.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
        let color=e.target.id;
        switch (color) {
            case "grey":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "white":
                body.style.backgroundColor=e.target.id;
                    
                break;
            case "blue":
                body.style.backgroundColor=e.target.id;
                    
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id;
                    
                break;
        
            default:

                break;
        }
    });
})