

const getStoredBook=()=>{
 const storedBookSTR=localStorage.getItem("readList");
 if(storedBookSTR){

    const storedBookData=JSON.parse(storedBookSTR);
    return storedBookData;
 }
else{
    return [];

}

}


const addToStoredDB=(id)=>{
const storedBookData=getStoredBook();
if(storedBookData.includes(id)){
    alert("this book is already added the read list")
}
else{

 storedBookData.push(id);
 
const dataForPushIntheLocal=JSON.stringify(storedBookData)
localStorage.setItem("readList",dataForPushIntheLocal);
}
}
export{addToStoredDB,getStoredBook}
