import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/UserProvider'
import { UserContextState } from '../../types/User'

const Container = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    height: 30vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    flex: 1;
    margin-top: 20%;
    display: flex;
    justify-content: center;
    padding: 30px;
    text-align: center;
`
const CloseButton = styled.button`
    border: none;
    background: #047d40;
    padding: 15px;
    margin-bottom: 30px;
    font-size: 20px;
    color: white;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.3);
    }
`

const UpdateModal: React.FC = () => {

    const { displayModal } = useContext(UserContext) as UserContextState;

    const handleModal = () => {
        displayModal(false);
    }

    return (
        <Container>
            <Wrapper>
                <Content>
                    Your Information Has Been Updated. Thank You!
                </Content>
                <CloseButton onClick={handleModal}>Close</CloseButton>
            </Wrapper>
        </Container>
    )
}

export default UpdateModal
