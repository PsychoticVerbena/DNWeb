export default function Commissions() {
 return (
     <div className="section">
      <h1>Commissions</h1>

      <p>Choose a type below and submit a request.</p>

      <div className="grid">
        <div className="card">
          <h2>Sketch</h2>
          <p>$10 - $25</p>
        </div>

        <div className="card">
          <h2>Full Render</h2>
          <p>$40 - $80</p>
        </div>

        <div className="card">
          <h2>Character Sheet</h2>
          <p>$60+</p>
        </div>
      </div>

      <div className="section">
        <h2>Request Form</h2>
        <iframe
          src="YOUR_GOOGLE_FORM_LINK"
          width="100%"
          height="700"
          style={{ border: "none", borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}