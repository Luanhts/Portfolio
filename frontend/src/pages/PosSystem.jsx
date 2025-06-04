import React, { useState, useEffect } from "react";
import { Home, LayoutGrid, PieChart, Bookmark, ShoppingBag, Settings, LogOut, Search, Filter, ShoppingCart, Plus, Minus, Settings2, Coffee, IceCream, Cake, Croissant as CroissantIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const initialProducts = [
  { id: 1, name: "Almond Brown Sugar Croissant", description: "Sweet croissant with topping almonds and brown sugar", price: 12.98, quantitySuffix: "/ 3 pcs", category: "Croissant", image: "almond-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 2, name: "Smoke Tenderloin Slice Croissant", description: "Plain croissant with smoke tenderloin beef sliced and vegetable", price: 10.01, quantitySuffix: "/ 2 pcs", category: "Croissant", image: "smoke-tenderloin-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 3, name: "Berry Whipped Cream Croissant", description: "Sweet croissant with blueberries and strawberries inside", price: 8.92, quantitySuffix: "/ 3 pcs", category: "Croissant", image: "berry-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 4, name: "Sweet Granulated Sugar Croissant", description: "Classic sweet croissant with granulated sugar topping", price: 5.58, quantitySuffix: "/ 1 pc", category: "Croissant", image: "sugar-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 5, name: "Sweet Chocolate Chocochips Croissant", description: "Delicious croissant with chocolate chips", price: 11.01, quantitySuffix: "/ 1 pc", category: "Croissant", image: "chocolate-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 6, name: "Basic Croissant La Ta Dhore", description: "A simple, classic plain croissant", price: 4.50, quantitySuffix: "/ 1 pc", category: "Croissant", image: "basic-croissant.jpg", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { id: 7, name: "Espresso", description: "Strong black coffee", price: 5.00, quantitySuffix: "", category: "Coffee", image: "espresso.jpg", icon: <Coffee className="h-5 w-5 mr-2" /> },
  { id: 8, name: "Cappuccino", description: "Espresso with steamed milk foam", price: 7.50, quantitySuffix: "", category: "Coffee", image: "cappuccino.jpg", icon: <Coffee className="h-5 w-5 mr-2" /> },
  { id: 9, name: "Vanilla Ice Cream", description: "Classic vanilla ice cream", price: 6.00, quantitySuffix: "/ scoop", category: "Ice Cream", image: "vanilla-ice-cream.jpg", icon: <IceCream className="h-5 w-5 mr-2" /> },
  { id: 10, name: "Chocolate Waffle", description: "Waffle with chocolate sauce", price: 9.00, quantitySuffix: "", category: "Waffle", image: "chocolate-waffle.jpg", icon: <Cake className="h-5 w-5 mr-2" /> },
];

const categories = [
  { name: "Signature", icon: <Settings2 className="h-5 w-5 mr-2" /> },
  { name: "Croissant", icon: <CroissantIcon className="h-5 w-5 mr-2" /> },
  { name: "Waffle", icon: <Cake className="h-5 w-5 mr-2" /> },
  { name: "Coffee", icon: <Coffee className="h-5 w-5 mr-2" /> },
  { name: "Ice Cream", icon: <IceCream className="h-5 w-5 mr-2" /> },
];

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navItems = [
    { name: "Home", icon: Home },
    { name: "Products", icon: LayoutGrid },
    { name: "Analytics", icon: PieChart },
    { name: "Bookmarks", icon: Bookmark },
    { name: "Cart", icon: ShoppingBag },
  ];

  const bottomNavItems = [
    { name: "Settings", icon: Settings },
    { name: "Logout", icon: LogOut },
  ];

  return (
    <aside className="w-20 bg-card h-screen flex flex-col items-center py-6 shadow-lg fixed left-0 top-0">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-primary rounded-lg flex items-center justify-center mb-10">
        <span className="font-bold text-2xl text-white">M</span>
      </div>
      <nav className="flex-grow flex flex-col items-center space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            size="icon"
            className={`w-12 h-12 rounded-lg transition-all duration-200 ${activeItem === item.name ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}
            onClick={() => setActiveItem(item.name)}
            title={item.name}
          >
            <item.icon className="h-6 w-6" />
          </Button>
        ))}
      </nav>
      <div className="flex flex-col items-center space-y-2">
        {bottomNavItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200"
            title={item.name}
          >
            <item.icon className="h-6 w-6" />
          </Button>
        ))}
      </div>
    </aside>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-48">
        <img  alt={product.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" />
        <Button 
          size="icon" 
          className="absolute top-3 right-3 bg-white text-primary hover:bg-primary hover:text-white shadow-md w-10 h-10"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-2 h-10 overflow-hidden">{product.description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
            <span className="text-xs text-muted-foreground ml-1">{product.quantitySuffix}</span>
          </p>
        </div>
      </CardContent>
    </motion.div>
  );
};

const CurrentOrder = ({ cart, updateQuantity, removeFromCart, clearCart }) => {
  const { toast } = useToast();
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 5.00; 
  const taxRate = 0.06; 
  const salesTax = subtotal * taxRate;
  const total = subtotal - discount + salesTax;

  const handlePayment = () => {
    if (cart.length === 0) {
      toast({
        title: "Carrinho Vazio",
        description: "Adicione itens ao carrinho antes de prosseguir.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Pagamento Iniciado!",
      description: `Total a pagar: $${total.toFixed(2)}. Obrigado!`,
    });
    clearCart();
  };

  return (
    <aside className="w-96 bg-card h-screen flex flex-col p-6 shadow-lg fixed right-0 top-0 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Pedido Atual</h2>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>

      <div className="flex-grow space-y-4 mb-6 pr-2 overflow-y-auto" style={{maxHeight: 'calc(100vh - 300px)'}}>
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-3 p-3 bg-background rounded-lg"
            >
              <div className="w-16 h-16 rounded-md overflow-hidden">
                 <img  alt={item.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1632813405318-1a453ecac8bf" />
              </div>
              <div className="flex-grow">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-primary font-semibold text-xs">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {cart.length === 0 && <p className="text-muted-foreground text-center py-4">Seu carrinho está vazio.</p>}
      </div>

      <div className="border-t pt-6">
        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Desconto</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Taxa de venda</span>
            <span>${salesTax.toFixed(2)}</span>
          </div>
        </div>
        <div className="border-t border-dashed my-3"></div>
        <div className="flex justify-between items-center font-bold text-lg mb-6">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg" onClick={handlePayment}>
          Continuar para Pagamento
        </Button>
      </div>
    </aside>
  );
};

const PosSystem = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("Products");
  const [activeCategory, setActiveCategory] = useState("Croissant");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const storedCart = localStorage.getItem("posCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posCart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    toast({
      title: `${product.name} adicionado!`,
      description: "O item foi adicionado ao seu pedido.",
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
    }
  };
  
  const removeFromCart = (productId) => {
    const productToRemove = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
     if (productToRemove) {
      toast({
        title: `${productToRemove.name} removido!`,
        description: "O item foi removido do seu pedido.",
        variant: "destructive"
      });
    }
  };

  const clearCart = () => {
    setCart([]);
     toast({
      title: "Carrinho Limpo!",
      description: "Todos os itens foram removidos do seu pedido.",
    });
  }

  const filteredProducts = initialProducts
    .filter(product => product.category === activeCategory || activeCategory === "Signature")
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeItem={activeSidebarItem} setActiveItem={setActiveSidebarItem} />
      <main className="flex-1 p-8 pl-28 pr-[424px] overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Bem-vindo, Gorry</h1>
          <p className="text-muted-foreground">Descubra o que você precisa facilmente</p>
        </header>

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Pesquisar produto..." 
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex space-x-3 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200 ${activeCategory === category.name ? 'active-category-button' : 'hover:bg-primary/5'}`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProducts.length === 0 && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8 text-lg"
          >
            Nenhum produto encontrado para "{activeCategory}" {searchTerm && `com o termo "${searchTerm}"`}.
          </motion.p>
        )}
      </main>
      <CurrentOrder cart={cart} updateQuantity={updateCartQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />
    </div>
  );
};

export default PosSystem;