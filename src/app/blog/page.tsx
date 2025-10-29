import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
