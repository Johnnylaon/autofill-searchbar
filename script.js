const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
	'Apple',
	'Apricot',
	'Avocado 🥑',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu',
];

function search(str) {
	let results = [];

	// TODO
	// convert string to lowercase for matching
	const convertStr = str.toLowerCase();
	if (convertStr) {
		results = fruit.filter((fruitName) => {
			const lowerCaseFruit = fruitName.toLowerCase();
			//includes check if str appear in fruitname
			return lowerCaseFruit.includes(convertStr);
		});
	}
	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value.trim();
	const results = search(inputVal);
	showSuggestions(results, inputVal);
	console.log('results', results);
}

function showSuggestions(results, inputVal) {
	console.log('suggestions', suggestions);
	// TODO
	// clear suggestions
	suggestions.innerHTML = '';
	// creating drop down list
	if (results.length > 0) {
		results.forEach((result) => {
			const fruitList = document.createElement('li');
			fruitList.textContent = result;
			suggestions.appendChild(fruitList);
		});
		suggestions.style.display = 'block'; //display the drop down
	} else {
		suggestions.style.display = 'none'; // hide the drop down if there are no results
	}
}

function highlightSuggestion(e) {
	const target = e.target;
	if (target.tagName.toLowerCase() === 'li') {
		//remove previous highlight
		const highlighted = document.querySelector('.highlighted');
		if (highlighted) {
			highlighted.classList.remove('hightlighted');
		}
		//highlight current suggestion
		target.classList.add('highlighted');
	}
}

function useSuggestion(e) {
	// TODO
	const selectedSuggestion = e.target.textContent;
	input.value = selectedSuggestion; // populate search box
	suggestions.style.display = 'none'; // hide dropdown
}

// event listener for key stroke
input.addEventListener('input', searchHandler);
// event listener for hovering over suggestion
suggestions.addEventListener('mouseover', highlightSuggestion);

// event listener for clicking on suggestion
suggestions.addEventListener('click', useSuggestion);
