class SalePerson {
    constructor(name, carsSold) {
        this.name = name;
        this.carsSold = carsSold;
    }

    describe() {
        return `${this.name} sold ${this.carsSold} cars`;
    }
}

class CarDealership {
    constructor(name) {
        this.name = name;
        this.salePersons = [];
    }

    addSalesPerson(salePerson) {
        if (salePerson instanceof SalePerson) {
            this.salePersons.push(salePerson);
        } else {
            throw new Error(`You can only add an instance of SalePerson. Argument is not a SalePerson: ${salePerson}`);
        }
    }

    describe() {
        return `${this.name} sold ${this.salePersons.length} SalePerson(s)`;
    }
}

class Menu {
    constructor() {
        this.carDealerships = [];
        this.selectedCarDealership = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.findDealership();
                    break;
                case '2':
                    this.viewDealership();
                    break;
                case '3':
                    this.removeDealership();
                    break;
                case '4':
                    this.displayDealerships();
                    break;
                default:
                    selection = '0';
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye');
    }

    showMainMenuOptions() {
        return prompt(`
            0) Exit
            1) Find Dealership
            2) View Dealership
            3) Remove Dealership
            4) Display Dealerships
        `);
    }

    findDealership() {
        let name = prompt('Enter name for the dealership');
        this.carDealerships.push(new CarDealership(name));
    }

    viewDealership() {
        let index = prompt('Enter the index of the dealership you wish to view');
        if (index > -1 && index < this.carDealerships.length) {
            this.selectedCarDealership = this.carDealerships[index];
            let description = 'Dealership Name: ' + this.selectedCarDealership.name + '\n';

            for (let i = 0; i < this.selectedCarDealership.salePersons.length; i++) {
                description += i + ') ' + this.selectedCarDealership.salePersons[i].name +
                    ' - ' + this.selectedCarDealership.salePersons[i].carsSold + ' cars\n';
            }

            alert(description);
        }
    }

    removeDealership() {
        let index = prompt('Enter the index of the dealership you wish to remove');
        if (index > -1 && index < this.carDealerships.length) {
            this.carDealerships.splice(index, 1);
        }
    }

    displayDealerships() {
        let dealershipString = 'List of Dealerships:\n';
        for (let i = 0; i < this.carDealerships.length; i++) {
            dealershipString += i + ') ' + this.carDealerships[i].name + '\n';
        }
        alert(dealershipString);
    }
}

let menu = new Menu();
menu.start();
