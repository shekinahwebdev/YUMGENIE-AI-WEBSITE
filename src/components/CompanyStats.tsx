const CompanyStats = () => {
  const stats = [
    { number: "300+", label: "Years of Experience" },
    { number: "500+", label: "Experts of Cook" },
    { number: "500+", label: "Branches in the World" },
    { number: "500+", label: "Project Done" },
  ];

  return (
    <section className="company-stats">
      <h1 className="company-stats-title">OUR RESULTS</h1>
      <p className="company-stats-subtitle">What We Did?</p>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <p className="result_number">{stat.number}</p>
            <p className="result_label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
