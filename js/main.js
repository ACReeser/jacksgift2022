var currentStep = 1;
var firstStep = 1;
var lastStep = 32;

var image = document.getElementById('mainImg');


function doNext(){
    if (currentStep === lastStep){
        currentStep = firstStep;
    } else {
        currentStep++;
    }
    image.src = '/img/'+currentStep+'_1x.png';
};

function doPrev(){
    if (currentStep === firstStep){
        currentStep = lastStep;
    } else {
        currentStep--;
    }
    image.src = '/img/'+currentStep+'_1x.png';
}

document.getElementsByClassName('prev')[0].addEventListener('click', doPrev);
document.getElementsByClassName('prev')[0].addEventListener('tap', doPrev);


document.getElementsByClassName('next')[0].addEventListener('click', doNext);
document.getElementsByClassName('next')[0].addEventListener('tap', doNext);