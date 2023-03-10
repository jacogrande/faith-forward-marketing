const getForegroundColor = (backgroundColor: string): string => {
	const color = backgroundColor.replace('#', '');
	const r = parseInt(color.substring(0, 2), 16);
	const g = parseInt(color.substring(2, 4), 16);
	const b = parseInt(color.substring(4, 6), 16);
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return luminance > 0.5 ? 'boldGrey' : 'white';
};

export default getForegroundColor;
