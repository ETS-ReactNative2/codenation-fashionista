import axios from "axios";
import { catalogFilter } from "../../utils/catalogFunctions";

export const fetchCatalog = () => {
	return (dispatch) => {
		dispatch({ type: "LOAD_CATALOG_REQUEST" });
		axios
			.get("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
			.then((res) => {
				const products = catalogFilter(res.data);
				dispatch({ type: "LOAD_CATALOG_SUCCESS", products });
			})
			.catch((err) => {
				dispatch({ type: "LOAD_CATALOG_ERROR", err });
			});
	};
};
