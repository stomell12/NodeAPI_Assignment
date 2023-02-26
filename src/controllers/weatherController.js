exports.weather_forecast = function (req, res) {
  //list forecast
  let forecast = [
    {
      Temp: 90.5,

      Unit: 'fahrenheit',

      Cloudy: false,

      PrecipitationChance: 0,
    },
  ];
  res.render('weather', { forecast });
};
