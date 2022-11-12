import React from 'react'
import PropTypes from 'prop-types'
import { CheckOutlined } from '@material-ui/icons'

const Checkbox = props => {
    const inputRef = React.useRef(null)

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label className="custom-checkbox">
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className="custom-checkbox__checkmark">
                <CheckOutlined className='CheckboxIcon' />
            </span>
            {props.label}
        </label>
    )
}

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
}

export default Checkbox