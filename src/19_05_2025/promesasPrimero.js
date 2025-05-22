import { getheroeById } from './7_05_2025/Import_Export';

const getheroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
           const p1 = getheroeById(id);
           if (p1) {
               resolve(p1);
           }else{
               reject('No se encontro el heroe');
           }



        }, 5000);



        
    });


};

getheroeByIdAsync(10)
.then(console.log)
.catch(console.error);
