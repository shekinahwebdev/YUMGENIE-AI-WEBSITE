import "./CompanyStats.css";

const CompanyStats = () => {
  const stats = [
    { number: "400+", label: "Years of Experience" },
    { number: "230+", label: "Experts of Cook" },
    { number: "300+", label: "Branches in the World" },
    { number: "100+", label: "Sponsorship" },
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
