
const fs= require('fs');



const crearArchivo= async (base, listar, hasta)=>{
    
    try {
                      
        let salida='';
        
        for (let i=1; i<=hasta;i++){
                
            salida += `${base} x ${i} = ${base*i}\n`;
                
        }
        if (listar) {

            console.log('======================='.rainbow)
            console.log(`     tabla del: ${base}     `)
            console.log('======================='.rainbow)
           
            console.log(salida.green); 

        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
       return `tabla-${base}.txt`;   
                               
          
    } catch (error) {
        throw (err);
    }
    

}

module.exports={
    crearArchivo
}