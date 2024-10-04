import Banner from "@/components/banner/Banner";
import Counter from "@/components/counter/Counter";
import FeedBack from "@/components/feadback/Feadback";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <FeedBack />
      <Counter />
    </div>
  );
}
