//press start!
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});


camera = document.getElementById("camera");


Webcam.attach('#camera');

//snapped

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
//consoled
console.log('ml5 version:', ml5.version);
//classified
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VImY7gqFMf/model.json',modelLoaded);

//defined modelloaded
function modelLoaded(){
    console.log('Model Loaded!');
}
function gotResult(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        if(results[0].label == "Ok")
        {
            document.getElementById("update_emoji").innerHTML = "👌";
        }
        if(results[0].label == "Good job!")
        {
            document.getElementById("update_emoji").innerHTML = "👍";
        }
        if(results[0].label == "Peace")
        {
            document.getElementById("update_emoji").innerHTML = "✌️";
        }
    }
}