import { z } from "zod";

export const formSchema = z.object({
	name: z.string({ message: "名前は必須です" }).min(1, "名前は必須です"),
	email: z
		.string({ message: "メールアドレスは必須です" })
		.email("有効なメールアドレスを入力してください"),
	tel: z
		.string()
		.regex(/^(?:\+[0-9]{1,3}[-\s.]?)?\d{2,4}[-\s.]?\d{2,4}[-\s.]?\d{4}$/, {
			message: "無効な形式です",
		})
		.optional(),
	inquiry: z.string({ message: "お問い合わせ内容は必須です" }).min(1, "お問い合わせ内容は必須です"),
});
