const Input = ({id, text, value, InputEvent}) => {
  return(<>
    <label htmlFor={id}>{text}
    {value}
    <input type="text" id={id} value={value} onChange={InputEvent}  />
    </label>
  </>
  )
}
export default Input;