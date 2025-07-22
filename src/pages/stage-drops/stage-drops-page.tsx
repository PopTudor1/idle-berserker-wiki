import stageDrops1Preview from "../../assets/stage-drops-1.png";
import stageDrops2Preview from "../../assets/stage-drops-2.png";
import stageDrops3Preview from "../../assets/stage-drops-3.png";
import stageDrops4Preview from "../../assets/stage-drops-4.png";

export default function StageDropsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Stage Drops &amp; Stage Essence</h1>
        <p>
          You get <strong>SEs</strong> after reaching{" "}
          <strong>Ch 1 Hard difficulty</strong>. Sometimes, these two things are
          easy to miss <em>(especially SEs)</em>.
        </p>
        <p>
          <strong>SDs</strong> play an important role in what items are going to
          be dropped based on your stage progression.
          <strong>SEs</strong>, on the other hand, play a minimal role, granting
          several stat boosts. Even though it's less, it's still worth investing
          in.
        </p>
        <p>
          There are 5 types of SEs, each one is dropped in the area you are in:
        </p>
        <ul>
          <li>Ancient Forest</li>
          <li>Crimson Earth</li>
          <li>Cave of Evil Spirits</li>
          <li>Arctic Land</li>
          <li>Ruined Desert</li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>How to Check Stage Teleport</h1>
        <p>
          To check, click on <strong>Stage Teleport</strong>.<br />
          Here you will see your <strong>Stage Progression</strong>.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={stageDrops1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          To get consistent drops, you need to go to a stage where your skills
          can <strong>1-shot</strong> using the{" "}
          <strong>Farm Skillset &amp; Mastery</strong>.
        </p>
        <p>I have highlighted the drops in each group with different colors:</p>
        <ul>
          <li>
            🟦 - Drops <strong>Exp, Coins, Ench. stones &amp; Dice</strong>.
          </li>
          <li>
            🟥 - Drops <strong>Equipments</strong> based on the stage you are
            farming.
          </li>
          <li>
            ⬜ - Drops <strong>Companion equipments</strong> based on the stage
            you are farming.
          </li>
          <li>
            🟩 - Drops <strong>Stage Essence</strong> based on the area (Arctic
            Land, Crimson Earth, etc.){" "}
            <em>
              (ECs drop rate is consistent regardless of what stage you are in)
            </em>
            .
          </li>
          <li>
            🟨 - Access <strong>SE</strong> to upgrade the stats.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={stageDrops2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <p>
          After you find your way to <strong>EC</strong>, it’s divided into 5
          based on areas.
          <br />
          You can also see the total effect of your stats in all 5 areas on the
          top left.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={stageDrops3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <p>
          This is where you use your <strong>SEs</strong> to upgrade your stats.
        </p>
        <p>
          I suggest leveling all stats once, then moving on to the next area and
          doing the same, so that all of them are upgraded consistently like the
          pic below.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={stageDrops4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
