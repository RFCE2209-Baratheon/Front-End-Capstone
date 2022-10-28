import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

<<<<<<< HEAD
const AppStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #F4F4F9;
border-top: solid 50px #F4F4F9;
=======
const AppStyle = createGlobalStyle`
>>>>>>> Development

// app styles
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  border-top: ${({ theme }) => theme.appBorder};
  border-left: ${({ theme }) => theme.appBorder};
  border-right: ${({ theme }) => theme.appBorder};

  h1 {
  color: ${({ theme }) => theme.h1};
  }

  h2 {
    color: ${({ theme }) => theme.h2};
  }

  h3 {
    color: ${({ theme }) => theme.h3};
  }

  button {
    background: ${({ theme }) => theme.button};
    cursor: pointer;
    font-family: monospace;
  }

  a {
    color: ${({ theme }) => theme.a};
  }
}

<<<<<<< HEAD
p, div, span {
  color: #393D3F;
  // font-family: monospace;
}

.root {
  margin: 0;
=======
p, div, option {
  color: ${({ theme }) => theme.text};
  font-family: monospace;
  font-size: 16px;
}

select {
  color: ${({ theme }) => theme.select};
  font-family: monospace;
}

input {
  color: ${({ theme }) => theme.text};
  font-family: monospace;
>>>>>>> Development
}

.banner {
  background: ${({ theme }) => theme.logo};
}


// overview styles
.Overview {
}

`

export {AppStyle}