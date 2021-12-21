
class Producto {
    _nombre = "";
    _precio = 0;
    /**
     * @description 
     * @param {string} n - Nombre del producto
     * @param {number} p - Precio del producto en euros, se admiten decimales
     */
    constructor(n = "Desconocido", p = "Desconocido") {
        this._nombre = n;
        this._precio = p;
    }

    /**
     * 
     * @returns {string} Retorna los campos/propiedades de la clase
     */
    toString() {
        return `
        <div class="to-string">
            <div class="campo">Nombre: ${this._nombre}</div>
            <div class="campo">Precio: ${this._precio}€</div>
        </div>
        `;
    }

    /**
     * 
     * @returns {number} El precio del producto
     */
    calcularPrecio() {
        return this._precio;
    }

}

class Perecedero extends Producto {
    // constructor(f) {
    //     this._fechaCaducidad = f;
    // }

    diasACaducar = 0;

    // setter
    /**
     * 
     * @param {number} dias - Fecha de caducidad del producto
     */
    meterDias(dias) {
        this.diasACaducar = dias;
    }

    /**
         * 
         * @returns {string} Retorna los campos/propiedades de la clase
         */
    toString() {
        return `
    <div class="to-string">
        <div class="campo">Nombre: ${this._nombre}</div>
        <div class="campo">Precio: ${this._precio}€</div>
        <div class="campo">Precio descuento: ${this.calcularPrecio()}€</div>
        <div class="campo">Días a caducar: ${this.diasACaducar}</div>
    </div>
    `;
    }
    /**
     * 
     * @returns {number} El precio del producto
     */
     calcularPrecio() {
        // return this._precio;
        if(this.diasACaducar == 1) {// falta un día para caducar
            return this._precio / 4;
        } else if (this.diasACaducar == 2) {
            return this._precio / 3;
        } else if (this.diasACaducar == 3) {
            return this._precio / 2;
        }
            
        return this._precio;
        
    }
}

class NoPerecedero extends Producto {
    // constructor(t) {
    //     this._tipo = t;
    // }
    tipo = "Sin tipo";

    // Setter
    /**
     * 
     * @param {string} t - Meter el tipo de producto no perecedero
     */
    meterTipo(t) {
        this.tipo = t;
    }

    /**
         * 
         * @returns {string} Retorna los campos/propiedades de la clase
         */
    toString() {
        return `
    <div class="to-string">
        <div class="campo">Nombre: ${this._nombre}</div>
        <div class="campo">Precio: ${this._precio}€</div>
        <div class="campo">Tipo: ${this.tipo}</div>
    </div>
    `;
    }


}

export { Producto, Perecedero, NoPerecedero }