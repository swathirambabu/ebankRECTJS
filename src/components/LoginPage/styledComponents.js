import styled from 'styled-components'

export const LoginContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
height:100vh;
width:100%;
background-color#152850;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 80%;
  background-color: #e0eefe;
  border-radius: 30px;
`
export const LoginImg = styled.img`
  width: 50%;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 40%;
  background-color: white;
  border-radius: 30px;
  padding: 20px;
`
export const LoginHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: roboto;
  color: #183b56;
`
export const LoginInputLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
  font-family: roboto;
  color: #5a7184;
  margin-bottom: 15px;
`
export const LoginInput = styled.input`
  width: 80%;
  background-color: transparent;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
`

export const LoginButton = styled.button`
  width: 90%;
  background-color: transparent;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #183b56;
  margin-bottom: 20px;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: #ff0b37;
`
