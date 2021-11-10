export const getDurationText = (minutes) => {
	const minutesAsNumber = +minutes;
	const hours = Math.floor(minutesAsNumber / 60);
	const min = minutesAsNumber % 60;
	const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
	const minStr = min < 10 ? `0${min}` : `${min}`;
	return `${hoursStr}:${minStr} Hours`;
};
