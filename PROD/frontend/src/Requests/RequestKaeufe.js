//URL Festlegung
const url = "http://abc.de:8080";

//Asynchrone Methode für die Durchführung der HTTP-Requests
export async function KaeufeGET(){
    try {
        const response = await fetch(url + "/kaeufe/get", {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const result = await response.json();
            console.log(result);
            return result;
        }
    }
    catch (err) {
        return false
    }
}
