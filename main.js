Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fNq1f1qES/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}


function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("hand_gesture_name").innerHTML = results[0].label;

        predection_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
    if(results[0].label == "Thumbs Up")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128077;";
    }
    if(results[0].label == "Thumbs Down")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128078;";
    }
    if(results[0].label == "Peace")
    {
        document.getElementById("hand_gesture").innerHTML = "&#9996;";
    }
    if(results[0].label == "Finger up")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128070;";
    }
    if(results[0].label == "Finger Down")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128071;";
    }
    if(results[0].label == "Finger Right")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128073;";
    }
    if(results[0].label == "Finger Left")
    {
        document.getElementById("hand_gesture").innerHTML = "&#128072;";
    }
    
}
}