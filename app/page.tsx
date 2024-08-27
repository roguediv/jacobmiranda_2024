import Header from "@/components/$main/Header"
import SctHire from "@/components/parts/home/SctHire";
import SctAbout from "@/components/parts/home/SctAbout";
import SctEducation from "@/components/parts/home/SctEducation";
import SctWorks from "@/components/parts/home/SctWorks";

export default function Home() {
  return (
    <div id="pge-home">
      <Header page="home"/>
      <SctHire />
      <SctAbout />
      <SctEducation />
      <SctWorks />
    </div>
  );
}
