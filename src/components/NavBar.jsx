const NavBar = () => {
    return (
      <nav style={{ backgroundColor: '#f8b400' }} className="text-white p-4 shadow-lg">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center w-1/3">
            <a href="/" className="ml-6 rounded p-1 hover:text-white"
  style={{ backgroundColor: '#ffe797', color: '#000000ff' }}>
                Home
              </a>
              <a href="/cart" className="ml-6 rounded p-1 hover:text-white"
  style={{ backgroundColor: '#ffe797', color: '#000000ff' }}>
                Cart
              </a>
              <a href="/inventory" className="ml-6 rounded p-1 hover:text-white"
  style={{ backgroundColor: '#ffe797', color: '#000000ff' }}>
                Inventory
              </a>
              <a href="/sales" className="ml-6 rounded p-1 hover:text-white"
  style={{ backgroundColor: '#ffe797', color: '#000000ff' }}>
                Sales
              </a>
              <a href="/add-product" className="ml-6 rounded p-1 hover:text-white"
  style={{ backgroundColor: '#ffe797', color: '#000000ff' }}>
                Add Product
              </a>
            </div>
            <div className="flex items-center w-1/3 justify-center">
              <h2 className="text-white text-lg font-bold">Inventory Management</h2>
              <img className="w-[30px] h-[30px] mx-2" src="/inventoryLogo.png" alt="LOGO" />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;
  