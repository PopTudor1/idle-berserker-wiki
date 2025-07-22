import pureEnergy1Preview from "../../../assets/pure-energy-1.png";

export default function PureEnergy() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>💡 Online vs Offline Rewards</h1>
        <p>
          <strong>Online rewards</strong> are <em>way better</em> than offline!
          If you want to boost your progression efficiently:
        </p>
        <ul>
          <li>
            Put the game in <strong>Power Save Mode</strong>
          </li>
          <li>
            Leave it running <strong>overnight while you sleep</strong>
          </li>
        </ul>
        <p>
          Watch your progress <strong>skyrocket</strong>! 🚀
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src={pureEnergy1Preview}
          alt="Creature Calculator Preview"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
