let view=document.getElementById('Pageview');
let cost=document.getElementById('cost');
let cost2=document.getElementById('cost2');
let slider=document.getElementById('price-slider');
let toggle=document.getElementById('billing')
let pageviews=["10K","50K","100K","500K","1M"];
let permonth=[8,12,16,24,36];
let isYearly=false;
slider.addEventListener('input',function(){
    updatevalue();
    view.innerHTML=pageviews[slider.value]
    let value=this.value*25;
    this.style.background=`linear-gradient(to right, 
        hsl(174, 77%, 80%)0%,
        hsl(174, 77%, 80%)${value}%,
        hsl(224, 65%, 95%)0%,
        hsl(224, 65%, 95%)100%)`
});
toggle.addEventListener('change',function(){
    if(isYearly==false){
        isYearly=true;
    }
    else{
        isYearly=false;
    }
    updatevalue();
});
function updatevalue(){
    if(isYearly){
        cost.innerHTML=permonth[slider.value]*.75;
        cost2.innerHTML=permonth[slider.value]*.75;
    }
    else{
        cost.innerHTML=permonth[slider.value];
        cost2.innerHTML=permonth[slider.value];
    }
}