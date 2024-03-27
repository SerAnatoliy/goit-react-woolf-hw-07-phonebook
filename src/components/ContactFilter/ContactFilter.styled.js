import styled from 'styled-components'

export const Label = styled.label`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
font-size: 20px;
margin-bottom: 30px;
`

export const Input = styled.input`
padding-left: 10px;
width: 280px;
height: 30px;
font-size: 20px;
caret-color: #3373e2;
border-radius: 5px;
border: 1px solid #333;
&:hover {
    border-color: #3373e2;
}
&:focus-visible {
    outline-color: #3373e2;
}

`