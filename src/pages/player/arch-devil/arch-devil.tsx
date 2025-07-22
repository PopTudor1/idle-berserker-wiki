import archDevil1Preview from "../../../assets/arch-devil-1.jpg";
import archDevil2Preview from "../../../assets/arch-devil-2.jpg";

export default function ArchDevil() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h2>🏆 Why Play the Arena?</h2>
        <p>
          Playing the Arena is a great idea because it’s{" "}
          <strong>easy to earn diamonds and arena points</strong>.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={archDevil1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          With these points, you can purchase <strong>skin pieces</strong> and
          even get <strong>paid skins for free</strong>.
        </p>
        <p>
          Additionally, you can buy <strong>skin enhancement potions</strong> to
          level up your skins and boost their power even further.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={archDevil2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
