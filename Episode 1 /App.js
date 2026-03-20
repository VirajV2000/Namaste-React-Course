const heading=React.createElement("h1",{id:"heading1",xyz:"abc"},"Hello World");

//create element returns an object which have props id:"heading1",xyz:"abc",children:"Hello World"}
console.log(heading,'heading ');

const root=ReactDOM.createRoot(document.getElementById("root"));

//objective of render method is used to append an heading object into root 
root.render(heading);
