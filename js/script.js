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
        console.log("ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR ERROR") 
    }

    //navn på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        document.getElementById("stasjonNavn" + (stasjonsNummer + 1)).innerHTML = contentsInfo.stations[stasjonsNummer].name;
    }
    //navn på Stasjoner End

    //sykler på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        document.getElementById("syklerPåStasjon" + (stasjonsNummer + 1)).innerHTML = "Det er " + contentsStatus.stations[stasjonsNummer].num_bikes_available + " sykler ledig.";

        //fargeSetting Og % Regulering Start
        if (contentsStatus.stations[stasjonsNummer].num_bikes_available <= contentsInfo.stations[stasjonsNummer].capacity * 0.2) {
            document.getElementById("syklerPåStasjon" + (stasjonsNummer + 1)).style.backgroundColor = "#CC0000";
        }
        else if (contentsStatus.stations[stasjonsNummer].num_bikes_available <= contentsInfo.stations[stasjonsNummer].capacity * 0.3) {
            document.getElementById("syklerPåStasjon" + (stasjonsNummer + 1)).style.backgroundColor = "#CCCC00";
        }
        else {
            document.getElementById("syklerPåStasjon" + (stasjonsNummer + 1)).style.backgroundColor = "#00CC00";
        }
        //fargeSetting Og % Regulering End
    }
    //sykler på Stasjoner End

    //sykler på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        document.getElementById("parkeringsPlasserTiljenglig" + (stasjonsNummer + 1)).innerHTML = "Det er " + contentsStatus.stations[stasjonsNummer].num_docks_available + " parkeringsplasser ledig.";

        //fargeSetting Og % Regulering Start
        if (contentsStatus.stations[stasjonsNummer].num_docks_available <= contentsInfo.stations[stasjonsNummer].capacity * 0.2) {
            document.getElementById("parkeringsPlasserTiljenglig" + (stasjonsNummer + 1)).style.backgroundColor = "CC0000";
        }
        else if (contentsStatus.stations[stasjonsNummer].num_docks_available <= contentsInfo.stations[stasjonsNummer].capacity * 0.3) {
            document.getElementById("parkeringsPlasserTiljenglig" + (stasjonsNummer + 1)).style.backgroundColor = "#CCCC00";
        }
        else {
            document.getElementById("parkeringsPlasserTiljenglig" + (stasjonsNummer + 1)).style.backgroundColor = "#00CC00";
        }
        //fargeSetting Og % Regulering End

    }
    //sykler på Stasjoner End

    //drift på Stasjoner Start
    for (let stasjonsNummer = 0; stasjonsNummer < 10; stasjonsNummer++) {
        if (contentsStatus.stations[stasjonsNummer].is_installed == 1) {
            document.getElementById("drift" + (stasjonsNummer + 1)).innerHTML = "Denne Stasjonen er i drift.";
            document.getElementById("drift" + (stasjonsNummer + 1)).style.backgroundColor = "#00CC00";
        }
        else {
            document.getElementById("drift" + (stasjonsNummer + 1)).innerHTML = "Denne Stasjonen er ikke drift."
            document.getElementById("drift" + (stasjonsNummer + 1)).style.backgroundColor = "#CC0000";
        }
    }
    //drift på Stasjoner End
    let nummerPåStasjoner = (contentsInfo.stations)
    console.log(nummerPåStasjoner)
}
getContent();