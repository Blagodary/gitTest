$(function() {

let allSumm = +prompt('Ваш бюджет?', '10000');
let nameMagaz = prompt('Название вашего магазина?', 'Солнышко');


let mainList = {
	summ: allSumm,
	name: nameMagaz,
	shopGoods: [],
	employers: {},
	open: true 
};
console.log(mainList);

let goods = prompt('Какой тип товаров будем продавать?', 'трусы');
mainList.shopGoods = goods.split(',');
let oneDaySumm = mainList.summ / 30
alert("Ваш бюджет на 1 день " + oneDaySumm + 'руб', '')











});
