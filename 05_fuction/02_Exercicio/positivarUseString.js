function positivarUseString(valor) {

    if (valor < 0) {
        let r = valor.toString();
        r = "-" + valor;
        console.log(r.replace(/-/g, ""));

    } else {
        console.log(valor);
    }


}
