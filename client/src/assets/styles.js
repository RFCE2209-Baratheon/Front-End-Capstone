import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const AppStyle = createGlobalStyle`

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
}

.banner {
  background: ${({ theme }) => theme.logo};
}

.star {

}


// overview styles
.Overview {
  min-width: 900px;
}

.overlay {
  color: #F4F4F9;
}

.price {
  color: red;
}

`

export {AppStyle};