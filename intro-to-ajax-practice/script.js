const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

// Event listener
$('form').on('submit', handleGetData)

function handleGetData(event) {
    // prevents the default behavior
    event.preventDefault()
    const userInput = $input.val()
    console.log('userInput', userInput);

    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=ab90f378&t=' + userInput,
    }).then(
        // success...callback num1 
        (data) => {
            console.log('data', data)
            render(data)
        },
        // failure...callback num2
        (error) => {
            console.log('error', error)
        }
    );
}

function render(data) {
    $title.text(data.Title)
    $year.text(data.Year)
    $rated.text(data.Rated)
}





//console.log('promise.responseJSON', promise.responseJSON);