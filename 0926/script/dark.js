const d_btn= document.querySelector('#dark_btn');
d_btn.addEventListener('click', function(){
    if(n==1){
        document.bgColor='#333'
        document.fgColor='#fff'
        console.log(n)
        n=0;
    }else{
        document.bgColor='#fff'
        document.fgColor='#333'
        console.log(n)
        n=1;
    }
})