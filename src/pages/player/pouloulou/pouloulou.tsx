import pouloulou1Preview from "../../../assets/pouloulou-1.png";
import pouloulou2Preview from "../../../assets/pouloulou-2.png";
import pouloulou3Preview from "../../../assets/pouloulou-3.png";

export default function Pouloulou() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h2>🎯 Starting Priorities for New Berserkers</h2>
        <p>
          Your main priority when starting the game is to progress through
          stages to unlock important mechanics like <strong>Demon Power</strong>
          , <strong>Companions</strong>, <strong>World Stones</strong>,{" "}
          <strong>Creatures</strong>, and more.
        </p>
        <p>
          To progress through stages effectively, you need to{" "}
          <strong>optimize your first set of costume abilities</strong>. You can
          create this set using <strong>SR costumes</strong> because the base
          stats of costumes are <em>applied when owned</em>, while the abilities
          work differently and are <em>applied when equipped</em>.
        </p>
        <ol>
          <li>
            <strong>First picture:</strong> How to access costumes.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={pouloulou1Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Second picture:</strong> How to find costume abilities.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={pouloulou2Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
          <li>
            <strong>Third picture:</strong> Roll your costume ability stats to
            prioritize <strong>Stage Boss Monster Attack</strong>. You can see
            the stats and their effects by pressing the <strong>"?"</strong>{" "}
            button.
          </li>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img
              src={pouloulou3Preview}
              alt="Creature Calculator Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </ol>
        <p>
          <strong>Attack</strong> is the best stat at the beginning, while{" "}
          <strong>Health</strong> is useful early on for dungeons and stage
          monster farming.
        </p>
        <p>
          Your first costume set should focus on{" "}
          <strong>Stage Boss Monster Attack</strong>. For the second set, I
          recommend <strong>Stage Monster Health</strong> if you plan to let the
          game farm online all day. But if you log in once or twice a day,
          prefer <strong>Dragon Realm’s Attack</strong>.
        </p>
        <p>Hope this is understandable (I'm sorry, I'm French 😄)!</p>
      </div>
    </div>
  );
}
