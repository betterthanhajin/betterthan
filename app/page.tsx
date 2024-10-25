import HexagonFloor from "@/components/HexagonFloor";
import Layout from "@/components/Layout";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        <section className="museum-section py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">MUSEUM</h1>
            <HexagonFloor floor="1F" />
          </div>
        </section>
        <section className="work-section py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">WORK</h1>
            <HexagonFloor floor="2F" />
          </div>
        </section>
        <ProjectsSection />
      </main>
    </Layout>
  );
}
