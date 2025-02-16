export type Skill = {
	text: string;
	iconSrc: string;
	star: SkillLevel;
};

export type SkillLevel = 0 | 1 | 2 | 3;
