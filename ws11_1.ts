class MenuItem {
    constructor(private name: string, private price: number, private category: string) {}
    get getName(): string {
        return this.name;
    }
    get getPrice(): number {
        return this.price;
    }
    getMenuInfo(): string {
        return `เมนู: ${this.name} | ราคา: ${this.price} บาท | ประเภท: ${this.category}`;
    }
}

class Restaurant {
    constructor(private name: string,private menuItem: MenuItem[]) {}
    showMenu(): void {
    console.log(`Menu ของร้าน ${this.name}:`);
    this.menuItem.forEach((item) => {
    console.log(item.getMenuInfo());
    });
    }
    calculateNetprice(total: number): number {
    const discountRate = total > 500 ? 0.01 : 0;
    const discount = total * discountRate;
    return total - discount;
    }
}


class Customer {
    constructor(private name: string) {}
    placeOrder(rest: Restaurant,order: Order): void{
        const total = order.calculateTotal();
        const netPrice = rest.calculateNetprice(total);
        console.log(`${this.name}สั่ง order : `);
        console.log(`ราคาสุทธิ: ${netPrice.toFixed(2)}`);
    }
}

class Order {
    constructor(
        private items: { item: MenuItem; quantity: number }[] = []) {}

    addItem(item: MenuItem, quantity: number): void {
    this.items.push({ item, quantity });
    }

        

    showOrder(): void {
    console.log("รายการคำสั่งซื้อ: ");
    this.items.forEach(({ item, quantity }) => {
      console.log(`${quantity} x ${item.getMenuInfo()} = ${(item.price * quantity).toFixed(2)}`);
    })
}
    calculateTotal(): number {
    let total = 0;
    for (const { item, quantity } of this.items) {
      total += item.price * quantity;
    }
    return total;
    }
}

const menu1 = new MenuItem("Pizza", 199, "Italian");
const menu2 = new MenuItem("Pasta", 199, "Italian");
const menu3 = new MenuItem("Steak", 299, "Europe");
const rest1 = new Restaurant("Pizza Company", [menu1, menu2, menu3]);
rest1.showMenu();
console.log("----------------------------------------");
const myOrder = new Order();
myOrder.addItem(menu1, 2);
myOrder.addItem(menu3, 1);
const customer = new Customer("Alice");
customer.placeOrder(rest1, myOrder);