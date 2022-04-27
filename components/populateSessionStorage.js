

// Creates a favRecipes value to easily store favorite recipes. Doing it this way prevents synchronization issues
export const populateFavorites = (favoriteArray) => {
	sessionStorage.setItem("favRecipes", "[]");
	const requestOptions = {
		method: "GET"
	};

	for (const [key2, value2] of Object.entries(favoriteArray)) {
		console.log(key2);
		fetch("https://easychef.herokuapp.com/recipe/get_recipe_by_id?id=" + value2, requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.success != 0) {
					console.log(JSON.stringify(data));
					let a = JSON.parse(sessionStorage.getItem("favRecipes"));
					a.push(data);
					sessionStorage.setItem("favRecipes", JSON.stringify(a));
				}

			})
			.catch((error) =>
				console.log(error));

	}

};

//Gathers information from the database and puts it into the session storage for quick access
export const populateSessionStorage = (user) => {
	sessionStorage.setItem("userObj", JSON.stringify(user));

	for (const [key, value] of Object.entries(user)) {
		console.log(key);
		if (key === "favorite") {
			console.log(value);
			populateFavorites(value);
		}
		if (typeof value === "string") {
			sessionStorage.setItem(key, value);
		} else {
			sessionStorage.setItem(key, JSON.stringify(value));
		}

	}
};