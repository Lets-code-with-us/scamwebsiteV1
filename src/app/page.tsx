import { SparklesPreview } from '@/components/component/Hero';
import Cta from '@/components/component/Cta';
import Feature from '@/components/component/Feature';
import ScamList from '@/components/component/ScamList';

export default function Home() {
  return (
    <main>
      <section>
        <SparklesPreview />
        <ScamList />
        <hr />
        <Feature />
        <Cta />
      </section>
    </main>
  );
}
