import React from "react";

export default function ProjectsSection() {
  return (
    <section className="projects-section py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8">
          <div className="project-card p-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">B6</h3>
            <h4 className="text-xl mb-2"></h4>
            <p className="text-gray-600">2022.01 - 2022.12</p>
            <div className="mt-4 space-y-2">{/* Add project details */}</div>
          </div>
          <div className="project-preview p-6 bg-gray-100 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              {/* Add project preview image */}
            </div>
          </div>
        </div>
        <div className="text-right mt-8">
          <h2 className="text-3xl font-bold">2 PROJECTS</h2>
        </div>
      </div>
    </section>
  );
}
