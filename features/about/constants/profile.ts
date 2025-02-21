const birthYear = 2001;
const birthMonth = 5;
const birthDate = 16;
const calcAge = () => {
	const today = new Date();
	const birthdate = new Date(birthYear, birthMonth - 1, birthDate);
	const val = today.getFullYear() - birthdate.getFullYear();
	const monthDiff = today.getMonth() - birthdate.getMonth();
  const dayDiff = today.getDate() - birthdate.getDate();
	// 今年の誕生日がまだ来ていない場合、年齢を1つ減らす
	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		return val - 1;
	}
	return val;
};

export const PROFILE = {
	name: "齋藤 豪",
	ruby: "サイトウ ゴウ",
	age: calcAge(),
	birthday: `${birthYear}/${birthMonth}/${birthDate}`,
	bloodType: "A(+)",
	birthPlace: "愛知県 名古屋市",
	job: "自動車部品の試作品組立",
	hobbies: ["プログラミング", "ゲーム", "旅行", "ドライブ", "コスプレ"],
	message: "これからの時代、全てのアプリはWebアプリに置き換わる",
};
