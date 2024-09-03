import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #7e858e;
  margin-left: 5px;
  font-size: 15px;
`
export const ItemContainer = styled.button`
  display: flex;
  border-style: none;
  background: ${props => (props.bgColor ? '#94a3b8' : 'none')};
  margin-right: 20px;
  width: 200px;
`
export const SidebarContainer = styled.ul`
  list-style-type: none;
`
export const SidebarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
