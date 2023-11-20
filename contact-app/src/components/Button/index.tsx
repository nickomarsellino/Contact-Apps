// Button Component
// --------------------------------------------------------

interface ButtonProps {
  textButton?: string;
}

const Button = ({ textButton = '' }: ButtonProps) => {
  return <button>{textButton}</button>;
};

export default Button;