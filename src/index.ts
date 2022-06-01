export function find(whatever: string, googleFontsApiKey: string, callback: (o: any) => any) {
  fetch('https://www.googleapis.com/webfonts/v1/webfonts?key='+googleFontsApiKey)
    .then(function(response) {
     return response.json();
    })
    .then(function(json) {
      console.log(json)
      callback(json)
   });
}
