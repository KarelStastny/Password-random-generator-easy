//======Password generator
let pasword = ""

getPassword = () =>{
    const chars = "qwertzuioplkjhgfdsayxcvbnmQAYWSXEDCRFVTGBZHNUJMIKOLP123456789!@#$%^&*()-_"
    let passwordLenght = 13
    pasword = ""

    for(let i = 0; i < passwordLenght; i++){
        //vybere náhodný index z chars
        let randomNumber = Math.floor(Math.random()*chars.length)

        //do password uloží obsah náhodného čísla 
        pasword += chars.substring(randomNumber, randomNumber+1)
    }
    document.querySelector("#password").value = pasword

}


//===========Copy function




getCopy = () =>{

    document.querySelector("#copyImage").addEventListener("click", function(){

        let copyPasword = document.querySelector("#password")
            copyPasword.select()

        document.execCommand("copy")
  
        
    })


}