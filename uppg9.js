

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    const sort = (siffror) => {
        for (let tal of siffror) {
            if (tal %2 === 0) {
                console.log(tal + ' jämt')
            }
            else {
                console.log(tal + ' udda')
            }
        }
    }
  sort([1,4,7,85,99]);
}

module.exports = { uppg9 };