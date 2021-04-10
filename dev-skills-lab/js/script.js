const myList = [];
let $input = $('#input');
let $button = $('#add-button');
let $ul = $('#ul');

$('myList').on('click', '#remove', function() {
    $(this).closest('li').remove();
});

$('button').click(function() {
    console.log('click');
})

$('button').click(function(){
    console.log('click');
    let myList = $('input').val();
    $('input').val('');
    const $li = $('<li>' +myList+ '</li>')
    const $deleteButton = $('<button id ="remove">' + 'X' + '</button>');
    $li.append($deleteButton)
    $('#myList').append($li);
});