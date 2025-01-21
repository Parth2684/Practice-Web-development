function runAfter1S (fn: () => void) {
    setTimeout(fn, 1000)
}

runAfter1S(()=>{
    console.log("hi there")
})