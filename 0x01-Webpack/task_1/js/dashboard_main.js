import $ from 'jquery';
import debounce from 'lodash/debounce';

const button = $('<button>').text('Click here to get started');
const count = $('<p>').attr('id', 'count');
const footer = $('<p>').text('Copyright - Holberton School');

$('body').append($('<p>').text('Holberton Dashboard'));
$('body').append($('<p>').text('Dashboard data for the students'));
$('body').append(button);
$('body').append(count);
$('body').append(footer);

let counter = 0;
function updateCounter() {
  counter++;
  count.text(`${counter} clicks on the button`);
}

button.on('click', debounce(updateCounter, 1000));
