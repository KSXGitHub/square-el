import React from 'react'
import {FormGroup, FormControlLabel} from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

export default class ThemeSwitcher extends React.Component {
  constructor (props) {
    super(props)

    const {
      value = false,
      onChange = () => {}
    } = props

    this.state = {
      value,
      onChange
    }
  }

  render () {
    const {
      props: {
        buttonProps = {}
      },
      state: {
        value,
        onChange
      }
    } = this

    return <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={(_, value) => {
              this.setState({value})
              onChange(value)
            }}
            {...buttonProps}
          />
        }
        label="I'm Batman!"
      />
    </FormGroup>
  }
}
