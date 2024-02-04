import React from 'react';

function OffcanvasTrigger() {
  const toggleOffcanvas = () => {
    const offcanvas = document.getElementById('cartOffcanvas');
    offcanvas.classList.toggle('show');
  };

  return (
    <button className="btn btn-outline-danger" style={{color:"white",borderColor:'white',letterSpacing:1}} data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas" aria-label="Toggle cart" onClick={toggleOffcanvas}>
      <i className="bi bi-cart4"></i> CART
    </button>
  );
}

export default OffcanvasTrigger;