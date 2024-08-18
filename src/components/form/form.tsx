import "./styles/form.css";
import InputField from "../inputs/input-field";
import Button from "../buttons/submit-button";

interface FormProps {
  title: string;
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  children?: React.ReactNode;
}

export const Form = ({
  email,
  password,
  onChangeEmail,
  handleSubmit,
  onChangePassword,
  title,
  children,
}: FormProps) => {
  return (
    <div className="form-container">
      <form className="form">
        <h1>{title}</h1>
        <InputField
          label="Email address"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <InputField
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={onChangePassword}
          label="Password"
        />
        {children}
        <div className="section-actions d-flex justify-content-center">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};
