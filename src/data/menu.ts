// Precios en ARS según la carta pública consultada. No son precios garantizados: editar acá.
export type Item = { name: string; desc?: string; price?: number; whole?: number; slice?: number };
export type Category = { id: string; title: string; intro?: string; photo?: string; items: Item[]; note?: string };
const e = (name: string, price = 3500): Item => ({ name, price });
export const menu: Category[] = [
  { id: "entradas", title: "Entradas", photo: "entradas", items: [
    { name: "Provola", price: 11000, desc: "Provoleta asada a leña con cherrys confitados y pesto." },
    { name: "Pikdita", price: 18000, desc: "Burratina, reggianito, queso azul, mortadella, lomito ahumado y cherrys confitados." },
    { name: "Fainá de gala", price: 8000, desc: "Fainá cubierta de kale, alioli y praliné de almendras." },
    { name: "Fainá", price: 2000 } ] },
  { id: "napolitanas", title: "Pizzas napolitanas", photo: "napolitanas", intro: "Harina orgánica y 24 horas de fermentación.", items: [
    { name: "Mozzarella", price: 23000, desc: "Pomodoro italiano y mozzarella." },
    { name: "Margherita", price: 24000, desc: "Pomodoro italiano, mozzarella fior di latte, albahaca y oliva." },
    { name: "Mortadella", price: 27000, desc: "Stracciatella, mortadella con pistacchio y pesto." },
    { name: "Fugazzeta", price: 23000, desc: "Mozzarella, mix de cebollas asadas y orégano." },
    { name: "Kimchi", price: 26000, desc: "Pomodoro italiano, kimchi, morrón asado y mix de cebollas. Opción con mozzarella con adicional." },
    { name: "Pepperoni", price: 27000, desc: "Pomodoro italiano, mozzarella y pepperoni italiano." },
    { name: "Lomo y morrones", price: 26000, desc: "Pomodoro italiano, mozzarella, lomito ahumado y morrones asados a leña." },
    { name: "4K", price: 26000, desc: "Queso azul, reggianito, parmesano, mozzarella y praliné de almendras." },
    { name: "Ahumada", price: 23000, desc: "Pasta de berenjenas ahumadas y girgolas." } ] },
  { id: "molde", title: "Pizzas al molde", photo: "molde", intro: "Entera o por porción.", items: [
    { name: "Mozzarella", whole: 25000, slice: 3500 }, { name: "Napolitana", whole: 31000, slice: 4000 },
    { name: "Lomo y palmitos", whole: 35000, slice: 5000 }, { name: "Verdura", whole: 26000, slice: 3500 },
    { name: "Primavera", whole: 35000, slice: 5000 }, { name: "Rellena", whole: 42000, slice: 6000 },
    { name: "Lomo y morrones", whole: 35000, slice: 5000 }, { name: "Provolone", whole: 31000, slice: 4000 } ] },
  { id: "empanadas", title: "Empanadas", photo: "empanadas", intro: "Todas a $3.500 cada una.",
    items: ["Carne", "Queso y cebolla", "Pollo", "Lomito ahumado y muzza", "Capresse", "Verdura y salsa blanca", "Calabresa"].map((n) => e(n)) },
  { id: "pizzandwich", title: "Pizzandwich", photo: "pizzandwich", intro: "En pan de pizza.", items: [
    { name: "Lomito ahumado y mozzarella", price: 15000 }, { name: "Mozzarella y mix de cebollas", price: 12000 },
    { name: "Mortadela, stracciatella y pesto", price: 18000 } ] },
  { id: "salado", title: "Salado", photo: "salado", items: [
    e("Chipá"), e("Medialuna"), { name: "Medialuna con lomito y queso", price: 5500 }, { name: "Tostadas", price: 8000 },
    { name: "Yogurcito", price: 10000 }, { name: "Tostón cottage", price: 14000 }, { name: "Tostón capresse", price: 10000 },
    { name: "Tostado de chipá", price: 9500 } ] },
  { id: "dulces", title: "Cosas dulces", photo: "dulces", items: [
    { name: "Porción de torta", price: 11000 }, { name: "Tiramisú", price: 11000 }, { name: "Cookies", price: 5000 } ] },
  { id: "cafe", title: "Café", photo: "cafe", items: [
    { name: "Espresso", price: 4500 }, { name: "Cortadito", price: 4500 }, { name: "Americano", price: 4500 },
    { name: "Cortado", price: 5800 }, { name: "Cappuccino", price: 5500 }, { name: "Mucha leche", price: 5800 },
    { name: "Café con leche", price: 6300 }, { name: "Chococafé", price: 6500 }, { name: "Caramelito", price: 6500 } ],
    note: "Adicionales y variedades de té: consultalos en el local o por WhatsApp." },
  { id: "tragos", title: "Tragos", photo: "tragos", items: [
    { name: "Cynar medianera", price: 8000 }, { name: "Vecino vermú", price: 8000 },
    { name: "Vermú botella y soda", price: 25000 }, { name: "Gin tonic — Bombay", price: 10000 },
    { name: "Aperol spritz", price: 9000 }, { name: "Copa de vino", price: 7000 } ] },
  { id: "vinos", title: "Vinos", photo: "vinos", items: [], note: "Vinos: consultar opciones y precios." },
  { id: "cervezas", title: "Cervezas artesanales", photo: "cervezas", items: [
    { name: "El Dorado — Lager", price: 8000 }, { name: "Trochita — Amber Lager", price: 8000 },
    { name: "Cumbre — IPA", price: 8000 }, { name: "Plaza de Mulas — APA", price: 8000 },
    { name: "Baqueano — Homey", price: 8000 }, { name: "Estibador — Porter", price: 8000 } ] },
  { id: "bebidas", title: "Sin alcohol", photo: "bebidas", intro: "Sin alcohol.", items: [
    { name: "Agua con o sin gas", price: 3500 }, { name: "Gaseosa en botella de vidrio", price: 4500 } ] },
];
