export default function SoulCrystalsPage() {
  return (
    <>
      <h1 style={{ color: "white" }}>SOUL CRYSTALS PAGE</h1>
      <div
        style={{ color: "white" }}
        className="max-w-3xl mx-auto p-6 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">
          🟣 Soul Crystal Guide
        </h1>

        <div className="space-y-4">
          <img
            src={
              "https://media.discordapp.net/attachments/1374058503970488320/1374058504293318696/image.png?ex=687e6834&is=687d16b4&hm=ab57429ece41550fd24d1046c7cd1dd1f7b488c0b2ccf1fc3e07dbb3591d795d&=&format=webp&quality=lossless"
            }
            alt="Soul Crystals UI"
            className="rounded shadow-md mx-auto"
          />

          <p>
            There are <strong>7 types of Soul Crystals</strong> used to enhance
            your character in various ways:
          </p>

          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Despair</strong>
            </li>
            <li>
              <strong>Anger</strong>
            </li>
            <li>
              <strong>Hatred</strong>
            </li>
            <li>
              <strong>Sorrow</strong>
            </li>
            <li>
              <strong>Fear</strong>
            </li>
            <li>
              <strong>Greed</strong>
            </li>
            <li>
              <strong>Sloth</strong>
            </li>
          </ul>

          <p>
            All Soul Crystals use the same currency:{" "}
            <strong>Soul Crystal</strong>. Be strategic about how you invest it,
            especially in synergy with your build and companion setup.
          </p>
        </div>
      </div>
    </>
  );
}
