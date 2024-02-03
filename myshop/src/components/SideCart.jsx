import React, { useState } from 'react';

function SideCart() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
      console.log("called cart")
    setShowCart(!showCart); // Use state to control visibility
  };

  return (
    <div>
      <div className="offcanvas offcanvas-end" id="demo">
  <div className="offcanvas-header">
    <h1 className="offcanvas-title">Cart</h1>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <button className="btn btn-secondary" type="button">A Button</button>
  </div>
</div>

<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
   Sidebar
</button>
    </div>
  );
}


export default SideCart;