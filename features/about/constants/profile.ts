const birthYear = 2001;
const birthMonth = 5;
const birthDate = 16;
const today = new Date();
const birthdate = new Date(birthYear, birthMonth - 1, birthDate);
const yearDiff = today.getFullYear() - birthdate.getFullYear();
const monthDiff = today.getMonth() - birthdate.getMonth();
const dayDiff = today.getDate() - birthdate.getDate();
// 今年の誕生日がまだ来ていない場合、年齢を1つ減らす
const age = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? yearDiff - 1 : yearDiff;

export const PROFILE = {
	name: "齋藤 豪",
	ruby: "サイトウ ゴウ",
	age: age,
	birthday: `${birthYear}/${birthMonth.toString().padStart(2, "0")}/${birthDate.toString().padStart(2, "0")}`,
	bloodType: "A(+)",
	birthPlace: "愛知県 名古屋市",
	job: "自動車部品の試作品組立",
	hobbies: ["プログラミング", "ゲーム", "旅行", "ドライブ", "コスプレ"],
	message: "これからの時代、全てのアプリはWebアプリに置き換わる",
};
