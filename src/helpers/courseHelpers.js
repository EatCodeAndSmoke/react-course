const getCourseAuthorNames = (course, authors) => {
	const str = course.authors
		.map((authorId) => authors.find((a) => a.id === authorId))
		.map((a) => a?.name)
		.join(', ');

	return str;
};

export default getCourseAuthorNames;
