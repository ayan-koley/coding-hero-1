function solve(today, birthday) {
	const todayDate = new Date(today);
	const birthdayDate = new Date(birthday);

	// Set the next birthday to this year
	let nextBirthday = new Date(todayDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());

	// If the birthday has already passed this year, set to next year
	if (nextBirthday < todayDate) {
		nextBirthday.setFullYear(todayDate.getFullYear() + 1);
	}

	// Calculate difference in milliseconds
	const diffTime = nextBirthday - todayDate;

	// Convert to days
	const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysLeft;
}

console.log(solve("2025-12-30", "01-01"));