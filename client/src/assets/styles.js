import styled from 'styled-components'

const AppStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #F4F4F9;
border-top: solid 50px #F4F4F9;
border-left: solid 100px #F4F4F9;
border-right: solid 100px #F4F4F9;

h1 {
  color: #393D3F;
}

h2 {
  color: #546A7B;
}

p, div, option {
  color: #393D3F;
  font-family: monospace;
}

.root {
  // margin: 0;
}

.Overview {
  min-width: 900px;
}

.overlay {
  color: #F4F4F9;
}

.price {
  color: red;
}

// .QA {

// }

// .Related {

// }

// .Review {

// }

`

export {AppStyle};