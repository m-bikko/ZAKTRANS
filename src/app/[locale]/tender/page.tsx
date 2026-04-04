"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronRight, Download, FileText, CheckCircle2, Building, Mail, Phone, ExternalLink, Globe } from "lucide-react";
import EstimateForm from "@/components/forms/EstimateForm";

type LangKey = "kz" | "ru" | "en";

interface IsoDocument {
    id: number;
    title: string;
    number: string;
    issuer: string;
    date: string;
    category: "iso";
    files: Record<LangKey, string>;
}

interface SingleDocument {
    id: number;
    title: string;
    number: string;
    issuer: string;
    date: string;
    category: "license" | "letter" | "registration";
    file: string;
}

type DocumentItem = IsoDocument | SingleDocument;

const isIsoDocument = (doc: DocumentItem): doc is IsoDocument => doc.category === "iso";

const documents: DocumentItem[] = [
    {
        id: 1,
        title: "ISO 9001:2015",
        number: "KZ.02.01.07882-2024",
        issuer: "QS Certification",
        date: "2024–2027",
        category: "iso",
        files: {
            kz: "/docs/zak-trans-9001-kz.pdf",
            ru: "/docs/zak-trans-9001-ru.pdf",
            en: "/docs/zak-trans-9001-en.pdf",
        },
    },
    {
        id: 2,
        title: "ISO 14001:2015",
        number: "KZ.02.01.07883-2024",
        issuer: "QS Certification",
        date: "2024–2027",
        category: "iso",
        files: {
            kz: "/docs/zak-trans-14001-kz.pdf",
            ru: "/docs/zak-trans-14001-ru.pdf",
            en: "/docs/zak-trans-14001-en.pdf",
        },
    },
    {
        id: 3,
        title: "ISO 45001:2018",
        number: "KZ.02.01.07884-2024",
        issuer: "QS Certification",
        date: "2024–2027",
        category: "iso",
        files: {
            kz: "/docs/zak-trans-45001-kz.pdf",
            ru: "/docs/zak-trans-45001-ru.pdf",
            en: "/docs/zak-trans-45001-en.pdf",
        },
    },
    {
        id: 4,
        title: "tender.docLicenseSmr",
        number: "",
        issuer: "",
        date: "",
        category: "license",
        file: "/docs/license-smr.pdf",
    },
    {
        id: 5,
        title: "tender.docRecommendation1",
        number: "",
        issuer: "",
        date: "",
        category: "letter",
        file: "/docs/recommendation-letter-1.pdf",
    },
    {
        id: 6,
        title: "tender.docRecommendation2",
        number: "",
        issuer: "",
        date: "",
        category: "letter",
        file: "/docs/recommendation-letter-2.pdf",
    },
    {
        id: 7,
        title: "tender.docStateRegistration",
        number: "",
        issuer: "",
        date: "",
        category: "registration",
        file: "/docs/state-registration.pdf",
    },
];

const LANG_LABELS: Record<LangKey, string> = { kz: "KZ", ru: "RU", en: "EN" };

