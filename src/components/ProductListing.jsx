import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react"; // 🔹 Import cart icon

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const mappedData = data.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          price: Math.round(item.price),
          image: item.image,
        }));
        setProducts(mappedData);
        setFilteredProducts(mappedData);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((product) => {
        if (max) return product.price >= min && product.price <= max;
        return product.price >= min;
      });
    }

    setFilteredProducts(filtered);
  }, [searchTerm, priceRange, products]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 gradient-text">Our Products</h2>
          <p className="text-lg text-gray-300">Explore our latest collection</p>
        </div>

        {/* Search + Filter */}
        <div className="glass-effect rounded-lg p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded-md glass-effect border border-white/20 text-white placeholder-gray-400"
          />

          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 rounded-md glass-effect border border-white/20 text-white bg-transparent"
          >
            <option value="all" className="bg-gray-800">All Prices</option>
            <option value="0-50" className="bg-gray-800">0 - 50</option>
            <option value="50-100" className="bg-gray-800">50 - 100</option>
            <option value="100-500" className="bg-gray-800">100 - 500</option>
            <option value="500-1000" className="bg-gray-800">500+</option>
          </select>
        </div>

        {/* Loading spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-effect p-5 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-white mb-2 line-clamp-1">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Price + Cart Button */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">
                    {product.price}₹
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
