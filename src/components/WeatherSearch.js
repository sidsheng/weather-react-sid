import React, {useContext} from "react"
import Context from "../Context"
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

const WeatherSearch = () => {
  const {api_call} = useContext(Context)

  return (
    <div>
        <Form onSubmit={api_call}>
            <InputGroup>
                <FormControl name="city" placeholder="sydney" type="text" />
                <InputGroup.Append>
                    <Button variant="primary" type="submit">&rarr;</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    </div>
  )
}

export default WeatherSearch