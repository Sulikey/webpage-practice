addEventListener('load', function() {
	const originalH1 = document.querySelector("h1");
	originalH1.remove();

	const body = document.querySelector('body');

	const newH1 = document.createElement("h1");
	newH1.append("Webpage Recreation Practice");
	body.append(newH1);

	const newP = document.createElement("p");
	newP.append("The HTML of this webpage was created with Javascript.");
	body.append(newP);

	const newImg = document.createElement("img");
	newImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
	newImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
	newImg.setAttribute("style", "width:50%");
	body.append(newImg);

	const newSecondH1 = this.document.createElement('h1');
	newSecondH1.append('Facts about the Multicolored Tanager');
	body.append(newSecondH1);

	const newUl = document.createElement('ul');
	const newLi1 = document.createElement('li');
	newLi1.append('It is endemic to the mountains of Colombia.');
	const newLi2 = document.createElement('li');
	newLi2.append('It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.');
	newUl.append(newLi1, newLi2);
	body.append(newUl);

	const newH2 = document.createElement('h2');
	newH2.append('Source');
	body.append(newH2);

	const newA = document.createElement('a');
	newA.setAttribute('href', 'https://en.wikipedia.org/wiki/Multicoloured_tanager');
	newA.append('Wikipedia');
	body.append(newA);
});