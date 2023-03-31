//Getting the document object for the fruit function
const lol = document.getElementById('fruit');

// //Creating the fruit function
// function getfruit(fruitname){
//     return new Promise((resolve,reject)=> {
//         if(fruitname.toUpperCase() === "WATERMELON"){
//             setTimeout(()=>{
//                 reject("There is no watermelon");
//             },2000)
            
//         }
//         else{
//             setTimeout(()=>{
//                 resolve("Here is your fruit");
//             },1000)  
//         } 
//     })
// }
// //user input
// let inp = prompt("Enter your fruitname: ");

// //calling the actual function
// getfruit(inp).then(val => lol.innerHTML = val).catch(err => lol.innerHTML = err)

//Array manipulation'
// function arrayManipulation(array,arraySquare,filterArray){
//     arraySquare(array)
//     return filterArray(array)
// }

// let arraySquare = (array) => { 
//     let square = [ ];
//     array.forEach(element => {
//         square.push(element*element);
//         })
//     return square
// };

// let filterArray = (array) => {
//     return array.filter((element) => element < 100)    
// }
// let x = [1,2,3,4,777,333,12312];
// let y = arrayManipulation(x,arraySquare,filterArray)
// console.log(y)

//async await
// async function fetchUserData(){
//     let apiData = fetch("https://jsonplaceholder.typicode.com/users")
//     let data = (await apiData).json()
//     return data
// }
// let dataArr = []
// fetchUserData().then(informatio => informatio.forEach(element => {
//     let tempEmail = element.email
//     let tempName = element.name
//     let tempObj = {tempEmail,tempName}
//     dataArr.push(tempObj)
//     lol.textContent += `This is name ${tempName} This is email ${tempEmail}`
// }))

// lol.textContent = ``
// async function fetchData(){
//     const apiData = (await fetch("https://jsonplaceholder.typicode.com/todos")).json()
//     return apiData
// }
// fetchData().then(info => {
//     const requiredInfo = info.filter((element)=> element.id <= 50 && element.completed == true)
//     requiredInfo.forEach(element => {
//         lol.innerHTML += `${element.id}    ${element.title}    ${element.completed}<br>`
//     });
// })

// the clock
function theCLock(){
    let time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let display = `${hours} : ${minutes} : ${seconds}`
    lol.innerHTML = display
}
setInterval(theCLock,1000)