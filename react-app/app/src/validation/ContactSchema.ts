import { z } from "zod"

export const ContactSchema = z.object({
    firstName: z.string().min(1, "苗字を入力してください"),
    lastName: z.string().min(1, "名前を入力してください"),
    tell: z
        .string()
        .min(10, "電話番号は10桁以上で入力してください")
        .regex(/^[0-9\-]+$/, "数字とハイフンのみ使用できます"),
    email: z.string()
        .min(1, "メールアドレスを入力してください")
        .email("メールアドレスの形式が正しくありません"),
    content: z.string()
        .min(10, "お問い合わせ内容は10文字以上入力してください")
        .max(255, "255文字以内で入力してください"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;