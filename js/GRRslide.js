let GRRTime = 2000;
let GRRSliderLi = document.querySelectorAll('.GRRSliderUl li');
let GRRSelectSlide = 0;
let GRRCreateKnob = document.createElement('div');
let GRRKnob = document.getElementById('GRRKnobs');

for(let i=0; i<=GRRSliderLi.length-1; i++){
	GRRKnob.insertAdjacentHTML('beforeend', '<input class="GRRKnobId'+i+'" type="submit" onclick="GRRKnobs('+i+')" value="">');
}
document.querySelector('.GRRKnobId'+GRRSelectSlide).id = 'GRRKnobSelected';
let GRRSliderStart = setInterval('GRRNextSlide()', GRRTime);
GRRSliderStart;
GRRSliderLi[0].classList.add('GRRFirstShowSlide');

function GRRDelSlide(){
	clearInterval(GRRSliderStart);		
	GRRSliderStart = setInterval('GRRNextSlide()', GRRTime);
	GRRSliderStart;	
}
function GRRCheckClass(){
	if(GRRSliderLi[GRRSelectSlide].classList.contains('GRRFirstShowSlide')){
		GRRSliderLi[GRRSelectSlide].classList.remove('GRRFirstShowSlide');
		GRRSliderLi[GRRSelectSlide].classList.add('GRRHideSlide');
	}else{
		GRRSliderLi[GRRSelectSlide].classList.remove('GRRShowSlide');
		GRRSliderLi[GRRSelectSlide].classList.add('GRRHideSlide');
	}
}
function GRRAddShowClass(){
	GRRSliderLi[GRRSelectSlide].classList.remove('GRRHideSlide');
	GRRSliderLi[GRRSelectSlide].classList.add('GRRShowSlide');
}

function GRRKnobs(num){
	GRRCheckClass();
	document.querySelector('.GRRKnobId'+GRRSelectSlide).removeAttribute('id');
	document.querySelector('.GRRKnobId'+num).id = 'GRRKnobSelected';
	GRRSelectSlide = num;
	GRRAddShowClass();
	GRRDelSlide();
}

function GRRPreviousSlide(){
	GRRCheckClass();
    GRRSliderLi[GRRSelectSlide].removeAttribute('id');
	document.querySelector('.GRRKnobId'+GRRSelectSlide).removeAttribute('id');
    if(GRRSelectSlide == 0){
        GRRSelectSlide = GRRSliderLi.length-1;
		document.querySelector('.GRRKnobId'+GRRSelectSlide).id = 'GRRKnobSelected';
        GRRAddShowClass();
		GRRDelSlide();
    }else{
		GRRSelectSlide--;
		document.querySelector('.GRRKnobId'+GRRSelectSlide).id = 'GRRKnobSelected';
		GRRAddShowClass();	
		GRRDelSlide();
	}
}

function GRRNextSlide(){
	GRRCheckClass();
	document.querySelector('.GRRKnobId'+GRRSelectSlide).removeAttribute('id');
    if(GRRSelectSlide < GRRSliderLi.length-1){
        GRRSelectSlide++;
		document.querySelector('.GRRKnobId'+GRRSelectSlide).id = 'GRRKnobSelected';
        GRRAddShowClass();
		GRRDelSlide();		
    }else{
        GRRSelectSlide = 0;
		document.querySelector('.GRRKnobId'+GRRSelectSlide).id = 'GRRKnobSelected';
        GRRAddShowClass();
		GRRDelSlide();
    }
	document.getElementBy
}