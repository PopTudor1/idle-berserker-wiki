import guild1Preview from "../../assets/guild-1.png";
import guild2Preview from "../../assets/guild-2.png";
import guild3Preview from "../../assets/guild-3.png";
import guild4Preview from "../../assets/guild-4.png";
import guild5Preview from "../../assets/guild-5.png";
import guild6Preview from "../../assets/guild-6.png";
import guild7Preview from "../../assets/guild-7.png";
import guild8Preview from "../../assets/guild-8.png";

export default function GuildPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>Guild Guide</h1>
        <p>
          If you don&apos;t know your way around a guild or you&apos;re new,
          this guide will help you understand the essentials.
        </p>

        <h2>Guild Information</h2>
        <p>
          This is where you access all the info related to the guild you&apos;re
          in.{" "}
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <p>
          <strong>
            If you are the guild Submaster/Master, you can manage guild join
            requests and also kick members using the manage tab.
          </strong>
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Guild Missions</h2>
        <h2>Guild Missions</h2>
        <p>
          This is an important part of the guild. Here, you can choose specific
          missions of your interest and complete them in order to gain{" "}
          <strong>Guild Coins</strong>, <strong>Guild Contribution</strong>,
          &amp; <strong>Guild Mission Points</strong>.
        </p>
        <p>
          I recommend missions that give <strong>120+ points</strong>.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Guild Shop</h2>
        <p>
          You can buy various items. Here&apos;s what I recommend (Priority Top
          to Bottom):
        </p>
        <ul>
          <li>
            <strong>Guild Feast Tokens</strong> — Get them daily, will be
            explained in Guild Feast section
          </li>
          <li>
            <strong>Save your Guild Tokens to buy a costume</strong> which costs
            50k GC & unlocks at Guild Level 4.
          </li>
          <li>
            You can get <strong>Monster Scrolls</strong> after you have saved up
            for the costume or already have it.
          </li>
          <li>
            Others are all meh; they can be easily obtained if you farm in{" "}
            <em>Power-Saving Mode</em>.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild5Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Guild Conquest</h2>
        <p>
          You get to fight this boss <strong>twice daily</strong>.
        </p>
        <p>
          Accumulate total damage. When the Conquest ends, rewards are given
          based on the Guild&apos;s overall rank in Conquest.
        </p>
        <p>
          Use the <strong>Boss Skillset & Mastery</strong>.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild6Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Guild Attendance</h2>
        <p>
          I cannot stress this enough, you need to have{" "}
          <strong>daily attendance</strong>. It benefits the Guild Members and{" "}
          <em>you</em>.
        </p>
        <p>
          Use <strong>Advanced attendance</strong>.
        </p>
        <p>
          If you have 7 days consecutive attendance, you get bonus{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            highlighted in Green
          </span>
          .
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild7Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>Guild Feast</h2>
        <p>
          You need to use <strong>Guild Feast Tokens</strong> to activate{" "}
          <em>Buffs</em> (that affect all members of the Guild).
        </p>
        <p>
          Highly recommend using <strong>Monster Burger</strong> (Boosts IDR by
          20%).
        </p>
        <p>
          <strong>Berserker&apos;s Mead</strong> (Exp rate 20%, use it during
          events that provide Exp buff).
        </p>
        <p>Others are not recommended, it&apos;s your choice.</p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={guild8Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
