'use client'

import { Hero } from "@/components/Hero/Hero";
import { Header } from '../components/Header/Header'
import { Footer } from "@/components/Footer/Footer";
import { ArticlesCardsGrid, ArticlesHeader } from "@/components/Articles/Articles";
import { ScrollButton } from "@/components/ScrollButton/ScrollButton";

export default function HomePage() {
  return (
    <>
      <Header/>
      <Hero/>
      <ScrollButton/>
      <ArticlesHeader/>
      <ArticlesCardsGrid/>
      <Footer/>
    </>
  );
}
