const notebook = {
    Processador: "i7",
    Memória: "16GB",
    Preço: 5000,
    HD: "1TB",
    SSD: "256GB"
};

for (const atributo in notebook) {
    console.log(atributo + ": " + notebook[atributo]);
}        