async function getContent() {

    //innhenting av Stasjon Informasjon Start
    let contentsInfo = [];
    const dataInfo = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json");
    const jsonInfo = await dataInfo.json();
    contentsInfo = jsonInfo.data;
    //innhenting av Stasjon Informasjon End

    //innhenting av Stasjon Status Start
    let contentsStatus = [];
    const dataStatus = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json");
    const jsonStatus = await dataStatus.json();
    contentsStatus = jsonStatus.data;
    //innhenting av Stasjon Status End
    
    //if setning som sjekker om vi får kontakt med APIen (contentsInfo)

    if (contentsInfo) {
        console.log("Vi har kontakt!") 
    }
    else {
        console.log("ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ") 
    }

    //navn på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        let nummer = stasjonsNummer+1;
        let sammensettning = "stasjonNavn" + nummer;
        document.getElementById(sammensettning).innerHTML = contentsInfo.stations[stasjonsNummer].name;
    }
    //navn på Stasjoner End

    //sykler på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        let nummer = stasjonsNummer+1;
        let sammensettning = "syklerPåStasjon" + nummer;
        document.getElementById(sammensettning).innerHTML = "Det er " + contentsStatus.stations[stasjonsNummer].num_bikes_available + " sykkler ledig.";
    }
    //sykler på Stasjoner End

    //sykler på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        let nummer = stasjonsNummer+1;
        let sammensettning = "parkeringsPlasserTiljenglig" + nummer;
        document.getElementById(sammensettning).innerHTML = "Det er " + contentsStatus.stations[stasjonsNummer].num_docks_available + " parkeringsplasser ledig.";
    }
    //sykler på Stasjoner End

    //drift på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        let nummer = stasjonsNummer+1;
        if (contentsStatus.stations[stasjonsNummer].is_installed == 1) {
            document.getElementById("drift" + nummer).innerHTML = "Denne Stasjonen er i drift."
        }
        else {
            document.getElementById("drift" + nummer).innerHTML = "Denne Stasjonen er ikke drift."
        }
    }
    //drift på Stasjoner End
}
getContent();