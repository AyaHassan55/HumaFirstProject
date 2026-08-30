interface IProps {

text:string;
variant:"primary"|"secondary"| "danger";
onClick:()=>void;
disabled?:boolean;

}

const Button=({text, variant, onClick, disabled}:IProps)=> {
  return (
     <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button