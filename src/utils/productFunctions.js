import { createUrlFromName } from "./catalogFunctions";

export const getProductByUrl = (catalog, url) => {
	return catalog.find((product) => url === product.url);
};

export const serachProducts = (catalog, text) => {
	if (text.length) return catalog.filter((product) => product.url.indexOf(createUrlFromName(text)) !== -1);
	return [];
};

export const parsePriceToFloat = (price) => {
	price = price.slice(2);
	price = price.replace(",", ".");
	return parseFloat(price);
};

export const parseFloatToPrice = (float) => {
	return `R$ ${float.toFixed(2).replace(".", ",")}`;
};
