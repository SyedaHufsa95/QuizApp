let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 60) {
            seconds++;
        } else if(seconds >=60){
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("div.timerBox").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);





    let user_name = sessionStorage.getItem("name");
    let user_points = sessionStorage.getItem("points");
    let user_time = sessionStorage.getItem("time");
    document.querySelector("span.name").innerHTML = user_name;
    document.querySelector("span.points").innerHTML = user_points;
    document.querySelector("span.time_taken").innerHTML = user_time;








    function submitForm(e) {
        e.preventDefault();
        let name = document.forms["welcome_form"]["name"].value;
      
        sessionStorage.setItem("name", name);
      
        location.href = "quiz.html";
      }
    

