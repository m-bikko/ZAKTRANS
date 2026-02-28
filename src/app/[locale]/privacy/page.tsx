import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { ChevronRight, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Политика конфиденциальности | ZAK Trans",
    description: "Политика конфиденциальности и обработки персональных данных ZAK Trans.",
};

export default function PrivacyPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    setRequestLocale(locale);

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 border-b border-border bg-bg-primary">
                <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-text-primary">
                    <nav className="flex items-center justify-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">Главная</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">Конфиденциальность</span>
                    </nav>

                    <Shield className="w-16 h-16 text-accent-blue mx-auto mb-6" />
                    <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Политика конфиденциальности
                    </h1>
                    <p className="text-lg text-text-secondary">
                        Последнее обновление: 15 мая 2024 г.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 md:px-8 prose prose-zinc dark:prose-invert">
                    <p className="text-text-secondary leading-relaxed">
                        Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей, которые может получить ТОО «ZAK Trans» во время использования сайта zaktrans.kz.
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">1. Общие положения</h2>
                    <p className="text-text-secondary leading-relaxed">
                        1.1. Использование Сайта Пользователем означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных.<br />
                        1.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сайта.
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">2. Предмет политики конфиденциальности</h2>
                    <p className="text-text-secondary leading-relaxed">
                        2.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет по запросу Администрации сайта при заполнении форм обратной связи (запрос КП).<br />
                        2.2. Персональные данные, разрешённые к обработке:
                    </p>
                    <ul className="text-text-secondary list-disc pl-6 space-y-2 mb-6">
                        <li>Имя пользователя;</li>
                        <li>Контактный телефон;</li>
                        <li>Название компании (опционально);</li>
                        <li>Дополнительная информация в комментариях.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">3. Цели сбора данных</h2>
                    <p className="text-text-secondary leading-relaxed">
                        Данные собираются исключительно в целях:<br />
                        - Установления с Пользователем обратной связи, включая направление уведомлений, оказание услуг, обработку запросов и заявок.<br />
                        - Предоставления Пользователю расчетно-сметной документации (КП) по его запросу.
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">4. Защита данных</h2>
                    <p className="text-text-secondary leading-relaxed">
                        Администрация применяет необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц. Мы не передаем данные третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РК.
                    </p>

                    <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">5. Контакты связи</h2>
                    <p className="text-text-secondary leading-relaxed">
                        Любые вопросы или предложения по настоящей Политике можно направить по электронной почте:
                        <a href="mailto:info@zaktrans.kz" className="text-accent-blue hover:underline ml-1">info@zaktrans.kz</a>
                    </p>
                </div>
            </section>

        </main>
    );
}
