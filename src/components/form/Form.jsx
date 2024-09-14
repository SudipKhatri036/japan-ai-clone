import "./Form.css";

function Form() {
  return (
    <form className="form">
      <label htmlFor="sur-name">Name (Sur name)</label>
      <span className="form-required">*</span>
      <input type="text" id="sur-name" placeholder="Surname" />

      <label htmlFor="name">Name (First name)</label>
      <span className="form-required">*</span>
      <input type="text" id="full-name" placeholder="First name" />
      <label htmlFor="company-name">Company name </label>
      <span className="form-required">*</span>
      <input type="text" id="company-name" placeholder="Company Name" />
      <label htmlFor="company-name">Company name </label>
      <span className="form-required">*</span>
      <input type="text" id="company-name" placeholder="Company Name" />
      <label htmlFor="company-name">Company name </label>
      <input type="text" id="company-name" placeholder="Company Name" />
      <label htmlFor="company-name">Company name </label>
      <input type="text" id="company-name" placeholder="Company Name" />
      <label htmlFor="company-name">Company name </label>
      <input type="text" id="company-name" placeholder="Company Name" />
      <label htmlFor="company-name">Company name </label>
      <input type="text" id="company-name" placeholder="Company Name" />
    </form>
  );
}

export default Form;
