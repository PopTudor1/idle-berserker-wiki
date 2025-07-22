import berserkerEquipment1Preview from "../../assets/berserker-equipment-1.png";
import berserkerEquipment2Preview from "../../assets/berserker-equipment-2.png";
import berserkerEquipment3Preview from "../../assets/berserker-equipment-3.png";
import berserkerEquipment4Preview from "../../assets/berserker-equipment-4.png";
import berserkerEquipment5Preview from "../../assets/berserker-equipment-5.png";
import berserkerEquipment6Preview from "../../assets/berserker-equipment-6.png";
import berserkerEquipment7Preview from "../../assets/berserker-equipment-7.png";

export default function BerserkerEquipmentPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🏹 Item Drop Rate, Awakening Ability & Equipment Ability 🏹</h1>

        <h2>Awakening Pages</h2>
        <p>
          You should maintain <strong>three main awakening pages</strong>:
        </p>
        <ul>
          <li>
            One focused on <strong>Attack</strong> for bossing
          </li>
          <li>
            One focused on <strong>Item Drop Rate (IDR)</strong> for farming
          </li>
          <li>
            One focused on <strong>Health</strong> for the ABOH build
          </li>
        </ul>
        <p>
          These pages should consist of <strong>SSR rolls only</strong>. Use
          additional pages to improve your current rolls once you have enough
          dice.
        </p>
        <p>
          <strong>Tip:</strong> Lock Awakening Abilities when you get a good SSR
          roll by tapping on it to avoid accidentally rerolling it.
        </p>

        <h2>Ability Ranks</h2>
        <p>
          <strong>Max rank:</strong> Equipment abilities go up to{" "}
          <strong>S</strong>, and Awakening/Costume abilities go up to{" "}
          <strong>SSR</strong>.
        </p>

        <h2>Best Equipment Abilities (Priority)</h2>
        <ul>
          <li>
            <strong>Item Drop Rate (IDR)</strong> – Best for farming
          </li>
          <li>
            <strong>Critical Chance</strong> – Great for pushing stages
          </li>
          <li>
            <strong>Attack Speed</strong> – Great for pushing stages
          </li>
        </ul>

        <p>
          Make sure that <strong>every gear you use</strong> has at least one
          ability with Item Drop Rate. It’s recommended to aim for{" "}
          <strong>S-rank IDR (8.5%+)</strong> after acquiring SR4 equipment or
          better.
        </p>
      </div>
      <div className="guide-container">
        <h1>⚔️ Equipment Transcendence ⚔️</h1>

        <p>
          Once you unlock your first <strong>SSR</strong>, you’ll gain access to
          the <strong>Transcendence</strong> page. This guide explains how it
          works.
        </p>

        <h2>How It Works</h2>
        <p>
          When you obtain <strong>duplicate SSRs</strong> and ascend them, you
          receive <strong>3 Transcendence Points</strong> per ascension. These
          points are randomly distributed onto the Transcendence page using
          dice. Each point increases a specific stat.
        </p>
        <p>
          The goal is to achieve a balanced distribution between{" "}
          <strong>Attack</strong>, <strong>Health</strong>, and the{" "}
          <strong>main element</strong> you are using.
        </p>

        <h2>Rerolling Tips</h2>
        <p>
          Since <strong>dice cost increases dramatically</strong> on this page,
          avoid rerolling after every transcend. It's more efficient to wait
          until you’ve accumulated several unused points before rerolling. If
          your current spread is decent, consider not rerolling at all.
        </p>

        <h2>Important Notes</h2>
        <ul>
          <li>
            Each Transcendence page has a <strong>maximum of 45 points</strong>.
          </li>
          <li>
            Only use your dice once the page is <strong>fully maxed out</strong>
            .
          </li>
        </ul>

        <h2>Percentage Increase per Point</h2>
        <ul>
          <li>
            <strong>Amp Attack & Health:</strong>
          </li>
          <ul>
            <li>Page 1 – 30%</li>
            <li>Page 2 – 50%</li>
            <li>Page 3 – 100%</li>
          </ul>
          <li>
            <strong>Amp Infernal, Celestial, Nature (main element):</strong>
          </li>
          <ul>
            <li>Page 1 – 100%</li>
            <li>Page 2 – 150%</li>
            <li>Page 3 – 300%</li>
          </ul>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Transcendence Engraving</h1>

        <p>
          <strong>Transcendence Engraving</strong> becomes available after you
          complete all three Transcendence pages. Each time an{" "}
          <strong>SSR equipment</strong> is transcended, you receive{" "}
          <strong>TP (Transcendence Points)</strong>. These points are used to
          level up your <strong>TEs (Transcendence Engravings)</strong>. You can
          also reset them at the cost of <strong>1000 diamonds</strong>.
        </p>

        <h2>Priority Order for TE Upgrades</h2>
        <ol>
          <li>
            <strong>Boss Engraving</strong> (for pushing stages)
          </li>
          <li>
            <strong>Stage Monster Engraving</strong> (for farming)
          </li>
          <li>
            <strong>Stage Monster Elemental Resistance</strong>
          </li>
        </ol>

        <h3>
          Pro Tip{" "}
          <span role="img" aria-label="wink">
            😉
          </span>
        </h3>
        <p>
          <em>
            Tip by Zohi [Thanks{" "}
            <span role="img" aria-label="cool">
              🆒
            </span>
            ]
          </em>
          <br />
          After Chapter 3+, it's highly recommended to use{" "}
          <strong>Elemental Resistance</strong> based on the element of the
          stage you're farming. Reset it if you move into a stage with a
          different elemental focus.
          <strong>Warning:</strong> Ranged monsters can one-shot you without
          proper resistance{" "}
          <span role="img" aria-label="gun">
            🔫
          </span>
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Equipment Power</h1>
        <p>
          No matter what weapon you own, make sure to <strong>upgrade</strong>{" "}
          it, as the effect applies <strong>overall</strong> (even if you don't
          equip it).
        </p>
        <p>
          Mainly focus on <strong>SSR weapons</strong> first, as they provide a{" "}
          <strong>substantial boost</strong> overall.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>Which SSR Set Should You Use?</h1>
        <p>
          <strong>Max Level of Equipments is 200</strong>
        </p>

        <h2>
          Evil Spirits <em>[Best for Bossing]</em>
        </h2>
        <ul>
          <li>
            <strong>2-set effect:</strong> ABOH 3% & Amp Health 500%
          </li>
          <li>
            <strong>4-set effect:</strong> Executes enemies below 5% HP & if you
            die, it casts immortality (cooldown is shared)
          </li>
        </ul>
        <p>
          Make sure you <strong>remove your immortality passive</strong> and
          switch it with something else (check Boss Skillset if you have SSR
          Evil Spirits set).
          <br />
          <em>NOTE:</em> ABOH build is late game; you need above 120% ABOH to
          switch to this build. For F2P players, it will take ages.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>
          Sword of Revenge <em>[Best for Arena]</em>
        </h2>
        <ul>
          <li>
            <strong>2-set effect:</strong> SC 15%
          </li>
          <li>
            <strong>4-set effect:</strong> Receives basic attacks from the same
            enemy, increases atk by 2% for 7s (stacks up to 25x)
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment5Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>
          Slaughter <em>[Best for Farming]</em>
        </h2>
        <ul>
          <li>
            <strong>2-set effect (Bossing):</strong> SD 100% & SDA 50%
          </li>
          <li>
            <strong>4-set effect (Farming):</strong> Basic attacks have 10%
            chance to activate Abyssal Wave skill. When activated, increases IDR
            by 20% for 5s
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment6Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>
          Wrath <em>[Best for Bossing]</em>
        </h2>
        <ul>
          <li>
            <strong>2-set effect:</strong> Crit Dmg 50% & Boss Dmg 20%
          </li>
          <li>
            <strong>4-set effect:</strong> Basic attacks have 20% chance to
            curse enemies. Cursed enemies take 1000% of atk every 5s (stacks up
            to 10x)
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={berserkerEquipment7Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
