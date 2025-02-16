export const getAge = (year: number, month: number, day: number): number => {
	const today = new Date();
	const birthDate = new Date(year, month - 1, day); // monthは0-11なので、1を引く

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();

	// 今年の誕生日がまだ来ていない場合、年齢を1つ減らす
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
};
