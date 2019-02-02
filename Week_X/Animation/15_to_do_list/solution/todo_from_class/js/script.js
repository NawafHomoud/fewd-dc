$(document).ready(function() {

    // GOAL: Add a new item to to-do list.

    // User types item into the text box
    // User submits
    // Item is added.


    $('#addToDo').submit(function() {
        event.preventDefault();

        // Get what the user typed in.
        var newToDo = $('#newToDo').val();

        // Add this new to do to the list in my HTML.
        $('#toDoList').append('<li><input type="checkbox"> ' + newToDo + '</li>');

        // Clear out my input.
        $('#newToDo').val('');

        // Remove all click events from To Do list checkboxes.
        $('#toDoList input[type=checkbox]').unbind();

        // Add a click event to all To Do list checkboxes to move item to the "Done" section.
        $('#toDoList input[type=checkbox]').click(completeToDo);
    });

    // Click function for list checkboxes.
    function completeToDo() {
        // Figure out what the user clicked on.
        //$(this).parent()

        // Add that item to the Done list.
        var doneItem = $(this).parent().html();
        $('#doneList').append('<li>' + doneItem + '</li>');

        // Remove the item from the To Do list.
        $(this).parent().remove();
    }

});