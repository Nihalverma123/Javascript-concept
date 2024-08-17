let promisOne= new Promise(function(resolve , reject){

   setTimeout(() => {
    
    console.log("Assynic task is compleated")

    resolve()
   }, 5000);

})
promisOne.then(function(){
    console.log("Promiss is fullfilled")
})
new Promise(function(resolve , reject){

    setTimeout(() => {
        
        console.log('promise samajha araha hai')
        resolve()
    },2000 );
}).then(()=>{
    console.log('Thank you Hitesh sir')
}
)

let promiseThree = new Promise(function( resolve ,reject){

   setTimeout(() => {
    resolve({ name: 'Nihal' , email:'nihalv197@gmail.com'})

   }, 4000);
})
promiseThree.then(function(user){
    console.log(user)
})
 let promisFour =  new Promise((resolve ,reject)=>{

    setTimeout(() => {
        
        let error =false;

        if(!error){
            console.log('everything is fine');
            resolve({userName:'nihal', passward :'123'})
        }
        else{
reject('Some thing is Wrong')
        }
    }, 3000);
    
 });
 promisFour.then((user)=>{
console.log(user);
return user.userName

 }).then((userName)=>{

console.log(userName)
 }).catch((error)=>{
console.log(error)
 }).finally(()=>{
    console.log('promiss is eather resoleved or rejactead');
    
 })

 let promisFive =  new Promise((resolve ,reject)=>{

    setTimeout(() => {
        
        let error =true;

        if(!error){
            console.log('everything is fine hurrah');
            resolve({userName:'javascript', passward :'123'})
        }
        else{
reject('  ERROR :Some thing is Wrong')
        }
    }, 3000);
    
 });

 async function promiseConsume() {
    try{
        let response = await promisFive
        console.log(response);
        
    }catch (error){
        console.log(error);
        
    }
    
 } 
 promiseConsume()