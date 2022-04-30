//create var for to store all hours

//make time blocks
function timeBlocks(hour, existingTodo= "") {

    var currentHour = new Date().getHours(); //grabbing the current REAL TIME
    var momentInTime = "future";
    
    if (currentHour > hour) momentInTime = "past";
    if (currentHour === hour) momentInTime = "present";


    // var hourName= hours[hour];
    // var existingTodo = localStorage.getItem(hourName);

    $(".container").append($(`
        <div class="row time-block">
            <div class="hour col-1">${hour}:00</div> 
            <textarea name="" id="" cols="30" rows="3" class="discription col-9 ${momentInTime}">${existingTodo || ""}</textarea>
            <button class="btn saveBtn col-2" data-hour"${hour}>Save</button>
        </div>`))
}

//To populate time from 8am-6pm

for(var i = 8; i<20; i++) {
    var saveTodos = localStorage.getItem(i);
    timeBlocks(i, saveTodos);
}


//button
var saveBtn = document.querySelectorAll(".saveBtn");

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function(event) {

        event.preventDefault();
        
        var todo = event.target.parentNode.children[1].value;
        var todoName = event.target.parentNode.children[1].id;
        
        localStorage.setItem(todo,todoName);
    });

}