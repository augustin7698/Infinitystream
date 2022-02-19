tableLink = [
	"https://embed-of-my-video.mp4",
	"https://embed-of-my-video.fr",
	"https://embed-of-my-video2.com"
];

tablePicture = [
	"https://img.com/src/film.jpg",
	"myimg.png",
	"gif.gif"
];

tableName = [
	"My Animation",
	"Film name",
	"Documentaire"
];

tableLabel = [
	"animation",
	"film",
	"documentaire"
];

for (var i = Math.floor(Math.random(100) * 100) - 1; i >= 0; i--) {
	firstLink = tableLink.shift();
	tableLink = tableLink.concat([firstLink]);

	firstPicture = tablePicture.shift();
	tablePicture = tablePicture.concat([firstPicture]);

	firstName = tableName.shift();
	tableName = tableName.concat([firstName]);

	firstLabel = tableLabel.shift();
	tableLabel = tableLabel.concat([firstLabel]);
}
