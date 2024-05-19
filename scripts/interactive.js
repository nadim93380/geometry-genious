// function for get the input field data and covert to float
function getDataById(data) {
    const inputField = document.getElementById(data);
    const inputText = inputField.value;
    const mainData = parseFloat(inputText);
    inputField.value = '';
    return mainData;
}
// function for add the output to separate calculation area
function addDataById(area) {
    const areaField = document.getElementById('areaField');
    const newLi = document.createElement('li');
    newLi.innerText = 'The Area Of Your Shape is : ' + area.toFixed(3);
    areaField.appendChild(newLi);
}




// for area value of triangle
document.getElementById('triCalculateBtn').addEventListener('click', function () {
    const base = getDataById('triBase');
    const height = getDataById('triHeight');
    
    const triArea = 0.5 * base * height;
    if (typeof (triArea) === 'number' && !isNaN(triArea)){
        addDataById(triArea);

    }
})

// for area value of Rectangle
document.getElementById('recCalculateBtn').addEventListener('click', function () {
    const width = getDataById('recWidth');
    const lenth = getDataById('recLenth');
    
    const recArea = width * lenth;
    if (typeof (recArea) === 'number' && !isNaN(recArea)){
        addDataById(recArea);
    }
})

// for area value of Parallelogram
document.getElementById('parCalculateBtn').addEventListener('click', function () {
    const base = getDataById('parBase');
    const height = getDataById('parHeight');

    const parArea = base * height;
    if (typeof (parArea) === 'number' && !isNaN(parArea)){
        addDataById(parArea);
    }
})

// for area value of Rhombus
document.getElementById('rhoCalculateBtn').addEventListener('click', function () {
    const d1 = getDataById('rhD1');
    const d2 = getDataById('rhD2');

    const rhoArea = 0.5 * d1 * d2;
    if (typeof (rhoArea) === 'number' && !isNaN(rhoArea)){
        addDataById(rhoArea);
    }
})

// for area value of Pentagon
document.getElementById('penCalculateBtn').addEventListener('click', function () {
    const p = getDataById('p');
    const b = getDataById('b');

    const penArea = 0.5 * p * b;
    if (typeof (penArea) === 'number' && !isNaN(penArea)){
        addDataById(penArea);
    }
})
// for area value of Ellipse
document.getElementById('ellCalculateBtn').addEventListener('click', function () {
    const a = getDataById('a');
    const b = getDataById('bEll');

    const ellArea = 3.14 * a * b;
    if (typeof (ellArea) === 'number' && !isNaN(ellArea)){
        addDataById(ellArea);
    }
})