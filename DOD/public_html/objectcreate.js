//////////////////////////
///Object creation
/////////////////////////
function store(manager, customer, product) {
    this.manager = manager;
    this.customer = customer;

    this.product = new Array();
    for (var i = 0; i < product.length; i++) {
        this.product[i] = product[i];
    }

    this.size = i;

    this.addProduct = function(stock) {
        this.product[this.size++] = stock;
    };

    this.showProduct = function() {
        var list = this.manager + " " + this.customer + " ";
        for (var i = 0; i < this.size; i++) {
            list += this.product[i] + " ";
        }
        console.log(list);
    };
}

function HEB(manager, customer,product)
{
    this.manager = manager;
    store.call(this,"HEB",customer,product);

        ////method
    this.load = function(){
        console.log("HEB YEAH!!!!!!!!!!!!!!!!!!");
    }
}
//////////////////////NASTY PATH/////////////////////
function Nastystore(manager, customer, product) {
    //this.manager = sutstomet;
    this.customer = customer;

    //this.size = i;

    this.addProduct = function(stock) {
    //    this.product[this.size++] = stock;
    };

    this.showProduct = function() {
        var list = this.manager + " " + this.customer + " ";
        for (var i = 0; i < this.size; i++) {
            list += this.product[i] + " ";
        }
        console.log(list);
    };
}

function NastyHEB(manager, customer,product)
{
    this.manager = manager;
    store.call("","HEB",customer,product);

        ////method
    this.load = function(){
        console.log(" NASATY HEB YEAH!!!!!!!!!!!!!!!!!!");
    }
}


window.onload = function() {
    //instaniation/////////////////////////////
    var walmart = new store("Tim","May",["corn", "soda"]);  

    walmart.addProduct("meat");
    walmart.showProduct();

    var heb = new HEB("TIM", "LILY", ["cupCakes"])
    console.log(heb.load);
    heb.addProduct("soda");
    heb.showProduct();

    //////////////////////////NASTY PATH////////////////////////////////////
    var Nastywalmart = new Nastystore("Tim","May",["corn", "soda"]);

    Nastywalmart.addProduct("meat");
    Nastywalmart.showProduct();

    var Nastyheb = new NastyHEB("TIM", "LILY", ["cupCakes"])
    console.log(Nastyheb.load);
    Nastyheb.addProduct("soda");
    Nastyheb.showProduct();

    var fun = function_name;
    fun(1,"sdf",2);
}

function function_name() {
    if (arguments.length == 0) {
        console.log("NOTHING!");
    }

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    };
}