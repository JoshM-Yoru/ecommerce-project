import React from 'react'
import styled from 'styled-components'
import NewTabs from './Tabs/NewTabs'

const Container = styled.div`
    height: 100vh;
`

const Login: React.FC = () => {
    return (
        <Container>
            <NewTabs />
        </Container>
    )
}

export default Login
