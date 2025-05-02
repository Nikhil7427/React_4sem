// react is javascript library created by facebook
// Mot popular javascript library for creating UI.
//Also used by netflix abd instagram.
// used to create single Page applications(SPA).
//we can build modern, fast Single page application or websites with React.
// ..library is a programming can be explained as a collection of codes, 
// We use a library to erite a code in a much simpler way or to import a feature from it into ur projrcts.
// JQuery is a library for example.
// we can import JQuery feature to our project.
// ..Framework: it is complete package of code with its own functionality & libraries. A framework has its own rule, 
// you don't have much flexibility and the project is dependent on the framework you use.
//Angular is an example of a Framework
// // What is the benifit of Virtual dom?
//// Each you make a change in the code, DOM will be completly updated and rewritten. 
// This is an expensive operation and consumes lots of time. In this point , react provides a solution: The Virtual DOM.
// So when something changes:
//     //react first creates an exact copy of the DOM. then react figures out ehich part is new and only updates that specific part of DOM.

// IN JSX syntax,we write html tags inside javascript.
// int react, for example,const element = <h1>Hello!</h1>;

// jsx: javascript xml

class Hello extends React.Component{
    render(){
        return <div>Hello{this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World"/>,
    document.getElementById('root')
);