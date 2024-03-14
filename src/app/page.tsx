import {SparklesPreview} from "@/components/component/Hero";
import Cta from "@/components/component/Cta";
import Faq from "@/components/component/Faq";
import Feature from "@/components/component/Feature";

export default async function Home() {


  return (
    <main>
      <section>
     <SparklesPreview/>
     <Feature/>
     <Cta/>
     <Faq/>

      </section>



      
    </main>
  );
}
