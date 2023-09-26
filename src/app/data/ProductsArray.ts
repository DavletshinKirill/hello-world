import {Product} from "../models/product";
export const productsArray: Product[] = [];

const product1 = new Product( "Диван", 699.99, "Удобный диван для гостиной.", "https://cdn.domdivanov.com/files/imgs/ig1111922/divan-pryamoi-blister-bd-3-590x430.jpg");
const product2 = new Product("Стол обеденный", 29.99, "Красивый стол для обедов с семьей.", "https://ogogo.ru/images/products/96037/797e8f86d21c769cbb6a57f35a6db4c4.webp");
const product3 = new Product("Шкаф-купе", 39.99, "Просторный шкаф с зеркальными дверцами.", "https://kupe116.ru/images/shkafy-kupe/foto/shf500-m.jpg");

const product4 = new Product( "Кровать", 49.99, "Комфортная кровать для хорошего сна.", "https://lazurit.com/upload/iblock/357/ty9or8s60lea3u7zwax0hz8580h66p2e/Magna_Belyy_Glyanets_Ekokozha_1.jpg");
const product5 = new Product( "Кухонный гарнитур", 59.99, "Практичный гарнитур для кухни.", "https://kupe116.ru/images/fotos/kuhni/kf100-m.jpg");
const product6 = new Product( "Комод", 69.99, "Стильный комод для хранения вещей.", "https://mebel58.com/image/catalog/%D0%90%D0%9D%D0%93%D0%90%D0%A0%D0%90/%D0%BA%D0%BE%D0%BC%D0%BE%D0%B4%20%D0%B0%D0%BD%D0%B3%D0%B0%D1%80%D0%B0%20%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%82.jpg");


const product7 = new Product( "Зеркало", 75.99, "Зеркало - это элегантный аксессуар для вашего дома.", "https://media.istockphoto.com/id/1310496508/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B5-%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%BE%D0%B5-%D0%B7%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D0%BE.jpg?s=612x612&w=0&k=20&c=kj_51KY8FRIc6M6zpJ5r3OhG9ZJYa_qwHzeiKLeF-9g=");
const product8 = new Product( "Тумба", 120.99, "Она обладает функциональными ящиками или полками.", "https://theidea.ru/61435-large_default/prikrovatnay-tumba-cs001.jpg");
const product9 = new Product( "Полка", 9.99, "Полка - это отличное решение для экономии места и организации пространства в вашем доме.", "https://mebelony.ru/images/BTS_HOME/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D1%8B/%D0%98%D0%BE%D0%BD-4/%D0%9F%D0%BE%D0%BB%D0%BA%D0%B0-%D0%98%D0%BE%D0%BD-4-%D0%B2%D0%B8%D0%B4-5.jpg");

const product10 = new Product( "Кресло", 150.99, "Кресло - это идеальное место для отдыха и расслабления.", "https://cdn.domdivanov.com/files/imgs/ig1111924/kreslo-voyazh-4-1-360x296.png");

productsArray.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10);
