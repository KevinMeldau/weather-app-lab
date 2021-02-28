// API Key : 4ed6dbc4d1e98d1fd7e523129f5e69a4

const $city = $('#city');
const $temp = $('#temp');
const $input = $('#search');
const $icon = $('#weatherIcon');

// Handler function
$('form').on('submit', handleSubmit);

function handleSubmit(evt) {
	evt.preventDefault();
	const term = $input.val();
	$.ajax(
		'https://api.openweathermap.org/data/2.5/weather?q=' +
			term +
			'&appid=4ed6dbc4d1e98d1fd7e523129f5e69a4'
	).then(function (data) {
		$city.text(data.name);
		$temp.text(Math.round(data.main.temp) - 273);
		$icon.attr(
			'src',
			'https://openweathermap.org/img/wn/' +
				data.weather[0].icon +
				'@2x.png'
		);
	});
}
