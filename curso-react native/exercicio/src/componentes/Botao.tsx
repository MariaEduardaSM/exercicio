import React from "react";
import  { Button } from "react-native";

export default (props: any) => {

    function executar(){
        console.warn('Botão acionado!') 
    {/* essa é a melhor opção a ser usada evitando que você erre, e se eu usasse log no lugar de warn não iria aparecer a mensagem 
no emulador, apenas no terminal */}
     

    }

    return(

<> 

        <Button
        title="Executar"
        onPress={executar}
    />
        
        
         <Button
        title="Executar #2"
        onPress={function(){
            console.warn("exec.#02!")
            
        }}
        />

        <Button
        title="Executar #3"
        onPress={()=> console.warn("Exec.#3")}
            
        
        />
        
     </>   
    )  

        
}
