import Banner from "./_components/banner";
import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
