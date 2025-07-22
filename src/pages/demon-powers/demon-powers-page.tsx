import demonPowers1Preview from "../../assets/demon-powers-1.png";
import demonPowers2Preview from "../../assets/demon-powers-2.png";
import demonPowers3Preview from "../../assets/demon-powers-3.png";
import demonPowers4Preview from "../../assets/demon-powers-4.png";

export default function DemonPowersPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Demon Power System</h1>

        <p>A new system, primarily a pay-to-win feature.</p>
        <p>Available after Stage 500 and requires having an SSR equipment.</p>

        <h2>What is Demon Power?</h2>
        <p>Demon Power (DP) increases the Attack and Health of a weapon.</p>

        <h2>Upgrading Demon Power</h2>
        <p>DP requires Darkness Energy (DE) to upgrade.</p>
        <p>Obtaining DE is limited to 100 per day.</p>
        <p>
          If Demon Power upgrade fails 10 times consecutively, you get a 100%
          success rate on the next upgrade.
        </p>

        <h3>Note for F2P Players</h3>
        <p>
          I know it sucks for free-to-play players — idle games are meant for
          whales and often have pay-to-win features. Just have some fun :)
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={demonPowers1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h2>Additional Materials</h2>
        <p>
          The use of these materials increases the success chance of DP
          upgrades.
        </p>
        <ul>
          <li>Hellfire - 1.52% success increase per piece (Max 5)</li>
          <li>Ashes of the Dead - 3.03% success increase per piece (Max 5)</li>
          <li>Heart of the Demon - 7.58% success increase per piece (Max 5)</li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={demonPowers2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h3>Important Tips</h3>
        <p>
          <strong>Note:</strong> Tip by Azazel &amp; DEATHXRDER
        </p>
        <p>
          Do NOT focus upgrades on singular equipments; the bonus stacks across
          all equipments (Attack and HP).
        </p>
        <p>
          As you upgrade, the cost goes up, but the success probability
          decreases every 10th level (see the picture above).
        </p>
        <p>Try to spread your upgrades for efficiency.</p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={demonPowers3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={demonPowers4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h3>Note for F2P Players</h3>
        <p>
          I know it sucks for free-to-play players — idle games are meant for
          whales and often have pay-to-win features. Just have some fun :)
        </p>
      </div>
    </div>
  );
}
