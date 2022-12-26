function changecolor()
{
    const colors=['red','blue','green','pink','yellow','grey','black','purple']
    
    let rc=colors[(Math.random()*7).toFixed(0)]
    const b=document.querySelector('body')
    b.style.backgroundColor=rc
    
}