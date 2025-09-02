import { z } from "zod"

export const MailSchema = z.object({
    title: z.string().min(1, "件名を入力してください"),
    main: z.string()
        .min(10, "本文は10文字以上入力してください")
        .max(255, "255文字以内で入力してください"),
});

export type MailFormData = z.infer<typeof MailSchema>;