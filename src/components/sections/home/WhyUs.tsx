"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Award, Clock, FileText, Shield, Truck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function WhyUs() {
    const t = useTranslations("whyUs");
    const cta = useTranslations("cta");

    const advantages = [
        { icon: CheckCircle, text: "20 профессиональных сотрудников в постоянном штате" },
        { icon: Award, text: "Государственная лицензия СМР 3 категории и сертификаты ISO" },
        { icon: Clock, text: "Строгое соблюдение сроков — фиксируем обязательства в договоре" },
        { icon: FileText, text: "Работа по официальному договору с прозрачной сметой" },
        { icon: Shield, text: "Безусловная гарантия на все выполненные строительно-монтажные работы" },
        { icon: Truck, text: "Собственный парк современной спецтехники в идеальном состоянии" },
    ];

    return (
        <section className="bg-bg-secondary py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left Side */}
                    <div className="w-full lg:w-[50%] flex flex-col justify-center">
                        <motion.h2 variants={itemVariants} className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Почему выбирают ZAK Trans
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-text-secondary text-lg leading-relaxed mb-10">
                            С 2022 года мы успешно реализуем проекты на ключевых нефтегазовых месторождениях Казахстана. Наш опыт, собственная техническая база и неукоснительное следование стандартам качества делают нас надежным партнером для вашего бизнеса.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <button className="flex items-center text-text-primary font-medium hover:text-accent-blue transition-colors group bg-transparent border border-border px-8 py-4 rounded-full w-fit hover:border-accent-blue">
                                {cta("quote")}
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-[50%]">
                        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                            {advantages.map((adv, index) => {
                                const Icon = adv.icon;
                                return (
                                    <motion.div key={index} variants={itemVariants} className="flex flex-col">
                                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6 text-accent-blue" />
                                        </div>
                                        <p className="text-text-primary text-sm sm:text-base leading-relaxed font-medium">
                                            {adv.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
