import costumes1Preview from "../../../assets/costumes-1.png";
import costumes2Preview from "../../../assets/costumes-2.png";
import costumes3Preview from "../../../assets/costumes-3.png";
import costumes4Preview from "../../../assets/costumes-4.png";

export default function CostumesPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>👗 Costumes Guide</h1>

        <p>
          Over time, aim to build sets of <strong>4 costumes</strong> tailored
          to specific content types. Use the auto-roll feature for SR (it will
          stop on SR and SSR), but try to keep any SSRs you roll.
        </p>
        <p>This is a set:</p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={costumes1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={costumes2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          You go to each costume ability and try to have buffs for stage monster
          or buffs for stage boss.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={costumes3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          <strong>Stage Monster Set:</strong>
          <br />4 costumes with full stage monster bonuses make a stage monster
          set.
        </p>
        <p>
          <strong>Example of Stage Boss Bonuses:</strong>
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={costumes4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h3>Recommended Costume Sets:</h3>
        <ul>
          <li>
            <strong>Stage Monsters (General Farming):</strong> Focus on{" "}
            <em>Attack %</em>.
            <br />
            <small>
              (Amp. Attack is okay temporarily but not as effective long-term.)
            </small>
            <br />
            After Chapter 2, mix in <em>HP %</em>. Prioritize costumes with more
            slots.
          </li>
          <li>
            <strong>Stage Boss Monsters:</strong> Focus on <em>Attack %</em>.
          </li>
          <li>
            <strong>Dragon Boss:</strong> Optional, but helpful. Use a set
            focused on <em>Attack %</em>.
          </li>
          <li>
            <strong>Guild Boss:</strong> Another optional set using{" "}
            <em>Attack %</em>.
          </li>
        </ul>

        <p>
          Other sets are entirely optional — build them if you want more
          specialized flexibility.
        </p>
      </div>
    </div>
  );
}
