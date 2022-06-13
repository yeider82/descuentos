console.log("yeider todo OK")

function calcular_descuento(precio_original,descuento_aplicar){
    const valor_descuento=(descuento_aplicar/100)*precio_original;
    const valor_final=(precio_original - valor_descuento);
    return valor_final;
    
};

function informacionfinal(){
    const valu1 = document.getElementById("precio");
    const precio = parseInt(valu1.value);
    const valu2 = document.getElementById("descuento");
    const descuento = parseInt(valu2.value);

    const calculo=calcular_descuento(precio, descuento);
    const texto_calculo = document.getElementById("resultado_price");
    
    texto_calculo.innerText = `el precio final con descunto son $: ${calculo}`;

};

