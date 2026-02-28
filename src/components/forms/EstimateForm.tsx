"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

const formSchema = z.object({
    name: z.string().min(2, "Введите корректное имя или название компании"),
    phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, "Введите корректный номер телефона (например, +77001010660)"),
    email: z.string().email("Введите корректный email-адрес"),
    serviceType: z.string().min(1, "Выберите вид работ"),
    location: z.string().min(1, "Выберите локацию"),
    comment: z.string().optional(),
    agreement: z.boolean().refine((val) => val === true, {
        message: "Необходимо согласие с политикой конфиденциальности",
    }),
});

export default function EstimateForm() {
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

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form Values:", values);
        // TODO: Implement API POST to /api/contact
        alert("Заявка успешно отправлена! Мы свяжемся с вами в течение 2 часов.");
        form.reset();
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
                                    <Input placeholder="+7 (___) ___-__-__" {...field} />
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
                                <FormLabel className="text-sm font-normal text-text-secondary cursor-pointer">
                                    Я согласен(на) на обработку персональных данных и принимаю условия политики конфиденциальности.
                                </FormLabel>
                                <FormMessage />
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full h-12 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-lg font-medium text-lg transition-colors">
                    Отправить заявку
                </Button>
            </form>
        </Form>
    );
}
