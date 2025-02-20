import React from 'react';

export default function Alert({ alert }) {
  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        {alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}
