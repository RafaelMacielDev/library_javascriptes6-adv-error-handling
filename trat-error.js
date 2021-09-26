//Situação 
/*
console.log(name);
const name = 'Rafael Maciel';
console.log('Keep going...');
*/

//Capturando o erro com try catch
/*
try {
    console.log(name);
    const name = 'Rafael Maciel';
} catch (err) {
    console.log('Error: ', err);
}
console.log('Keep going...');
*/

//Capturando o erro com try catch & finally
/*
try {
    console.log(name);
    const name = 'Rafael Maciel';
} catch (err) {
    console.log('Error: ', err);
} finally {
console.log('Keep going...');
}
*/

//Capturando o erro com try catch & finally e instanciando o erro, colocando mensagens customizadas no erro.

try {
    const name = 'Rafael Maciel';
    const myError = new Error('Custom message');

    throw myError;
} catch (err) {
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
}
