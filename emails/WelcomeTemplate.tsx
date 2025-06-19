import React, { CSSProperties } from 'react'
import {Html, Body, Container, Tailwind, Text, Link, Preview} from '@react-email/components'

const WelcomeTemplate = ({name} : {name : string}) => {
  return (
    <Html>
        <Preview>Welcome abard!</Preview>
        <Tailwind>
          <Body style={body}>
              <Container>
                  <Text style={{fontSize : '32px'}}>Hello {name}</Text>
                  <Link href='https://www.bilibili.com/'>www.bilibili.com/</Link>
              </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}


export default WelcomeTemplate