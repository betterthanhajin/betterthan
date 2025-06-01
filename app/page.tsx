import HexagonFloor from "@/components/HexagonFloor";
import Layout from "@/components/Layout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        <section className="museum-section py-10">
          <div className="container flex justify-between mx-auto px-4">
            {/* <h1 className="text-4xl font-bold mb-8">MUSEUM</h1> */}
            <HexagonFloor floor="1F" bgColor="#2A7B9B" />
            <HexagonFloor floor="1F" bgColor="#57C785" />
            <HexagonFloor floor="1F" bgColor="#EDDD53" />
          </div>
        </section>
        <section className="work-section py-10 bg-gray-50">
          <div className="container flex justify-between mx-auto px-4">
            {/* <h1 className="text-4xl font-bold mb-8">WORK</h1> */}
            <HexagonFloor floor="2F" bgColor="#EEAECA" />
            <HexagonFloor floor="2F" bgColor="#94BBE9" />
            <HexagonFloor floor="2F" bgColor="#C2B4D9" />
          </div>
        </section>
        <ProjectsSection />
      </main>
    </Layout>
  );
}
