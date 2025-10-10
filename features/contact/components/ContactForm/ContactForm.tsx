"use client";

import { sendEmail } from "@/actions/email";
import { FilledButton } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Form";
import { useToastNotice } from "@/hooks/useToastNotice";
import { cn } from "@/utils";
import { getFormProps, getInputProps, getTextareaProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Form from "next/form";
import { useActionState } from "react";
import { VscLoading } from "react-icons/vsc";
import { formSchema } from "../../../../schemas/form";
import type { EmailResponse } from "../../types";
import { ErrorAlert } from "./ErrorAlert";
import { FormError } from "./FormError";
import { FormSection } from "./FormSection";
import { SuccessAlert } from "./SuccessAlert";

export const ContactForm = () => {
	const { add: addToastNotice } = useToastNotice();
	const [result, formAction, isPending] = useActionState<EmailResponse, FormData>(
		async (_, formData) => {
			const res = await sendEmail(formData);
			if (res) {
				if (res.success) {
					addToastNotice({ type: "info", message: res.message });
				} else {
					addToastNotice({ type: "error", message: res.message });
				}
			}
			return res;
		},
		null,
	);
	const [form, fields] = useForm({
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: formSchema });
		},
		shouldValidate: "onBlur",
		shouldRevalidate: "onInput",
	});

	return (
		<Form {...getFormProps(form)} className="mx-auto flex flex-col gap-12" action={formAction}>
			{result?.message &&
				(result.success ? (
					<SuccessAlert>{result.message}</SuccessAlert>
				) : (
					<ErrorAlert>{result.message}</ErrorAlert>
				))}
			<FormSection title="名前" required>
				<Input
					{...getInputProps(fields.name, { type: "text" })}
					placeholder="山田 太郎"
					isError={!!fields.name.errors}
					key={fields.name.key}
				/>
				{fields.name.errors && <FormError>{fields.name.errors[0]}</FormError>}
			</FormSection>
			<FormSection title="メールアドレス" required>
				<Input
					{...getInputProps(fields.email, { type: "email" })}
					placeholder="youremail@example.com"
					isError={!!fields.email.errors}
					key={fields.email.key}
				/>
				{fields.email.errors && <FormError>{fields.email.errors[0]}</FormError>}
			</FormSection>
			<FormSection title="電話番号">
				<Input
					{...getInputProps(fields.tel, { type: "tel" })}
					placeholder="09012345678"
					isError={!!fields.tel.errors}
					key={fields.tel.key}
				/>
				<ul className="mt-2 list-disc pl-6 text-primary-text/50 text-sm">
					<li>区切り文字を使う場合は、「-(ハイフン)」「.(ドット)」「半角スペース」が使えます</li>
					<li>国際電話番号の場合は、最初に+(プラスマーク)をつけてください</li>
				</ul>
				{fields.tel.errors && <FormError>{fields.tel.errors[0]}</FormError>}
			</FormSection>
			<FormSection title="お問い合わせ内容" required>
				<Textarea
					{...getTextareaProps(fields.inquiry)}
					rows={10}
					placeholder="お問い合わせ内容を入力してください"
					isError={!!fields.inquiry.errors}
					key={fields.inquiry.key}
				/>
				{fields.inquiry.errors && <FormError>{fields.inquiry.errors[0]}</FormError>}
			</FormSection>

			<div className="flex justify-center">
				<FilledButton
					className={cn(
						"flex w-full max-w-sm items-center justify-center gap-2",
						"disabled:border-neutral-700 disabled:bg-neutral-700",
					)}
					type="submit"
					disabled={isPending}
				>
					{isPending ? (
						<>
							<VscLoading className="animate-spin" />
							送信
						</>
					) : (
						"送信"
					)}
				</FilledButton>
			</div>
		</Form>
	);
};