export default function TenderPage() {
    const [isoLangs, setIsoLangs] = useState<Record<number, LangKey>>({
        1: "ru",
        2: "ru",
        3: "ru",
    });
    const t = useTranslations("tender");

    const getDocTitle = (doc: DocumentItem): string => {
        if (doc.title.startsWith("tender.")) {
            return t(doc.title.replace("tender.", ""));
        }
        return doc.title;
    };

    const getDocFile = (doc: DocumentItem): string => {
        if (isIsoDocument(doc)) {
            return doc.files[isoLangs[doc.id] ?? "ru"];
        }
        return doc.file;
    };

    const handleIsoLangChange = (docId: number, lang: LangKey) => {
        setIsoLangs((prev) => ({ ...prev, [docId]: lang }));
    };

    return (
        <main className="w-full flex-1 flex flex-col min-h-screen bg-bg-secondary">

            {/* 1. Page Hero */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-bg-primary overflow-hidden border-b border-border">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <nav className="flex items-center text-sm font-medium text-text-muted mb-8">
                        <Link href="/" className="hover:text-accent-blue transition-colors">{t("breadcrumbHome")}</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-text-primary">{t("breadcrumbTender")}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                        <div className="max-w-3xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6">
                                {t("titlePrefix")} <span className="text-accent-blue">{t("titleHighlight")}</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed mb-8">
                                {t("subtitle")}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="/docs/recommendation-letter-1.pdf"
                                    download
                                    className="flex items-center space-x-2 bg-text-primary text-bg-primary px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>{t("downloadPresentation")}</span>
                                </a>
                                <a
                                    href="/docs/state-registration.pdf"
                                    download
                                    className="flex items-center space-x-2 bg-bg-elevated text-text-primary border border-border px-6 py-3 rounded-full font-medium hover:border-accent-blue/50 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>{t("downloadRequisites")}</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-bg-card border border-border p-6 rounded-2xl w-full md:w-80 shrink-0">
                            <h3 className="font-bold text-text-primary mb-4">{t("tenderDepartment")}</h3>
                            <div className="space-y-4">
                                <div className="flex items-start text-sm text-text-secondary">
                                    <Phone className="w-4 h-4 text-accent-blue mt-0.5 mr-3 shrink-0" />
                                    <div>
                                        <div className="font-medium text-text-primary">+7 700 101 0660</div>
                                        <div className="text-text-muted">{t("phoneDescription")}</div>
                                    </div>
                                </div>
                                <div className="flex items-start text-sm text-text-secondary">
                                    <Mail className="w-4 h-4 text-accent-blue mt-0.5 mr-3 shrink-0" />
                                    <div>
                                        <div className="font-medium text-text-primary text-wrap break-all">tender@zaktrans.kz</div>
                                        <div className="text-text-muted">{t("emailDescription")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Requisites & Core Info */}
            <section className="py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Requisites Table */}
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 flex items-center">
                                <Building className="w-8 h-8 text-accent-blue mr-4" />
                                {t("companyDetails")}
                            </h2>
                            <div className="bg-bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <tbody className="divide-y divide-border">
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium w-1/3">{t("reqName")}</th>
                                            <td className="py-4 px-6 font-bold text-text-primary">ТОО «ZAK Trans»</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">{t("reqBin")}</th>
                                            <td className="py-4 px-6 font-bold text-text-primary font-mono tracking-wider">220340003406</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">{t("reqLegalAddress")}</th>
                                            <td className="py-4 px-6 text-text-primary">РК, Атырауская обл., г. Атырау, пр-т Абулхаир Хана, строение 91 Коворкинг Center Infinity</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">{t("reqActualAddress")}</th>
                                            <td className="py-4 px-6 text-text-primary">РК, Атырауская обл., г. Атырау, ул. Сырым Датов, Корпус 1</td>
                                        </tr>
                                        <tr className="hover:bg-bg-elevated transition-colors">
                                            <th className="py-4 px-6 text-text-muted font-medium">{t("reqDirector")}</th>
                                            <td className="py-4 px-6 text-text-primary">{t("reqDirectorValue")}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Competencies */}
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-8 flex items-center">
                                <CheckCircle2 className="w-8 h-8 text-accent-blue mr-4" />
                                {t("competencies")}
                            </h2>
                            <div className="space-y-6">
                                <p className="text-text-secondary leading-relaxed">
                                    {t("competenciesDescription")}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {([
                                        "competency1",
                                        "competency2",
                                        "competency3",
                                        "competency4",
                                        "competency5",
                                        "competency6",
                                    ] as const).map((key) => (
                                        <li key={key} className="flex items-start text-sm text-text-primary bg-bg-elevated border border-border p-4 rounded-xl">
                                            <CheckCircle2 className="w-4 h-4 text-accent-blue mr-3 shrink-0 mt-0.5" />
                                            <span className="font-medium">{t(key)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Licenses & ISO Certificates */}
            <section className="py-20 bg-bg-primary border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="font-heading text-3xl font-bold text-text-primary mb-12 text-center">{t("licensesTitle")}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {documents.map((doc) => {
                            const filePath = getDocFile(doc);
                            return (
                                <div key={doc.id} className="bg-bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-accent-blue/50 transition-colors">
                                    {/* Inline PDF Preview */}
                                    <div className="relative h-[360px] bg-white border-b border-border overflow-hidden">
                                        <iframe
                                            key={filePath}
                                            src={`${filePath}#toolbar=0&navpanes=0&scrollbar=0`}
                                            className="w-full h-full"
                                            title={getDocTitle(doc)}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 flex-1 flex flex-col gap-3">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-text-primary text-base mb-1">{getDocTitle(doc)}</h4>
                                                {doc.number && (
                                                    <div className="text-xs text-text-muted font-mono">{doc.number}</div>
                                                )}
                                            </div>
                                            <FileText className="w-5 h-5 text-text-muted shrink-0 mt-0.5" />
                                        </div>

                                        {(doc.issuer || doc.date) && (
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
                                                {doc.issuer && <span>{t("issuedBy")}: {doc.issuer}</span>}
                                                {doc.date && <span>{t("validPeriod")}: {doc.date}</span>}
                                            </div>
                                        )}

                                        {/* ISO Language Selector */}
                                        {isIsoDocument(doc) && (
                                            <div className="flex items-center gap-1">
                                                <Globe className="w-3.5 h-3.5 text-text-muted mr-1" />
                                                {(Object.keys(LANG_LABELS) as LangKey[]).map((lang) => (
                                                    <button
                                                        key={lang}
                                                        onClick={() => handleIsoLangChange(doc.id, lang)}
                                                        className={`px-2.5 py-1 text-xs font-bold rounded transition-colors ${
                                                            (isoLangs[doc.id] ?? "ru") === lang
                                                                ? "bg-accent-blue text-white"
                                                                : "bg-bg-elevated text-text-muted hover:text-text-primary border border-border"
                                                        }`}
                                                    >
                                                        {LANG_LABELS[lang]}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 pt-2 border-t border-border mt-auto">
                                            <a
                                                href={filePath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-text-secondary text-sm hover:text-accent-blue transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                {t("openInNewTab")}
                                            </a>
                                            <a
                                                href={filePath}
                                                download
                                                className="flex items-center gap-1.5 text-accent-blue text-sm font-medium hover:underline ml-auto"
                                            >
                                                <Download className="w-4 h-4" />
                                                {t("downloadPdf")}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Request Form */}
            <section className="py-20 bg-bg-primary border-t border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">{t("requestTitle")}</h2>
                            <p className="text-text-secondary">{t("requestDescription")}</p>
                        </div>
                        <EstimateForm />
                    </div>
                </div>
            </section>

        </main>
    );
}
