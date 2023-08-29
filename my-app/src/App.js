import React, { StrictMode, Component } from 'react';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import './App.css';

const Header = () => {
    return <h2>Hello world!</h2>
}

class Field extends React.Component {
    render() {
        const holder = 'Enter here';
        const styledField = {
            width: '300px',
        }
        return <input
            type="text"
            placeholder={holder}
            style={styledField} />;
    }
}

function Btn() {
    const text = 'Log in';
    const logged = true;

    return <button>{logged ? 'Enter' : text}</button>
}

const EmpItem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
    text-align: left;

    a{
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange' : 'black'};
    }
    
    input{
        display: block;
        margin-top: 10px;
    }
`;

const HeaderText = styled.h2`
    font-size: 22px;
`;

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 5px 5px 10px rgba(0,0,0,.2);
`;

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: '',
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value,
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;

        console.log(this);
        return (
            <EmpItem active>
                <br />
                <br />

                <Button onClick={this.nextYear}>{this.state.text}</Button>
                <HeaderText>My name is {name}, surname is - {surname},
                    age - {years},
                    position - {position}</HeaderText>
                <a href={link}>My profile</a>

                <form>
                    <span>Input position</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'yellow')} />
                </form>

            </EmpItem>
        )
    }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
    return(
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});
                })
            }
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header />
            </StrictMode>
            <Field />
            <Btn />
            <br />
            <br />
            <hr />

            <Wrapper>
                <BootstrapTest
                    left = {
                        <DynamicGreating color={'primary'}>
                            <h2>This weel was hard</h2>
                            <h2>Hello Word!</h2>
                        </DynamicGreating>
                    }

                    right = {
                        <DynamicGreating color={'primary'}>
                            <h2>Right</h2>
                        </DynamicGreating>
                    }
                />

                <WhoAmI name='John' surname="Smith" link="facebook.com" />
                <WhoAmI name='Alex' surname="Shepard" link="facebook.com/1" />
            </Wrapper>
        </div>
    );
}

export { Header };
export default App;
