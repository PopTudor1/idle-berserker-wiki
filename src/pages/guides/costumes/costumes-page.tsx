export default function CostumesPage() {
  return (
    <div className="page-container">
      <div className="guide-container">
        <h1>👗 Costumes Guide</h1>

        <p>
          Over time, aim to build sets of <strong>4 costumes</strong> tailored
          to specific content types. Use the auto-roll feature for SR (it will
          stop on SR and SSR), but try to keep any SSRs you roll.
        </p>

        <h3>Recommended Costume Sets:</h3>
        <ul>
          <li>
            <strong>Stage Monsters (General Farming):</strong> Focus on{" "}
            <em>Attack %</em>.
            <br />
            <small>
              (Amp. Attack is okay temporarily but not as effective long-term.)
            </small>
            <br />
            After Chapter 2, mix in <em>HP %</em>. Prioritize costumes with more
            slots.
          </li>
          <li>
            <strong>Stage Boss Monsters:</strong> Focus on <em>Attack %</em>.
          </li>
          <li>
            <strong>Dragon Boss:</strong> Optional, but helpful. Use a set
            focused on <em>Attack %</em>.
          </li>
          <li>
            <strong>Guild Boss:</strong> Another optional set using{" "}
            <em>Attack %</em>.
          </li>
        </ul>

        <p>
          Other sets are entirely optional — build them if you want more
          specialized flexibility.
        </p>
      </div>
    </div>
  );
}
