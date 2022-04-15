interface IButtonProps {
  children: React.ReactNode;
  version?: string;
  type: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
}

const Button = ({
  children,
  version = "primary",
  type = "button",
  isDisabled = false,
}: IButtonProps) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
