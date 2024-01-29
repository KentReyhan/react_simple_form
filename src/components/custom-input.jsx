import PropTypes from 'prop-types'

CustomInputField.propTypes = {
  value: PropTypes.any.isRequired,
  icon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
  errors: PropTypes.string
};

function CustomInputField ({ value, icon, name, placeholder, type, onChange, errors }){
    return (
        <div className="flex justify-start items-center relative">
            <input className="box-border w-full mt-8 mb-8 p-4 ps-12 rounded" type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
            <img src={icon} className="absolute ml-4 w-5" />
            {errors ? <div className="absolute ml-4 mt-28 text-red-600">{errors}</div> : null}
        </div>
    )
} 

export default CustomInputField