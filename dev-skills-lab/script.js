const myList = [];
let $input = $('#input');
let $button = $('#.add-button');
let $ul = $('#ul');

$('myList').on('click', '#remove', function() {
    $(this).closest('li').remove();
});

$('button').click(function() {
    console.log('click');
})

 