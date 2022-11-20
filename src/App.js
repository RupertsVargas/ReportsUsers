import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeaderTable} from './js/htmlOfJs.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {dataParam} from "./js/FormUsers";
import { SelectPicker } from 'rsuite';
import {DataReportGlobal} from "./js/reportGlobal";
// import 
import {urlCookie} from "./js/UrlAlot";

let userSize = 10;
export var whoIs = {};
var dataUsersGlobal = [];
const urlFetch = urlCookie+"AdminMain/index";


const CustomLoader = () => (
  <div className="loadContainer" >
    <FontAwesomeIcon icon={faSpinner} spin className='iconCustom' />
    <div>C a r g a n d o . . .</div>
  </div>
);



function personalityFetchMsg(obj={}){
  console.log(obj);
  let idSubjet = "idTheme";
  let idBar = "idLoad2"
  let idMsg = "idMsg";
  ReactDOM.render(
   
    <span className="colorRedError">{obj.title}</span>
    , document.getElementById(idSubjet));

  // document.getElementById(idSubjet).innerHTML = `<span class="colorRedError">${obj.title}</span>`;
  let container = (
  <div className='containerErrorDisplay colorRedError'>
    <FontAwesomeIcon className="iconError" icon={faTriangleExclamation}/> 
    <div>{obj.msg}</div>
  </div>
  ) ;
  ReactDOM.render(
   
    container
    , document.getElementById(idMsg));
  // document.getElementById(idMsg).innerHTML = 
 
  document.getElementById(idBar).classList.add("classProgressBarInnerError");

}


let dataUsersArray = [];


