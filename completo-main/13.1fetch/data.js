class DataApi {
    // atributos, metodos -> constructores
    //Metodo constructor
    constructor() {
        this.infoCompleta = [];
        this.url = "https://jsonplaceholder.typicode.com/todos";
        this.data = [];
        this.getApi();
    }
    getInfocompleta() {
        return this.infoCompleta;
    }
    getData(){
        return this.data;
    }
    async getApi() {
        this.data = await fetch(this.url)
            .then((response) => response.json())
            .then((info)/*informacion a imprimir*/=>{
                for(let i of info){
                    this.data.push(i.title);
                    //console.log(data);
                    let cad = `ID: ${i.userid} titulo: ${i.title} completado: ${i.completed}`;
                    this.infoCompleta.push(cad);
                }
                //console.log(this.data);
                return this.data;
            }) 
            .catch((error) => console.error(error))
            .finally(console.info("Ha finalizado la peticion"));
         };
    }
    export {DataApi};
    