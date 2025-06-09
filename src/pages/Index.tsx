import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import { CartProvider } from "@/hooks/useCart";

const Index = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <MenuSection />
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Index;
