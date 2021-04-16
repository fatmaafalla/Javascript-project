//variable
const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const audio=document.getElementById("myaudio");

var answer=0;
var score=0;

//score variable

const score1 = document.getElementById("par");
//creat reset
const reset = document.createElement('li');
reset.classList = 'reset';
reset.textContent = 'reset';
//creat count
const li = document.createElement('li');
li.classList = 'list';
score1.appendChild(li);
score1.appendChild(reset);

//function
function generate_equation(){
    var num1=Math.floor(Math.random()*13);
    var num2=Math.floor(Math.random()*13);
    var dummyAnswer1=Math.floor(Math.random()*13);
    var dummyAnswer2=Math.floor(Math.random()*13);
    var allAnswers=[];
    var switchAnswers=[];

    answer=num1-num2;


    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
   
    allAnswers=[answer,dummyAnswer1,dummyAnswer2];
    for( i=allAnswers.length;i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0]) 
    }


      option1.innerHTML=  switchAnswers[0];
    option2.innerHTML= switchAnswers[1];
    option3.innerHTML= switchAnswers[2];
    
}

generate_equation();
function newscore() {
    // Create an <li> element
    li.textContent = score; 
    //add to local storage
    addScoreLocalStorage(score);
} 


// Adds the scores into the local storage
function addScoreLocalStorage(score) {
    let scores = getScoresFromStorage();

    // Add the score into the array
    scores.push(score);

    // Convert scores array into String
    localStorage.setItem('scores', JSON.stringify( scores )  );
}

function getScoresFromStorage() {
    let scores ;
    const scoresLS = localStorage.getItem('scores');
    // Get the values, if null is returned then we create an empty array
    if(scoresLS === null) {
        scores= [];
    } else 
    {
        scores = JSON.parse( scoresLS ); 
    }
    return scores;
}


 // Removes the Score from the DOM
 function resetScore(e) {
    if(e.target.classList.contains('reset')) {
         score=0;
         e.target.previousElementSibling.innerHTML=score;
    } 
      // Remove from Storage
      removeScoreLocalStorage( e.target.previousElementSibling.textContent ) ;
}


// Removes the scores from local storage

function removeScoreLocalStorage(score) {
    // get Scores from storage
    let Scores = getScoresFromStorage();
    console.log(Scores);
    Scores.splice(0,);   
    localStorage.clear();

    // localStorage.removeItem('Scores');
    console.log(Scores)
    localStorage.setItem('Scores', JSON.stringify(Scores) );
}



// Prints Local Storage score on Load
function localStorageOnLoad() {
    let scores = getScoresFromStorage();
    console.log(scores)
    if(scores==null)
    {
        li.textContent =0; 
    }else
    {
        li.textContent = scores.pop() ; 

    }
}




//Event listener
option1.addEventListener("click", function(){
    if(option1.innerHTML==answer)
    {
        score++;
        newscore();
        generate_equation(); 
    }else
    {
        audio.onplay;  
    }
});

option2.addEventListener("click", function(){
    if(option2.innerHTML==answer)
    {
        score++;
        newscore();
        generate_equation(); 

    }else
    {
        audio.onplay;  
    }
});


option3.addEventListener("click", function(){
    if(option3.innerHTML==answer)
    {
        score++;
        newscore();
        generate_equation();  
       

    }else
    {
        audio.onplay;  
    }
});


 // reset score 
 score1.addEventListener('click',resetScore);
 // keep score on load
document.addEventListener('DOMContentLoaded', localStorageOnLoad);




// const option=document.getElementById("option");
// option.addEventListener("click", function(e){
    
//     if( e.target.classlist.contains("option") && e.innerHTML==answer)
//     {
//         generate_equation();  
//     }else
//     {
//         audio.onplay();  
//     }
// });

// option1.innerHTML=  answer;
// option2.innerHTML=dummyAnswer1;
// option3.innerHTML=dummyAnswer2;
