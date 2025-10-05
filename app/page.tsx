import { Hero } from '@/components/home/hero'
import { ValueProps } from '@/components/home/value-props'
import { FeaturedInventory } from '@/components/home/featured-inventory'
import { AuctionAccessTeaser } from '@/components/home/auction-access-teaser'
import { FinancingTeaser } from '@/components/home/financing-teaser'
import { Testimonials } from '@/components/home/testimonials'
import { InstagramFeed } from '@/components/home/instagram-feed'
import { BilingualBanner } from '@/components/home/bilingual-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BilingualBanner />
      <ValueProps />
      <FeaturedInventory />
      <AuctionAccessTeaser />
      <FinancingTeaser />
      <Testimonials />
      <InstagramFeed />
    </>
  )
}