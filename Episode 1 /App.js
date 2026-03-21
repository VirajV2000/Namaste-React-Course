/*
<div id="parent">
        <div id="child">
            <h1>
                I am h1 tag
            </h1>
            <h2>
                I am h2 tag
            </h2>
        </div>
        <div id="child2">
            <h1>
                I am h1 tag
            </h1>
            <h2>
                I am h2 tag
            </h2>
        </div>

</div>
*/ 



// const heading=React.createElement("h1",{id:"heading1",xyz:"abc"},"Hello World");

const nestedDiv=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])])

//create element returns an object which have props id:"heading1",xyz:"abc",children:"Hello World"}
console.log(nestedDiv,'heading ');




const root=ReactDOM.createRoot(document.getElementById("root"));

//objective of render method is used to append an heading object into root 
root.render(nestedDiv);






