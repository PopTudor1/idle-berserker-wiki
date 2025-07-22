import pets1Preview from "../../../assets/pets-1.png";
import pets2Preview from "../../../assets/pets-2.png";
import pets3Preview from "../../../assets/pets-3.png";
import pets4Preview from "../../../assets/pets-4.png";
import pets5Preview from "../../../assets/pets-5.png";
import pets6Preview from "../../../assets/pets-6.png";
import pets7Preview from "../../../assets/pets-7.png";

export default function PetsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🐾 Pets</h1>

        <p>
          You can equip pets in two slots: <strong>Partner Slot</strong> and{" "}
          <strong>Equip Slot</strong>.
        </p>

        <p>
          The <strong>Partner Slot</strong> is further divided into three
          categories:
        </p>

        <ul>
          <li>
            <strong>Ground</strong>
          </li>
          <li>
            <strong>Air</strong>
          </li>
          <li>
            <strong>UR</strong> (Ultimate Rarity)
          </li>
        </ul>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h2>Partner vs Equip Slots</h2>

        <p>
          <strong>Partner Slot</strong> uses both{" "}
          <strong>Partner Skills</strong> and <strong>Equip Skills</strong>.
          Partner Skills are visually identified by a special highlight around
          the skill border.
          <em>
            {" "}
            (Also, the first skill shown on every pet is always a Partner
            Skill.)
          </em>
        </p>

        <p>
          <strong>Equip Slot</strong> activates only{" "}
          <strong>Equip Skills</strong> and select Partner Skills that are
          compatible.
        </p>

        <p>
          <strong>Example:</strong> Some Partner Skills are flexible and can be
          used in either slot, depending on their design. These will function in
          both Partner or Equip slots — so always check their compatibility!
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <p>
          On the other hand, if a pet’s Partner Skill description says something
          like <em>"When equipped, increases Decisive Strike by 3%"</em>, that
          means it <strong>must be equipped in the Partner Slot</strong> to
          activate.
        </p>

        <p>
          So, always make sure to{" "}
          <strong>read the skill descriptions carefully</strong> to know where
          to equip them!
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <p>You unlock additional Equip Skills as you rank up your pet.</p>
      </div>
      <div className="guide-container">
        <h1>🛠 Evolution</h1>

        <h2>S Rank Creatures</h2>
        <ul>
          <li>
            Go to the Evolution tab, then click on <strong>Evolve All</strong>.
          </li>
          <li>
            Choose <strong>Epic</strong> creatures and evolve them.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>SR/SSR Rank Creatures</h2>
        <p>
          To evolve a specific SR or SSR creature, you need{" "}
          <strong>Creature Souls</strong> or copies of the same element
          creature.
        </p>

        <h3>Stages of Evolution (Top to Bottom):</h3>
        <ul>
          <li>
            <strong>Unique to Unique+2</strong> (S Unique / SR Unique)
            <br />
            Requires a copy of the creature to evolve to <strong>Epic</strong>.
          </li>
          <li>
            <strong>Epic to Epic+3</strong> (S Epic / SR Epic)
            <br />
            Requires a copy of the creature to evolve to{" "}
            <strong>Legendary</strong>.
          </li>
          <li>
            <strong>Legendary to Legendary+4</strong> (S Legendary / SR
            Legendary)
            <br />
            Requires a copy of the creature to evolve to <strong>Mythic</strong>
            .
          </li>
          <li>
            <strong>Mythic</strong>
            <br />
            From this point onward, you need a copy of the creature you are
            evolving.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets5Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>UR Stages of Evolution</h2>
        <p>
          Evolutions that don’t require a copy of the creature need 3 Mythic
          creatures of any rank (S/SR/SSR). It’s recommended to use S rank
          creatures.
          <em>(Subject to updates)</em>
        </p>

        <h3>Stages of Evolution:</h3>
        <ul>
          <li>
            <strong>Unique to Unique+2</strong>
            <br />
            Requires SSR Mythic soul/creature of the same element to evolve to{" "}
            <strong>Epic</strong>.
          </li>
          <li>
            <strong>Epic to Epic+3</strong>
            <br />
            Requires SSR Mythic soul/creature of the same element to evolve to{" "}
            <strong>Legendary</strong>.
          </li>
          <li>
            <strong>Legendary to Legendary+4</strong>
            <br />
            Requires SSR Mythic soul/creature of the same element to evolve to{" "}
            <strong>Mythic</strong>.
          </li>
          <li>
            <strong>Mythic to Mythic+5</strong>
            <br />
            Requires a copy of the creature at <strong>Epic</strong> rank.
          </li>
          <li>
            <strong>Mythic+6</strong>
            <br />
            Requires a copy of the creature at <strong>Legendary</strong> rank.
          </li>
          <li>
            <strong>Mythic+7</strong>
            <br />
            Requires a copy of the creature at <strong>Mythic</strong> rank.
          </li>
          <li>
            <strong>Mythic+8</strong>
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets6Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Best creatures based on Element [SSR]</h2>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={pets7Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
