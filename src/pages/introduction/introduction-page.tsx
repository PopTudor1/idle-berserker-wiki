import "./introduction-page.css";

const fakeData = Array.from({ length: 50 }, (_, i) => ({
  title: `Berserker Tip #${i + 1}`,
  description: `This is a description for tip #${
    i + 1
  }. Learn how to optimize your build, manage skills, and defeat bosses more efficiently.`,
}));

export default function IntroductionPage() {
  return (
    <>
      <h1 style={{ color: "white" }}>INTRODUCTION PAGE</h1>
      <div className="long-page-container">
        <h1 style={{ color: "white" }} className="long-page-title">
          🔥 Berserker Strategy Guide
        </h1>

        {fakeData.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
