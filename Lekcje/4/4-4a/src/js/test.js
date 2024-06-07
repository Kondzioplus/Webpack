import Icon from "../images/icon.png";

export function test(text = "") {
	document.body.innerHTML = `
		<header class="p-header">
			<h1>${text}</h1>
		</header>		
	`;
	const img = new Image();
	img.src = Icon;
	document.body.append(img);
}