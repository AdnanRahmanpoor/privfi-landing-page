import Benefits from '@/components/Benefits';
import ConnectWithUs from '@/components/ConnectWithUs';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Mechanics from '@/components/Mechanics';
import PrivacyChallenges from '@/components/PrivacyChallenges';
import Resources from '@/components/Resources';
import Solutions from '@/components/Solutions';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <PrivacyChallenges />
      <Solutions />
      <Benefits />
      <Mechanics />
      <Resources/ >
      <ConnectWithUs />
      <Contact />
    </>
  );
}
