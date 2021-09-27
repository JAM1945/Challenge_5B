

//Finding Form that we will list look for events
var dayPlannerForm = document.querySelector("#Day_Planner_Form");
//Identify where the events will be recorded
var hourlyEvent = document.querySelector("#8a-event");

//Function executing upon event
var eventRecording = function (event) {
    event.preventDefault();

    // To Find the text value entered into the temporary event input
    var timeInput = document.querySelector("input[name='input-field']").value;

    // Creating the element to hold the value
    var timeRecord = document.createElement("div");

    //Attaching the input to the newly created div
    timeRecord.innerHTML = "<h3>"+timeInput+"</h3>";

    //Appending new Element to hourlyEvent
    hourlyEvent.appendChild(timeRecord);
};

//EventListening executing Execution Function upon occurrence of event

dayPlannerForm.addEventListener("submit", eventRecording);