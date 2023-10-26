import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="container px-12 py-4 mt-24 mx-auto">
       
      <Hero />
      <AboutSection />
      <ContactSection />
      </div>
    </main>
  )
}

