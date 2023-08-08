import React from 'react';
import Header from '../page_design/header';

export default function ventas() {
  return (
    <div>
      <Header />
      <h1>Ventas</h1>
      <div>
        <h1>Formulario Básico (falta ponerle maquillaje :c)</h1>
        <form>
          <div>
            <label>Productos:</label>
            <select>
              <option value="">Selecciona un producto</option>
            </select>
          </div>
          <div>
            <label>Venta Rápida:</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Descuento:</label>
            <input type="number" />
          </div>
          <button type="submit">Generar Venta</button>
        </form>
      </div>
    </div>
  );
}