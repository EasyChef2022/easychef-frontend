
//Gathers information from the database and puts it into the session storage for quick access
export const populateSessionStorage = (user) => {

    for (const [key, value] of Object.entries(user)) {
        if(typeof value === "string"){
            sessionStorage.setItem(key, value);
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        } 
      }
}