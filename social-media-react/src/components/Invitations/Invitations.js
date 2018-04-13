import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const Invitations = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={require('../../assets/avatars/avatar1.png')}/>
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Invitations