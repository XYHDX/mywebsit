// 'use client'; // Removed - Component is static

const ProfessionalSummary = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Professional Summary</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Results-driven IT Engineer and Robotics Specialist with over 3 years of experience leading
              teams, designing robotic systems, and optimizing IT infrastructures. Demonstrated success
              in mentoring junior engineers and students, and recognized for implementing robust IT
              solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Skilled in emerging technologies and cross-functional collaboration to drive
              innovation. Passionate about robotics education and developing next-generation technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
