//Outer Function
function outerFun(inFun) {
    inFun()
};

//inner Function Definition 
function innerFun() {
    console.log("Hello World From Inner Function")
}

//Outer Function Called With The Inner Function As Argument
outerFun(innerFun);
