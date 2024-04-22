

export type ButtonProps = {
    children?: React.ReactNode;
    outlined?: boolean;
    block?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    buttonText?: string | null
    style?: string
  };

export const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
    let btnText = props.buttonText ? props.buttonText : "Click"


    return (
        <button onClick={props.onClick} className={props.className}>{btnText}</button>
    )
}