import * as React from "react"
import styled from "styled-components"

export const Main: React.FunctionComponent = () => {

    return (
        <Container>
            <Wrapper>
             <Body>
              <Form>
               <FormWindow>
                <FormHeader>
                <FormHeaderH1>Account Login</FormHeaderH1>
                </FormHeader>
                    <FormContent>
                        <FormLabel>Username</FormLabel>
                    </FormContent>
                   <FormInput></FormInput>
                   <FormGroup>
                   <FormContent>
                       <FormLabel>Password</FormLabel>
                   </FormContent>
                       <FormInput></FormInput>
                   </FormGroup>
                   <FormGroup>
                       <FormRemember>
                           <CheckBox></CheckBox>
                           Remember Me </FormRemember>
                       <FormRecovery>
                           <FormFogot>Forgot Password?</FormFogot>
                       </FormRecovery>
                   </FormGroup>
                   <FormGroup>
                      <Knopka>LOG IN</Knopka>
                   </FormGroup>
                   <FormToggle></FormToggle>
               </FormWindow>
              </Form>
                 <AtBut>
                     <Icon></Icon>
                 </AtBut>
                 <Footer></Footer>
             </Body>
            </Wrapper>
        </Container>


    )
}


const Icon = styled("i")`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga'
`

const AtBut = styled("a")`
  z-index: 10000000;
  position: fixed;
  right: 24px;
  bottom: 24px;
  background: #FFF;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 100%;
  box-sizing: border-box;
  color: #666;
  -webkit-animation: at-ripple 0.6s linear infinite;
  animation: at-ripple 0.6s linear infinite;
`

const Knopka = styled("button")`
  outline: none;
  background: #4285F4;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #FFFFFF;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  text-transform: uppercase;
  cursor: pointer;
`

const FormFogot = styled("a")`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-size: inherit;
  vertical-align: baseline;
`

const FormRecovery = styled("div")`
  color: #4285F4;
  font-size: 12px;
  text-decoration: none;
`

const CheckBox = styled("input")`
  display: inline-block;
  width: 8px;
  height: 10px;
  margin: 0 10px 0 0;
`

const FormRemember = styled("label")`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
`
const FormInput = styled("input")`
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.6);
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  transition: 0.3s ease;
`



const FormLabel = styled("label")`
  display: block;
  margin: 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`

const FormContent = styled("div")`
  margin: 10px 0px 0px 0px;
  padding: 0px;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
  flex: 1 0 auto;
`

const FormHeader = styled("div")`
  margin: 0 0 40px;
  flex: 0 0 auto;
`
const FormHeaderH1 = styled("h1")`
  padding: 4px 0;
  color: #4285F4;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  `
const FormToggle = styled("div") `
    z-index: 10;
    position: absolute;
    top: 60px;
    right: 60px;
    background: green;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    transform-origin: center;
    transform: translate(0, -25%) scale(0);
    opacity: 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:after, before{
     content: "";
     display: block;
     position: absolute;
     top: 50%;
     left: 50%;
     width: 30px;
     height: 4px;
     background: #4285F4;
     transform: translate(-50%, -50%);
   }
`
const Form = styled("div") `
  z-index: 15;
  position: relative;
  background: #FFFFFF;
  width: 600px;
  border-radius: 4px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 100px auto 10px;
  overflow: hidden;
`

const Container = styled("div")`
    display: flex;
    flex-direction: column;
  height: 100%;
`
const Body = styled("body") `
    background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);
    color: rgba(0, 0, 0, 0.6);
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 1.6em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

`

const Footer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin: 5.11%;
  flex: 0 0 auto;
`
const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

const FormWindow = styled("div") `
padding: 60px calc(5% + 60px) 60px 60px;
    box-sizing: border-box;
    `
const FormGroup = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 20px;
    &:last-child{
    margin: 0;
  }
`
