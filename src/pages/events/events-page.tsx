import events1Preview from "../../assets/events-1.png";
import events2Preview from "../../assets/events-2.png";
import events3Preview from "../../assets/events-3.png";
import events4Preview from "../../assets/events-4.png";
import events5Preview from "../../assets/events-5.png";
import events6Preview from "../../assets/events-6.png";
import events7Preview from "../../assets/events-7.png";

export default function EventsPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>
          Legend Chief Event <span>[Duration 7 days]</span>
        </h1>

        <p>Each day you get points based on the missions you complete.</p>

        <h2>Tips</h2>
        <ul>
          <li>Start saving your keys for Days 1 & 2</li>
          <li>
            Do not use your runes after defeating the Ancient Ruins boss, you
            will need them for Day 3.
          </li>
          <li>Save up World Stone Powder for Day 4</li>
          <li>Save Diamonds for Days 5, 6 & 7</li>
        </ul>

        <h2>Points are distributed as follows</h2>

        <h3>Days 1 & 2</h3>
        <ul>
          <li>Goblin & Adamant Keys - 1 pt</li>
          <li>Dragon Keys - 2 pts</li>
          <li>Ancient Ruins & Daily Dungeon - 3 pts</li>
          <li>Devastated Forest - 4 pts</li>
          <li>Abyssal Chasm & Path Of Death - 5 pts</li>
        </ul>

        <h3>Day 3</h3>
        <ul>
          <li>Level up rune - 1 pt</li>
        </ul>

        <h3>Day 4</h3>
        <ul>
          <li>Level up C rank world stone - 1 pt</li>
          <li>Level up B rank world stone - 2 pts</li>
          <li>Level up A rank world stone - 3 pts</li>
          <li>Level up S rank world stone - 4 pts</li>
        </ul>

        <h3>Days 5, 6 & 7</h3>
        <ul>
          <li>Use 100 diamonds - 1 pt</li>
        </ul>
      </div>
      <div className="guide-container">
        <h1>
          World Raid <span>[Duration 7 days]</span>
        </h1>

        <p>
          <strong>Currency does not RESET</strong>
        </p>
        <p>
          There is a total of 5 Bosses, each Boss has a specified Area &
          Element. Use this to your advantage.
        </p>
        <p>
          Don't be a dumb ass like me and use the same element. Use the opposite
          element!
        </p>
        <p>Each Boss is unlocked after 1 day.</p>

        <h2>Strategy</h2>
        <p>
          <strong>NOTE:</strong> DO NOT SPREAD YOUR ATTACKS ON ALL BOSSES. FOCUS
          ON ONE BOSS TILL YOU REACH A RANK WHERE YOU CAN GET AN SSR PET.
        </p>
        <p>Try to reach top 10% for the pet.</p>
        <p>
          You can focus on 2 Bosses or more if one of them is in the top 10%,
          which could give you 2 or more SSR pets.
        </p>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events1Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events2Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events3Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>World Raid Exchange</h2>
        <p>
          Recommended items are always Monster Cards (MCs) and scrolls for both
          Gold and Silver Bars.
        </p>

        <h3>Scrolls Priority</h3>
        <ul>
          <li>Raid Scroll (Gold)</li>
          <li>Normal Scroll (Silver)</li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events4Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>

        <h2>World Raid Shop</h2>
        <ul>
          <li>Get the daily World Raid Boost, it helps a lot.</li>
          <li>
            Check your mail daily when the event starts — you will receive Raid
            boost and Raid Tickets.
          </li>
        </ul>

        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events5Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      <div className="guide-container">
        <h1>🎰 Stair Roulette Event</h1>
        <p>
          <strong>Duration:</strong> 13 days
        </p>

        <h2>🔥 Buffs During Event</h2>
        <ul>
          <li>2x Paragon XP rate / Normal XP</li>
          <li>2x Dice drop rate</li>
          <li>2x Enchantment Stone drop rate</li>
          <li>2x Gold rate</li>
          <li>
            <strong>Note:</strong> Buffs can be increased up to{" "}
            <strong>5x</strong> if you purchase the premium tier
          </li>
        </ul>

        <h2>🎁 Rewards</h2>
        <ul>
          <li>
            <strong>Completion of 1st Tier:</strong> Random SSR Costume
          </li>
          <li>
            <strong>Completion of 2nd Tier:</strong> Choose one of:
            <ul>
              <li>SSR Costume</li>
              <li>SSR Creature</li>
              <li>
                SSR Companion <strong>(Recommended)</strong>
              </li>
            </ul>
          </li>
          <li>
            After the 2nd tier, the reward loop <strong>repeats</strong> at Tier
            2 level.
          </li>
        </ul>

        <p>
          <strong>Credit:</strong> Thanks to <em>Zohix</em> for sharing the loop
          info 💡
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events6Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={events7Preview}
            alt="Creature Calculator Preview"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
}
