const filterSizes = (sizes) => {
	return sizes.filter((size) => size.available).map((size) => size.size);
};

const getPromotionInfo = (product) => {
	return product.on_sale
		? {
				regular_price: product.regular_price,
				discount_percentage: product.discount_percentage,
		  }
		: null;
};

const checkImage = (image) => {
	const imagePlaceHolder = "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível";
	return image.length ? image : imagePlaceHolder;
};

export const createUrlFromName = (name) => {
	const lowercase = name.toLowerCase();
	const dashed = lowercase.replace(/ /g, "-");
	return dashed;
};

const leanProduct = (product) => {
	return {
		name: product.name,
		on_sale: product.on_sale,
		actual_price: product.actual_price,
		...getPromotionInfo(product),
		installments: product.installments,
		image: checkImage(product.image),
		url: createUrlFromName(product.name),
		sizes: filterSizes(product.sizes),
	};
};

export const catalogFilter = (catalog) => {
	return catalog.map((product) => leanProduct(product));
};
