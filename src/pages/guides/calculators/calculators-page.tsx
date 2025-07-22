import awakeningCalculatorPreview from "../../../assets/awakening-calculator.png";
import creatureCalculatorPreview from "../../../assets/creature-calculator.png";
import creatureSimulatorPreview from "../../../assets/creature-simulator.png";

export default function CalculatorsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🧮 Pet Food Calculator</h1>

        <ul>
          <li>
            Created by <strong>Tudique26</strong> with data provided by{" "}
            <strong>Zohi</strong>.
          </li>
          <li>
            <strong>Note:</strong> This tool is currently in beta — future
            updates will be made by Tudique.
          </li>
        </ul>

        <p>
          Try it here:{" "}
          <a
            href="https://creature-calculator-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://creature-calculator-app.vercel.app/
          </a>
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={creatureCalculatorPreview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <ul>
          <li>
            Supports SSR pets (up to level 131) and UR pets (up to level 76).
          </li>
          <li>
            {" "}
            Want to contribute with creature data? Send a discord message to{" "}
            <strong>Tudique</strong>.
          </li>
        </ul>

        <h2>How to Use:</h2>
        <ul>
          <li>Select the number of creatures (up to 6)</li>
          <li>Choose their rarity</li>
          <li>Set both the current level and the target max level</li>
          <li>Your results will appear instantly</li>
        </ul>

        <h2>Results Explained:</h2>
        <ul>
          <li>
            <strong>Food Cost</strong> – Shows total food required to max out
            level
          </li>
          <li>
            <strong>Efficiency</strong> – Helps determine the best creature to
            level up based on ratings
          </li>
          <li>
            The rest is self-explanatory — but if you’re confused, feel free to
            reach out for help!
          </li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>🧪 Creature Levelling Simulator</h1>

        <p>
          This section is directly linked to the Creature Calculator above — any
          data you enter there will automatically be reflected here.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={creatureSimulatorPreview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <ul>
          <li>
            Set your total food available{" "}
            <em>(this feature will be improved in future updates)</em>
          </li>
          <li>
            Click <strong>“Update Food"</strong> and then run the simulation
          </li>
        </ul>

        <p>
          You can use this tool on its own, but for the most accurate and
          detailed results, it's recommended to use it together with the main
          Creature Calculator.
        </p>
      </div>
      <div className="guide-container">
        <h1>🐉 Dragon Keys Calculator 🐉</h1>

        <p>
          Huge thanks to <strong>Tudique26</strong> for creating this amazing
          calculator!
        </p>

        <p>
          Try it here:{" "}
          <a
            href="https://berserker-awakening-calculator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://berserker-awakening-calculator.vercel.app/
          </a>
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={awakeningCalculatorPreview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <ul>
          <li>Set your current Awakening level</li>
          <li>
            Enter the number of enchanted stones you receive from the dragon{" "}
            <em>(top-left of the page)</em>
          </li>
          <li>
            Hit <strong>"Calculate Keys"</strong> and voilà — you’ve got your
            result!
          </li>
        </ul>
      </div>
    </div>
  );
}