const paginacionOpciones={
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

function  SetDataTableFirst(dataObj={}) {

  return dataObj;
  console.log(dataObj);
}
const dataSelectPicker = ['Reporte Detalle', 'Reporte Global'].map(
  item => ({ label: item, value: item })
);
console.log(dataSelectPicker);
// var dataSelectPicker = 
class FormAllUsers extends Component {

  state={
    busqueda: '',
    campeones: [],
    columnas:[],
    subColumns :[],
    // another : tablaCampeones,
  }

  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      busqueda: '',
      campeones: [],
      columnas:[],
      searchForAnother: "",
      subColumns :[],
      propiedad : {},
      searchBlur:false,
      view: "Reporte Detalle",
      dataApi: {},
      // this.state.container.load
      container:{
        load:true
      },
    };
  }

  // constructor(){
    // super();
   
  // };
  
  forceUpdateHandler(){
    this.forceUpdate();
  };


  onChangeSearch = e=>{ 
    let e2 = document.getElementById("idSearchTable").value;
    let value_ = e2;
    console.warn(value_);
    this.state.container.load = true;
    // this.state.searchBlur = true;
    // await this.setState({busqueda: e.target.value});
    // this.setState({busqueda: e.target.value});
    
    this.state.container.load = false;
    // console.error("DESPUES");
    this.filtrarElementos(value_);
    
    
    // http://localhost:3000/
  }

  // onChange = async e=>{
    onChange = e=>{
    e.persist();
    if (e.key !== 'Enter') {
      return false;
      // console.log('do validate');
    }
    let value_ = e.target.value;
    console.warn(value_);
    this.state.container.load = true;
    // this.state.searchBlur = true;
    // await this.setState({busqueda: e.target.value});
    // this.setState({busqueda: e.target.value});
    
    this.state.container.load = false;
    // console.error("DESPUES");
    this.filtrarElementos(value_);
    
    
    // http://localhost:3000/
  }


  // asignarColumnasTest =  (data__)=>{

  //   const  columnas = [
  //     { 
  //       // count : 0,
  //       // table: true,
  //       selector: 'id',
  //       sortable: true,
  //       name: "año",
  //       myRowStyle: {
  //         backgroundColor: 'green',
  //         color : 'white',
  //       //  ...
  //         },
  //       // cell: (value) => ( 


  //       // )
  //     },
  //     {
  //       selector: 'id2',
  //       sortable: true,
  //       name: "añ2",
  //       myRowStyle: {
  //         backgroundColor: 'green',
  //         color : 'white',
  //       //  ...
  //         },
  //       // cell: (value) => ( 


  //       // )
  //     },
      
      
          
    
  //   ];
  //   // console.log(columnas);
  //   this.setState({columnas: columnas,campeones:data__});
  //   // return false;
  // }

  asignarColumnas =  (data__)=>{

    const  columnas = [
      // {
      //   selector: 'id',
      //   sortable: true,
      //   name: "año",
      // }
      // ,
      { 
        // count : 0,
        // table: true,
        // selector: 'id',
        // sortable: true,
        // name: "año",
        myRowStyle: {
          backgroundColor: 'green',
          color : 'white',
        //  ...
          },
        cell: (value) => ( 
          // console.log(value.info),
          // {console.log(value)}
          
          HeaderTable(value)
          // console.log(document.getElementsByClassName("byUserAnotherChild"))
          // iv.innerHTML = "<div><button id='b1'>Nuevo Botón</button></div>"
          // BodyTable(value)
          
          // <MiComponente></MiComponente>
          // MiComponente()
          

        )
      },
          
    
    ];
    // console.log(columnas);
    this.setState({columnas: columnas,campeones:data__});
    // return false;
  }


  filtrarElementos=(varBusqueda)=>{
    // console.log(this.state.busqueda);
    // console.log("FILTRANDO");
    this.state.busqueda = varBusqueda;
    let stateHere = (varBusqueda).toLowerCase();
    // this.state.busqueda 
    var search=dataUsersArray.filter(item=>{

      // console.log(item);
      let exist_ = item.date;
      
      // console.log(item.campeon.toLowerCase());
      if(
      item.info.email.toString().includes(stateHere) ||
      item.info.fullName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(stateHere) ||
      // item.campeon.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
      item.info.fullName.toLowerCase().includes(stateHere)
      ){
        return item;
      }

      return "";
    });

    this.state.searchForAnother = varBusqueda;
    this.setState({campeones: search});
  }

  onChangeView = (value) =>{
    // if(value==="Reporte Detalle"){
      this.state.container.load = false;
      this.setState({view: value});
    // }
  //  value
    // console.log(value);
  }


    componentDidUpdate(prevProps, prevState) {
              // setLoadInputs(true);


              // prevProps
              // console.warn("RENDER: " + this.state.container.load);
              // console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState);
              console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
              // prevProps.test.load = false;
              this.state.container.load = true;
              prevProps.setTest({load:false});

              console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
              console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevState);
              console.log("SIU ASDASD");
              console.log(this.props.propiedad.count);
              console.log(prevProps.propiedad.count);

              
              if (this.props.propiedad.count !== prevProps.propiedad.count) {
                // boolChangesd = true;
                console.warn("FETCH");
                // createLoad();
                // this.state.container.load = true;
                let test = null;
                test = fetch(urlFetch , {
                  method: 'POST',
                  // mode: 'cors',
                  // body: JSON.stringify({ 'parametro': 23 }),
                  body:dataParam,
  
                })
                
                  .then((response) => response.json() )
                  .then((json) => {
                    dataUsersGlobal = json;
                    console.log(dataUsersGlobal);
                    if(dataUsersGlobal.error){
                      return false;
                    }
                    
                  dataUsersArray = [];
                  dataUsersArray = dataUsersGlobal.data;
                  // console.log(tablaCampeones);
              
                  let convert = [];
                  Object.entries(dataUsersArray).forEach(([key, value]) => {
                    convert.push(value);
          
                  });
              
                  dataUsersArray = convert;
                  // console.log(dataUsersArray);
          
                  whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
                  this.state.container.load = false;
                  this.asignarColumnas(dataUsersArray);

          
          
                    // return json;
                    return false;
          
          
                  }).catch(error => {
                  
                    let objReturn = {
                      title:"E r r o r",
                      error:true,
                      msg : error.message,
                
                    }
                    personalityFetchMsg(objReturn);
                    // return  objReturn;
                  } 
                  );
              // hideLoad();  
              // alert();
              }else{
                // console.log("EL OTRO");
                // if(this.state.searchBlur){
                // this.setState({});  
                // }
                // this.setState({});
              }
              // createLoad();
              
              // console.info("ter");
      return false;
              // this.props.id !== prevProps.id
              console.log(this.props.id);
              console.log(prevProps.id);
              // return false;
              

                return false;
        
        //         const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
        // fetchPromise.then(response => {
        //   console.log(response);
        // });
                // return false;
   
    }
  
    // componentWillUnmount() {
    //   console.log('Se desmonta el componente...')
    // }
    componentDidMount(){
      console.log("SIU");

      let test = null;
      test = fetch(urlFetch , {
        method: 'POST',
        // mode: 'cors',
        // body: JSON.stringify({ 'parametro': 23 }),
        body:dataParam,
        
      })
      
        .then((response) => response.json() )
        .then((json) => {
          dataUsersGlobal = json;
          console.log(dataUsersGlobal);
          if(dataUsersGlobal.error){
            return false;
          }

        dataUsersArray = dataUsersGlobal.data;
        // console.log(tablaCampeones);
    
        let convert = [];
        Object.entries(dataUsersArray).forEach(([key, value]) => {
          convert.push(value);

        });
    
        dataUsersArray = convert;
        console.log(dataUsersArray);

        whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
        this.state.container.load = false;
        this.asignarColumnas(dataUsersArray);
        
        // this.setState({campeones: dataUsersArray}); 
        // setLoadInputs(false);
        


          return json;


        }).catch(error => {
        
          let objReturn = {
            title:"E r r o r",
            error:true,
            msg : error.message,
      
          }
          personalityFetchMsg(objReturn);
          return  objReturn;
        } 
        );
      

        return false;
  
  }
  
  

  render(){

  const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
            backgroundColor: "#00000000",
            borderBottomWidth:"0px"
        },
      }
  };

  SetDataTableFirst(this.state.columnas);
  var whoDataTableIs = "";
  // if(this.state.view===""){}
  

  // if(this.state.view==="Reporte Global") {
  //   // this.asignarColumnasTest(dataUsersArray);
  //   // .rdt_TableHead{
  //     // display: none !important;
  //   // }
  //   document.getElementsByTagName(".rdt_TableHead").style.display = "";
  //   // document.getElementsByClassName("rdt_TableHead").style = 
  // }else{
  //   document.getElementsByTagName(".rdt_TableHead").style.display = "none";
  // }
  whoDataTableIs = this.state.view==="Reporte Detalle" ?  
  (<DataTable   
    className="dataTable01_"
    noHeader={true}
                            columns={this.state.columnas}
                            data={this.state.campeones}
                            // title="Campeones UCL 2000-2019"
                            // progressPending={pending}
                            pagination
                            paginationPerPage = {5}
                            paginationRowsPerPageOptions={[5,10, 25, 50]}
                            paginationComponentOptions={paginacionOpciones}
                            fixedHeader
                            // backGroundColor = {"black"}
                            customStyles={customStyles}
                            // noHeader={true}
                            // fixedHeaderScrollHeight="600px"
                            noDataComponent={<span>No se encontró ningún elemento</span>}
                            rowStyleField={"myRowStyle"}
                            progressPending={this.state.container.load}
                            // value={test}
                            // onChange={(e)=>setTest(e.target.value)} 
                            // console.log(setTest({load:false}));
                            // progressPending={true}

                            progressComponent={<CustomLoader />}
                            // progressPending={<div id="idBar" className="classProgressBar">
                            // <div id="idLoad2"></div>
                          // </div>}
                            // progressComponent={<CustomLoader />}
                            // noHeader={true}
          /> ) :     
         < DataReportGlobal data={dataUsersGlobal} search={this.state.searchForAnother}/>;

  return (
    
    // {this.}
  
    // {console.log("")}
    <div className="table-responsive">
    <br></br>  
    <div className='contentFiltersAboutTable'>
      <SelectPicker cleanable={false}  
      data={dataSelectPicker}
      defaultValue={dataSelectPicker[0].label}
        // defaultValue={value}
        onChange={this.onChangeView}
        searchable={false} style={{ width: 224 }} /> 
      <div className="barraBusqueda">
        <button onClick={this.onChangeSearch} type="button" className="btnBuscar" /*onClick={onClear}*/>
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                placeholder=""
                className="customeTextFieldSearch"
                name="busqueda"
                id="idSearchTable"
                onKeyDown={this.onChange}
                // value={this.state.busqueda}
                // value={""}
                // onChange={this.onChange}
              />
              <span className='spanTextFieldSearch'>Buscar</span>

            
            </div>
          </div>
          
         
        <div>
          {whoDataTableIs}
        </div>
    </div>
  );
}
}

export default FormAllUsers;
FormAllUsers.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}



