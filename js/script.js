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
    document.getElementById("stasjonNavn1").innerHTML = contentsInfo.stations[0].name;
    document.getElementById("stasjonNavn2").innerHTML = contentsInfo.stations[1].name;
    document.getElementById("stasjonNavn3").innerHTML = contentsInfo.stations[2].name;
    document.getElementById("stasjonNavn4").innerHTML = contentsInfo.stations[3].name;
    document.getElementById("stasjonNavn5").innerHTML = contentsInfo.stations[4].name;
    document.getElementById("stasjonNavn6").innerHTML = contentsInfo.stations[5].name;
    document.getElementById("stasjonNavn7").innerHTML = contentsInfo.stations[6].name;
    document.getElementById("stasjonNavn8").innerHTML = contentsInfo.stations[7].name;
    document.getElementById("stasjonNavn9").innerHTML = contentsInfo.stations[8].name;
    document.getElementById("stasjonNavn10").innerHTML = contentsInfo.stations[9].name;
    //navn på Stasjoner End
    document.getElementById("syklerPåStasjon1").innerHTML = contentsStatus.stations[0].num_bikes_available
}
getContent();