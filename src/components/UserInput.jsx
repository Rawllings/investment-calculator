function UserInput({ onChangeInput, inputUser }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputUser.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={inputUser.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            value={inputUser.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label>Duration </label>
          <input
            type="number"
            required
            value={inputUser.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
