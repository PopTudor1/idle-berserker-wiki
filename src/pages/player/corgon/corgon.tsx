import corgon1Preview from "../../../assets/corgon-1.jpg";
import corgon2Preview from "../../../assets/corgon-2.jpg";
import corgon3Preview from "../../../assets/corgon-3.jpg";
import corgon4Preview from "../../../assets/corgon-4.jpg";

export default function Corgon() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h2>🎯 How to Start Your Daily Missions Efficiently</h2>
        <ol>
          <li>
            <strong>Check your summoning tickets:</strong> Prioritize{" "}
            <em>weapons, rings, and necklaces</em> for daily summons. If you’re
            low on these, use skills and creature summons as substitutes.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={corgon1Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Use acceptable missions:</strong> Complete missions until
            you reach mileage +2, meaning you’ve completed 5 dailies.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={corgon2Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Accept easy-to-complete missions:</strong> Examples include
            triggering world stones (2× 6k and 9k), using diamonds once for 50k,
            and performing 2 summons (weapons, rings, or necklaces).
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={corgon3Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={corgon4Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </ol>
        <p>
          <strong>Note:</strong> Necklaces are the main mission to accept for
          summons since they require fewer tickets (120) compared to weapons and
          rings (600). So choose between weapons or rings for the day.
        </p>
        <p>
          Using rings as an example, here’s the points breakdown for daily
          missions:
        </p>
        <ul>
          <li>
            Summons: 150 + 145 = <strong>295 points</strong>
          </li>
          <li>
            Stones: 125 + 140 = <strong>265 points</strong>
          </li>
          <li>
            Diamonds: <strong>130 points</strong>
          </li>
        </ul>
        <p>
          <strong>Total per day:</strong> 690 points <br />
          <strong>Total per week:</strong> 4,830 points
        </p>
        <p>
          The total may vary depending on which summons you use during the week,
          but as long as you complete your missions daily, you can comfortably
          reach at least 4,000 points weekly.
        </p>
      </div>
    </div>
  );
}
