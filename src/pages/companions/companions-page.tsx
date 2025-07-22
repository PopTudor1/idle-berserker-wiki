import companion1Preview from "../../assets/companion-1.png";
import companion2Preview from "../../assets/companion-2.png";
import companion3Preview from "../../assets/companion-3.png";
import companion4Preview from "../../assets/companion-4.png";
import companion5Preview from "../../assets/companion-5.png";

export default function CompanionsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🧭 Companion 🧭</h1>
        <p>Unlocked after Stage Master 5-10</p>
        <h2>NOTE</h2>
        <p>Guides on Equipment & Stats are below.</p>
        <p>This will help you understand the comps better:</p>
        <ul>
          <li>
            <strong>Berserk Mode</strong> - Activates berserk mode
          </li>
          <li>
            <strong>Skill Boost</strong> - Increases Skill Damage
          </li>
          <li>
            <strong>Farm Boost</strong> - Provides buffs such as Increased Gold
            and Exp rate
          </li>
          <li>
            <strong>Single</strong> - Focus damage on single target
          </li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>Comps for Farming</h1>
        <ul>
          <li>Astia [Invulnerability]</li>
          <li>Kaliha [AOE]</li>
          <li>Agnes [AOE]</li>
          <li>Dochi [AOE]</li>
          <li>Mong [AOE]</li>
          <li>Valder [Berserk Mode]</li>
          <li>Hacon [Skill Boost]</li>
          <li>Aisha [AOE]</li>
          <li>Altair [AOE]</li>
          <li>Biscuit Oliver [Invulnerability]</li>
          <li>Hanayama [Berserk Mode]</li>
          <li>Ingrid [AOE]</li>
          <li>Tina [AOE]</li>
          <li>Alicia [AOE]</li>
          <li>Lavina [AOE]</li>
          <li>Anima [AOE]</li>
          <li>Retsu Kaioh [Single & AOE]</li>
          <li>Jisu Yoon [Atk Boost & Farm Boost]</li>
          <li>Osman [AOE & Farm Boost]</li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>Comps for Bossing / Singular Enemies</h1>
        <ul>
          <li>Astia [Invulnerability]</li>
          <li>Manuel [Single]</li>
          <li>Valder [Berserk Mode]</li>
          <li>Hacon [Skill Boost]</li>
          <li>Victoria [Single]</li>
          <li>Natalie [Single]</li>
          <li>White Rose [Single]</li>
          <li>Biscuit Oliver [Invulnerability]</li>
          <li>Hanayama [Berserk Mode]</li>
          <li>Cnut [Single]</li>
          <li>Targon [Single]</li>
          <li>Anton [Single]</li>
          <li>Hadum [Single]</li>
          <li>Pickle [Single]</li>
          <li>Retsu Kaioh [Single & AOE]</li>
          <li>Wook Pyeon [Single]</li>
          <li>Olga [Single]</li>
        </ul>
        <p>The comps that aren't listed are not that great (example: Bren)</p>
      </div>
      <div className="guide-container">
        <h1>Optimal Builds for Companions</h1>

        <h2>Farming</h2>
        <p>
          Valder, Hacon, Dochi, Kaliha
          <br />
          If you do not have one or any of these, use any companions with good
          set bonuses or AOE skills.
          <br />
          If health is needed, use Astia and equip for health set bonuses.
        </p>

        <h2>Pushing</h2>
        <p>
          Valder, Hacon, Targon (if you have all 4 weapons for him), Anton,
          Astia, or Attack% bonus companions.
          <br />
          If you do not have one or any of these, use companions with good set
          bonuses or heavy-hitting skills.
        </p>
      </div>
      <div className="guide-container">
        <h1>Companion Equipment</h1>
        <p>
          You can obtain equipment from Stages, Dark Merchant, and Shop.
          <br />
          Every companion has an Element & Class. Matching equipment by Element
          & Class grants buffs (aka tag effect) based on how many pieces match.
        </p>

        <h2>Preferred Equipment Effects/Abilities</h2>
        <ol>
          <li>SD (Skill Damage)</li>
          <li>ATK (Attack)</li>
          <li>HEALTH</li>
          <li>ABOH (Attack Based on HP) - for ABOH Builds</li>
        </ol>
        <p>Other effects are generally less effective.</p>

        <h3>Note</h3>
        <p>
          Do not change your options or tags for equipment frequently—save until
          you get SSR equipment (which takes a long time). Instead, try to find
          equipment with different effects or abilities within the same group as
          your companion.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={companion1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>How to Obtain Equipment Cube</h1>
        <p>
          Equipment Cubes (EC) are used to enhance your equipment.
          <br />
          You can get EC by disassembling equipment you don't need.
          <br />
          You can disassemble manually or use auto disassemble.
          <br />
          When using auto disassemble, select the types of equipment you want to
          dismantle and exclude stats you want to keep by checking the options.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={companion2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={companion3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Companion Stats</h1>
        <p>
          Every time you ascend your companion or get a new one, make sure to
          reroll their talent stats. The total stats% increases with each
          ascension.
          <br />
          For companions, focus mainly on Skill Damage (SD) and Skill Damage Amp
          (SDA).
          <br />
          Order of importance for Companion Skills:
        </p>
        <ol>
          <li>Skill Damage (SD)</li>
          <li>Skill Damage Amp (SDA)</li>
          <li>Amp Attack / Health</li>
          <li>Elemental Damage, etc.</li>
        </ol>
        <p>
          <strong>Note:</strong> This effect influences your entire power.
          Always remember to reroll the stats.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={companion4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={companion5Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Comps with Tag Effects [For Farming]</h1>
        <p>Tag effect means matching the equipment based on companion tags.</p>
        <ul>
          <li>Kaliha [Exp rate]</li>
          <li>Dochi [Exp rate]</li>
          <li>Jisu Yoon [Exp rate]</li>
          <li>
            Osman [Exp rate & Gold rate]{" "}
            <em>(Imma blow myself up if I don’t get him :goblok:)</em>
          </li>
          <li>Agnes [Gold rate]</li>
          <li>Mong [Gold rate]</li>
        </ul>
        <p>
          <strong>Note:</strong> 1st & 2nd companions should be Valder and
          Hacon. 3rd and 4th can be any of the above.
        </p>
      </div>
    </div>
  );
}
