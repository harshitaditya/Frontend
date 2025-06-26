function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const i in reactElement.props) {
        domElement.setAttribute(i,reactElement.props[i])
        
    }
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
         target:'_blank'
    },
    children:'click me to visit google'
}
const maincontainer=document.querySelector('#root')
customRender(reactElement,maincontainer);




