export default function WorldStonesPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>🌍 World Stones</h1>

        <p>
          There are <strong>three types</strong> of World Stones:{" "}
          <strong>Celestial</strong>, <strong>Nature</strong>, and{" "}
          <strong>Infernal</strong>.
        </p>

        <p>
          Your World Stone build will differ based on the <strong>SSR</strong>{" "}
          and <strong>UR pets</strong> you own. For example, if you have an{" "}
          <strong>SSR Infernal pet</strong>, it’s recommended to begin farming{" "}
          <strong>Infernal stones</strong>.
        </p>

        <p>
          If you don’t have strong pets yet, start with{" "}
          <strong>Celestial</strong> — it currently has the best pets.
          <em>
            {" "}
            (This may change if Urus is reintroduced into the pet summon pool.)
          </em>
        </p>

        <p>
          When selecting stones, prioritize <strong>Attack</strong> stats —{" "}
          <strong>Attack &gt; Amplified Attack</strong>.
        </p>

        <p>
          Ideally, you should build <strong>four stone sets</strong>:
        </p>

        <ul>
          <li>One for Celestial</li>
          <li>One for Nature</li>
          <li>One for Infernal</li>
          <li>
            A general-purpose set made up of your strongest stones (for
            Dungeons, Guild Conquest, etc.)
          </li>
        </ul>
      </div>
    </div>
  );
}
