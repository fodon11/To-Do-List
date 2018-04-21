//Add task to list
$('.btn').click(function(){
    let input = prompt('What else would you like to do?');
    console.log('User input: ', input);
    //place input into HTML
    let addedTask = '<li><span>' + input + '</span><i class="fa fa-trash-o" aria-hidden="true"></i></li>'
    //target 'ul' with id 'task-list' and append 
    $('#task-list').append(addedTask)
})

//Delete task 
//Target 'fa' class on trash can to delete its respective parent
$('.fa').click(function(){
    //target parent of element clicked
    $(this).parent().remove();
    console.log('wassup')
})