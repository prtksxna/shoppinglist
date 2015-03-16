// <INPUT> TEMPLATE //

var anotherListItem = '<div class="form-list"><button type="button" class="delete-list"></button><button type="button" class="undone-list"></button><button type="button" class="done"></button><input type="text"></div>';


$(document).ready(function() {

    $('input:first').focus();
    $('.delete').delay(1000).animate({right: "12em"}, 500);
    $('.note').delay(5000).fadeOut(2000);

    // ADDING MORE ITEMS ON THE LIST //

    //  $(originOfInteraction).on('event', filteroriginOfInteraction, function(parameter) {

    $(document).on('keydown', 'input', function(dataFromKeyDownEvent) {
        // When enter is pushed
        if (dataFromKeyDownEvent.keyCode == 13) {
            dataFromKeyDownEvent.preventDefault();

            // Show checkmark only when enter is pushed
            $(this).prev().fadeIn(500);

            // If this input is the last input
            if ($(this).is('input:last')) {

                // Create another line after the last <input>
                $('form').append(anotherListItem);
            }

            // Go back up to parent, go to the next parent element, and within the element, find <input>, and give it focus
            $(this).parent().next().find('input').focus();
        }
    });

    
    // PRESSING TAB FOCUSES THE NEXT LINE
    $(document).on('keydown', 'input', function(tab){
        if (tab.keyCode == 9) {
            tab.preventDefault();
            $(this).parent().next().find('input').focus();
            }
    });
    

    // STRIKETHROUGH ON HOVER
//    $(document).on('mouseover', '.done', function() {
//        $(this).next().css("text-decoration", "line-through");
//    });

//    // UN-STRIKETHROUGH ON MOUSEOUT
//    $(document).on('mouseout', '.done', function() {
//        $(this).next().css("text-decoration", "none");
//    });
    
    // STRIKETHROUGH WHEN DONE IS CLICKED
    $(document).on('click', '.done', function() { // DONE IS CLICKED
        $(this).parent().find('input').css("text-decoration", "line-through"); //STRIKETHROUGH DONE ITEM
        $(this).parent().find('.done').hide(); //HIDE DONE BUTTON 
        $(this).parent().find('.undone-list').show(); //SHOW UN-DONE BUTTON
    });
    
    
//    // SHOW OPTION TO UN-DONE ON HOVER STRIKETHROUGH
//    $(document).on('mouseover', 'input', function(doneHidden) {
//        // CHECK IF AN ITEM IS STRIKETHROUGH. ONLY WHEN IT IS,
//        if (doneHidden.
//            
//        // SHOW OPTION TO UN-DONE ON HOVER
//        $(this).parent().find('.undone-list').show();
//    });
//    
//    // MOUSEOU TO REMOVE UN-DONE OPTION
//    $(document).on('mouseout', 'input', function() {
//        $(this).parent().find('.undone-list').hide();
//    });
    
    
    // UN-DONE-ING AN ITEM
    $(document).on('click', 'button.undone-list', function() { //UN-DONE BUTTON IS CLICKED
        $(this).parent().find('input').css("text-decoration", "none"); //UNSTRIKETHROUGH ITEM
        $(this).parent().find('.undone-list').hide(); //HIDE UN-DONE BUTTON
        $(this).parent().find('.done').show(); //SHOW DONE BUTTON
    });
    

// DELETING ITEM(S) //
    
    $('.delete').click(function() { // When eraser is clicked
        $('.done').fadeOut(400); // "Done" buttons disappear
        $('.delete').animate({right: "30em"}, 300);// ERASER DISAPPEAR
        $('.undone-list').fadeOut(400); // Undone buttons disappear
        $('.delete-list').fadeIn(500); // Delete buttons appear
    });
    
    
//    $(document).on('click', '.delete', function() { // When eraser is clicked
//        $('.done').fadeOut(400); // "Done" buttons disappear
//        $('.delete').animate({right: "30em"}, 300);// ERASER DISAPPEAR
//        $('.undone-list').fadeOut(400); // "Undone" buttons disappear
//        $('.delete-list').fadeIn(500); // "Delete buttons appear
//        });
    
    $(document).on('click', '.delete-list', function() { // WHEN DELETE BUTTON IS CLICKED
        $('.done','.undone-list').hide();// ALL DONE AND UNDONE BUTTONS HIDE
        $(this).parent().children().fadeOut(300, function() { // "Delete-list" button and that particular <div></div> will fade out and disappear
            $(this).parent().delay(300).slideUp(500, function() { // Animation to slide remaining <div>'s up
                $(this).remove(); //Once <div></div> has disappeared
            });
        });
    });
    
// ON HOVER, MOVE ERASER
    $('div.delete').mouseover(function(){
        $(this).css("right", "12.4em");
    });
    
// ON MOUSEOUT, MOVE ERASER BACK
    $('div.delete').mouseout(function(){
        $(this).css("right", "12em");
    });
    
// DONE DELETING ITEM //

    
    
    
    
});