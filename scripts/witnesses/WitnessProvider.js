let witnesses = []

export const useWitnesses = () => criminals.slice()

export const getWitnesses = () => {

   return fetch("https://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            apiData => {
                witnesses = apiData
            }
        )
}