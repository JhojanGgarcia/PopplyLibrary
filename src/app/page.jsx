import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Content from "@/components/layouts/Content";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <main className="relative mx-auto min-h-screen max-w-7xl">
      <Header />
      <div className="absolute top-0 -right-4 hidden h-full w-4 border-x border-x-white bg-[image:repeating-linear-gradient(315deg,_white_0,_white_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-5 md:block dark:border-black dark:bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)]"></div>

      <div className="absolute top-0 -left-4 hidden h-full w-4 border-x border-x-white bg-[image:repeating-linear-gradient(315deg,_white_0,_white_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed opacity-5 md:block dark:border-black dark:bg-[image:repeating-linear-gradient(315deg,_black_0,_black_1px,_transparent_0,_transparent_50%)]"></div>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center">
        <div className="absolute bottom-0 left-0 z-1 h-[2px] w-full border-t border-white/10 dark:border-black/10"></div>
        <Hero />
      </section>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center">
        <div className="absolute bottom-0 left-0 z-1 h-[2px] w-full border-t border-white/10 dark:border-black/10"></div>
        <Content />
      </section>
      <section className="relative flex min-h-[20vh] flex-col items-center justify-center overflow-hidden border-t border-white/10 dark:border-black/10">
        <div className="absolute bottom-0 left-0 z-1 h-[2px] w-full border-t border-white/10 dark:border-black"></div>
        <Footer />
      </section>
    </main>
  );
}
