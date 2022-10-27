import styled from 'styled-components'

const AppStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #F4F4F9;
border-top: solid 50px #F4F4F9;
// margin-left: 100px;
// margin-right: 100px;

h1 {
  color: #393D3F;
}

h2 {
  color: #546A7B;
}

p, div, button, option {
  color: #393D3F;
  font-family: monospace;
}

.root {
  // margin: 0;
}

.Overview {
  // margin-left: 200px;
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

export {AppStyle}