"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formatKzPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length === 0) return "";
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
    if (digits.length <= 7) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
};

const stripPhone = (value: string): string => value.replace(/\D/g, "");

const formSchema = z.object({
    name: z.string().min(2, "Введите корректное имя или название компании"),
    phone: z.string()
        .transform(stripPhone)
        .pipe(z.string().regex(/^7\d{10}$/, "Введите корректный номер (11 цифр, начиная с 7)")),
    email: z.string().email("Введите корректный email-адрес"),
    serviceType: z.string().min(1, "Выберите вид работ"),
    location: z.string().min(1, "Выберите локацию"),
    comment: z.string().optional(),
    agreement: z.boolean().refine((val) => val === true, {
        message: "Необходимо согласие с политикой конфиденциальности",
    }),
});

export default function EstimateForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            serviceType: "",
            location: "",
            comment: "",
            agreement: false,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: values.name,
                    phone: `+${values.phone}`,
                    email: values.email,
                    serviceType: values.serviceType,
                    location: values.location,
                    comment: values.comment,
                }),
            });

            if (!response.ok) throw new Error("Failed to send");

            setSubmitStatus("success");
            form.reset();
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя / Компания *</FormLabel>
                            <FormControl>
                                <Input placeholder="Например, ТОО «СтройСервис»" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Телефон *</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+7 (700) 101-06-60"
                                        type="tel"
                                        inputMode="numeric"
                                        value={field.value}
                                        onChange={(e) => {
                                            const formatted = formatKzPhone(e.target.value);
                                            field.onChange(formatted);
                                        }}
                                        onFocus={(e) => {
                                            if (!e.target.value) {
                                                field.onChange("+7 (");
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                    <Input placeholder="info@company.kz" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Вид работ *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Выберите из списка" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="plumbing">Сантехнические системы</SelectItem>
                                        <SelectItem value="welding">Сварочные работы</SelectItem>
                                        <SelectItem value="turnkey">Строительство «под ключ»</SelectItem>
                                        <SelectItem value="roads">Строительство дорог</SelectItem>
                                        <SelectItem value="rvs">Строительство РВС</SelectItem>
                                        <SelectItem value="pipelines">Строительство нефтепроводов</SelectItem>
                                        <SelectItem value="multiple">Несколько видов работ</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Локация *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Укажите локацию объекта" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="atyrau">Атырау</SelectItem>
                                        <SelectItem value="tengiz">Тенгиз</SelectItem>
                                        <SelectItem value="kulsary">Кульсары</SelectItem>
                                        <SelectItem value="other">Другое месторождение</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Комментарий к задаче (опционально)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Опишите объемы, сроки или другие важные детали..."
                                    className="resize-none h-24"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Note: File upload omitted for brevity on front-end MVP. Will be handled in later iterations. */}

                <FormField
                    control={form.control}
                    name="agreement"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border rounded-xl bg-bg-card">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <label htmlFor="agreement" className="text-sm font-normal text-text-secondary cursor-pointer leading-relaxed">
                                    Я согласен(на) на обработку персональных данных и принимаю условия <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline" onClick={(e) => e.stopPropagation()}>политики конфиденциальности</a>.
                                </label>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-lg font-medium text-lg transition-colors disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Отправка...
                        </span>
                    ) : (
                        "Отправить заявку"
                    )}
                </Button>

                {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center">
                        Заявка успешно отправлена! Мы свяжемся с вами в течение 2 часов.
                    </div>
                )}
                {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                        Ошибка отправки. Попробуйте ещё раз или позвоните нам: +7 700 101 0660
                    </div>
                )}
            </form>
        </Form>
    );
}
