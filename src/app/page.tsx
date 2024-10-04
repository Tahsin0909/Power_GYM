import Banner from "@/components/banner/Banner";
import Counter from "@/components/counter/Counter";
import FeedBack from "@/components/feadback/Feadback";
import Services from "@/components/services/Services";
import Footer from "@/components/shared/footer/Footer";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <FeedBack />
      <Counter />
      <Services/>
      <Footer/>
    </div>
  );
}
