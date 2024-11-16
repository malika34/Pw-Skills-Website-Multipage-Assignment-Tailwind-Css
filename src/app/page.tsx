import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Students from "@/components/Students";

const Homepage = () => {
  return (
    <section>
      <Hero />
      <Students />
      <Products />
    </section>
  );
};

export default Homepage;
