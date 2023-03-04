


function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DLfqz2xib/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);

}

function gotResults(error, results) 
{
if (error) {
    console.error(error);   
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random()* 255)+1;
    random_number_g = Math.floor(Math.random()* 255)+1;
    random_number_b = Math.floor(Math.random()* 255)+1;



}

document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb ("+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb ("+random_number_g+","+random_number_r+")";

img = document.getElementById('cat.jpg')
img1 = document.getElementById('cow.JPG')
img2 = document.getElementById('dog.jpg')
img3 = document.getElementById('lion.webp')



if (results[0].label =="meow" ) {
    img.src='cat.gif';
    img1.src='cow.JPG';
    img2.src='dog.jpg';
    img3.src='lion.webp';
    
    
} else if (results[0].label == "mooing")

{
    img.src='cat.jpg';
    img1.src='cow.gif';
    img2.src='dog.jpg';
    img3.src='lion.jpg';   
} else if (results[0].label == "barks")

{
    img.src='cat.jpg';
    img1.src='cow.JPG';
    img2.src='dog.gif';
    img3.src='lion.jpg';   
}else{
    img.src='cat.jpg';
    img1.src='cow.JPG';
    img2.src='dog.jpg';
    img3.src='lion.gif';       
}


}


  

    
    
    
    
    