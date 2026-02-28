import HeroSection from "@/components/sections/home/HeroSection";
import TrustLogos from "@/components/sections/home/TrustLogos";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import WhyUs from "@/components/sections/home/WhyUs";
import ProjectsPreview from "@/components/sections/home/ProjectsPreview";
import HseBlock from "@/components/sections/home/HseBlock";
import ReviewsSlider from "@/components/sections/home/ReviewsSlider";
import MainForm from "@/components/sections/home/MainForm";
import ContactMap from "@/components/sections/home/ContactMap";

export default function HomePage() {
    return (
        <main className="w-full flex-1 flex flex-col">
            <HeroSection />
            <TrustLogos />
            <ServicesGrid />
            <WhyUs />
            <ProjectsPreview />
            <HseBlock />
            <ReviewsSlider />
            <MainForm />
            <ContactMap />
        </main>
    );
}
