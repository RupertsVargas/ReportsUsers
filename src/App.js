import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeaderTable} from './js/htmlOfJs.js';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faSpinner,faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {dataParam} from "./js/FormUsers";
import { SelectPicker } from 'rsuite';
import {DataReportGlobal,FunctionConvertDateInitToFinal} from "./js/reportGlobal";
// import 
import {urlCookie} from "./js/UrlAlot";
import {LoadD,NoOneD,ErrorD} from "./js/noticeDesign";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

let userSize = 10;
export var whoIs = {};
var dataUsersGlobal = [];
const urlFetch = urlCookie+"AdminMain/index";



let x = document.cookie;
console.log(x);
const typeOfReport = ['Reporte Detalle','Reporte Consolidado'].map(
  (item,index) => ({ label: item, value: index })
);
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
// console.log(dataSelectPicker);
// var dataSelectPicker = 


export const FormAllUsers2 = (props)=> {
  // alert();
  let json = props.json;
  let dataArray = [];    
  let convert = [];
  Object.entries(json.data).forEach(([key, value]) => {
    convert.push(value);

  });
  dataArray = convert;

  const asignarColumnas =  (data__)=>{
    let arraySet = [];
    // for (let i = 0; i < data__.length; i++) {
      // const element = data__[i];
      const  columnas = [
        { 
          myRowStyle: {
          backgroundColor: 'green',
          color : 'white',
          },
          cell: (value) => (
            // console.log(value),
            HeaderTable(value)
          )
        },
      ];

      // arraySet.push(columnas);

  // }
    // console.log(columnas);
    console.log(columnas);
    return columnas;
    // this.setState({columnas: columnas,campeones:data__});
    // return false;
  }
  let columns_ = asignarColumnas(dataArray);
  // console.log(asignarColumnas(dataArray));
  // return "HOLA";
  console.log(props);
          return            <DataTable   
                            className="dataTable01_"
                            noHeader={true}
                            // columns={this.state.columnas}
                            // data={this.state.campeones}
                            columns={columns_}
                            data={dataArray}
                            // title="Campeones UCL 2000-2019"
                            // progressPending={pending}
                            pagination
                            paginationPerPage = {5}
                            paginationRowsPerPageOptions={[5,10, 25, 50]}
                            paginationComponentOptions={paginacionOpciones}
                            fixedHeader
                            // backGroundColor = {"black"}
                            // customStyles={customStyles}
                            // noHeader={true}
                            // fixedHeaderScrollHeight="600px"
                            noDataComponent={<span>No se encontró ningún elemento</span>}
                            rowStyleField={"myRowStyle"}
                            // progressPending={this.state.container.load}
                            progressComponent={<LoadD />}
                        
          /> ;

}


// class FormAllUsers extends Component {

//   state={
//     busqueda: '',
//     campeones: [],
//     columnas:[],
//     subColumns :[],
//     // another : tablaCampeones,
//   }

//   constructor(props) {
//     super(props);
//     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
//     this.state = {
//       busqueda: '',
//       campeones: [],
//       columnas:[],
//       searchForAnother: "",
//       subColumns :[],
//       propiedad : {},
//       searchBlur:false,
//       view: "Reporte Detalle",
//       dataApi: {},
//       // this.state.container.load
//       container:{
//         load:true
//       },
//     };
//   }

//   forceUpdateHandler(){
//     this.forceUpdate();
//   };


//   onChangeSearch = e=>{ 
//     let e2 = document.getElementById("idSearchTable").value;
//     let value_ = e2;
//     console.warn(value_);
//     this.state.container.load = true;
//     this.state.container.load = false;
//     // console.error("DESPUES");
//     this.filtrarElementos(value_);
    
    
//     // http://localhost:3000/
//   }

//   // onChange = async e=>{
//     onChange = e=>{
//     e.persist();
//     if (e.key !== 'Enter') {
//       return false;
//       // console.log('do validate');
//     }
//     let value_ = e.target.value;
//     console.warn(value_);
//     this.state.container.load = true;
//     // this.state.searchBlur = true;
//     // await this.setState({busqueda: e.target.value});
//     // this.setState({busqueda: e.target.value});
    
//     this.state.container.load = false;
//     // console.error("DESPUES");
//     this.filtrarElementos(value_);
    
    
//     // http://localhost:3000/
//   }

//   asignarColumnas =  (data__)=>{

//     const  columnas = [
//       { 
//         // count : 0,
//         // table: true,
//         // selector: 'id',
//         // sortable: true,
//         // name: "año",
//         myRowStyle: {
//           backgroundColor: 'green',
//           color : 'white',
//         //  ...
//           },
//         cell: (value) => ( 
//           // console.log(value.info),
//           // {console.log(value)}
          
//           HeaderTable(value)
//           // console.log(document.getElementsByClassName("byUserAnotherChild"))
//           // iv.innerHTML = "<div><button id='b1'>Nuevo Botón</button></div>"
//           // BodyTable(value)
          
//           // <MiComponente></MiComponente>
//           // MiComponente()
          

//         )
//       },
          
    
//     ];
//     // console.log(columnas);
//     this.setState({columnas: columnas,campeones:data__});
//     // return false;
//   }


//   filtrarElementos=(varBusqueda)=>{
//     // console.log(this.state.busqueda);
//     // console.log("FILTRANDO");
//     this.state.busqueda = varBusqueda;
//     let stateHere = (varBusqueda).toLowerCase();
//     // this.state.busqueda 
//     var search=dataUsersArray.filter(item=>{

//       // console.log(item);
//       let exist_ = item.date;
      
//       // console.log(item.campeon.toLowerCase());
//       if(
//       item.info.email.toString().includes(stateHere) ||
//       item.info.fullName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(stateHere) ||
//       // item.campeon.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
//       item.info.fullName.toLowerCase().includes(stateHere)
//       ){
//         return item;
//       }

//       return "";
//     });

//     this.state.searchForAnother = varBusqueda;
//     this.setState({campeones: search});
//   }

//   onChangeView = (value) =>{
//     // if(value==="Reporte Detalle"){
//       this.state.container.load = false;
//       this.setState({view: value});
//     // }
//   //  value
//     // console.log(value);
//   }


//     componentDidUpdate(prevProps, prevState) {

//               console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
//               // prevProps.test.load = false;
//               this.state.container.load = true;
//               // prevProps.setTest({load:false});

//               console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
//               console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevState);
//               console.log("SIU ASDASD");
//               console.log(this.props.propiedad.count);
//               console.log(prevProps.propiedad.count);

              
//               if (this.props.propiedad.count !== prevProps.propiedad.count) {
//                 // boolChangesd = true;
//                 console.warn("FETCH");
//                 // createLoad();
//                 // this.state.container.load = true;
//                 let test = null;
//                 test = fetch(urlFetch , {
//                   method: 'POST',
//                   // mode: 'cors',
//                   // body: JSON.stringify({ 'parametro': 23 }),
//                   body:dataParam,
  
//                 })
                
//                   .then((response) => response.json() )
//                   .then((json) => {
//                     dataUsersGlobal = json;
//                     console.log(dataUsersGlobal);
//                     if(dataUsersGlobal.error){
//                       return false;
//                     }
                    
//                   dataUsersArray = [];
//                   dataUsersArray = dataUsersGlobal.data;
//                   // console.log(tablaCampeones);
              
//                   let convert = [];
//                   Object.entries(dataUsersArray).forEach(([key, value]) => {
//                     convert.push(value);
          
//                   });
              
//                   dataUsersArray = convert;
//                   // console.log(dataUsersArray);
          
//                   whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
//                   this.state.container.load = false;
//                   this.asignarColumnas(dataUsersArray);

          
          
//                     // return json;
//                     return false;
          
          
//                   }).catch(error => {
                  
//                     let objReturn = {
//                       title:"E r r o r",
//                       error:true,
//                       msg : error.message,
                
//                     }
//                     personalityFetchMsg(objReturn);
//                     // return  objReturn;
//                   } 
//                   );
//               // hideLoad();  
//               // alert();
//               }else{
//                 // console.log("EL OTRO");
//                 // if(this.state.searchBlur){
//                 // this.setState({});  
//                 // }
//                 // this.setState({});
//               }
//               // createLoad();
              
//               // console.info("ter");
//       // return false;
//               // this.props.id !== prevProps.id
        
        
//         //         const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
//         // fetchPromise.then(response => {
//         //   console.log(response);
//         // });
//                 // return false;
   
//     }
  
//     // componentWillUnmount() {
//     //   console.log('Se desmonta el componente...')
//     // }
//     componentDidMount(props){

//       console.log(this.state);
//       console.log(props);
//       // return false;
//       console.log("SIU");

//       let test = null;
//       test = fetch(urlFetch , {
//         method: 'POST',
//         // mode: 'cors',
//         // body: JSON.stringify({ 'parametro': 23 }),
//         body:dataParam,
        
//       })
      
//         .then((response) => response.json() )
//         .then((json) => {
//           // var json = {};
//           dataUsersGlobal = json;
//           console.log(dataUsersGlobal);
//           if(dataUsersGlobal.error){
//             return false;
//           }

//         dataUsersArray = dataUsersGlobal.data;
//         // console.log(tablaCampeones);
    
//         let convert = [];
//         Object.entries(dataUsersArray).forEach(([key, value]) => {
//           convert.push(value);

//         });
    
//         dataUsersArray = convert;
//         console.log(dataUsersArray);

//         whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
//         this.state.container.load = false;
//         this.asignarColumnas(dataUsersArray);
        
//         // this.setState({campeones: dataUsersArray}); 
//         // setLoadInputs(false);
        


//           return json;


//         }).catch(error => {
        
//           let objReturn = {
//             title:"E r r o r",
//             error:true,
//             msg : error.message,
      
//           }
//           personalityFetchMsg(objReturn);
//           return  objReturn;
//         } 
//         );
      

//         // return false;
  
//   }
  
  

//   render(){

//   const customStyles = {
//     rows: {
//         style: {
//             // minHeight: '72px', // override the row height
//             backgroundColor: "#00000000",
//             borderBottomWidth:"0px"
//         },
//       }
//   };

//   SetDataTableFirst(this.state.columnas);
//   var whoDataTableIs = "";
//   whoDataTableIs = this.state.view==="Reporte Detalle" ?  
//   (<DataTable   
//     className="dataTable01_"
//     noHeader={true}
//                             columns={this.state.columnas}
//                             data={this.state.campeones}
//                             // title="Campeones UCL 2000-2019"
//                             // progressPending={pending}
//                             pagination
//                             paginationPerPage = {5}
//                             paginationRowsPerPageOptions={[5,10, 25, 50]}
//                             paginationComponentOptions={paginacionOpciones}
//                             fixedHeader
//                             // backGroundColor = {"black"}
//                             customStyles={customStyles}
//                             // noHeader={true}
//                             // fixedHeaderScrollHeight="600px"
//                             noDataComponent={<span>No se encontró ningún elemento</span>}
//                             rowStyleField={"myRowStyle"}
//                             progressPending={this.state.container.load}
//                             // value={test}
//                             // onChange={(e)=>setTest(e.target.value)} 
//                             // console.log(setTest({load:false}));
//                             // progressPending={true}

//                             progressComponent={<CustomLoader />}
//                             // progressPending={<div id="idBar" className="classProgressBar">
//                             // <div id="idLoad2"></div>
//                           // </div>}
//                             // progressComponent={<CustomLoader />}
//                             // noHeader={true}
//           /> ) :     
//          < DataReportGlobal data={dataUsersGlobal} search={this.state.searchForAnother}/>;

//   return (
    
//     // {this.}
  
//     // {console.log("")}
//     <div className="table-responsive">
//     <br></br>  
//     <div className='contentFiltersAboutTable'>
//       <SelectPicker cleanable={false}  
//       data={dataSelectPicker}
//       defaultValue={dataSelectPicker[0].label}
//         // defaultValue={value}
//         onChange={this.onChangeView}
//         searchable={false} style={{ width: 224 }} /> 
//       <div className="barraBusqueda">
//         <button onClick={this.onChangeSearch} type="button" className="btnBuscar" /*onClick={onClear}*/>
//                 {" "}
//                 <FontAwesomeIcon icon={faSearch} />
//               </button>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="customeTextFieldSearch"
//                 name="busqueda"
//                 id="idSearchTable"
//                 onKeyDown={this.onChange}
//                 // value={this.state.busqueda}
//                 // value={""}
//                 // onChange={this.onChange}
//               />
//               <span className='spanTextFieldSearch'>Buscar</span>

            
//             </div>
//           </div>
          
         
//         <div>
//           {whoDataTableIs}
//         </div>
//     </div>
//   );
// }
// }

// export default FormAllUsers;
// FormAllUsers.defaultProps = {
//   propiedad: 'Valor por defecto definido para la propiedad'
// }




class FormAllUsers extends Component {

  state={
    busqueda: '',
    campeones: [],
    columnas:[],
    subColumns :[],
    // another : tablaCampeones,
  }

  constructor(props) {
    console.log(props);
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

  forceUpdateHandler(){
    this.forceUpdate();
  };


  onChangeSearch = e=>{ 
    let e2 = document.getElementById("idSearchTable").value;
    let value_ = e2;
    console.warn(value_);
    this.state.container.load = true;
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

  asignarColumnas =  (data__)=>{

    const  columnas = [
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

              console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
              // prevProps.test.load = false;
              this.state.container.load = true;
              // prevProps.setTest({load:false});
              console.log(this.props);
              // console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps);
              // console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevState);
              // console.log("SIU ASDASD");
              // console.log(this.props.propiedad.count);
              // console.log(prevProps.propiedad.count);

              
              if (this.props.propiedad.count !== prevProps.propiedad.count) {
                // boolChangesd = true;

                if((this.props.json).length === 0 ){

                  if( this.props.preLoad===true ){
                    // this.state.container.load = true;
                    // this.setState({});
                    // te.push({label: value.name , value: value.idCatCheck});
                    return false;
                  }
          
                  this.state.container.load = false;
                  this.setState({columnas: [],campeones:[]});
                  return false;
                }


                console.warn("FETCH");
                // createLoad();
                this.state.container.load = true;
                // let test = null;
                // test = fetch(urlFetch , {
                //   method: 'POST',
                //   // mode: 'cors',
                //   // body: JSON.stringify({ 'parametro': 23 }),
                //   body:dataParam,
  
                // })
                
                //   .then((response) => response.json() )
                //   .then((json) => {
                  
                  console.log("SIU");
                  let json = this.props.json;
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

                    // SECOND
                    Object.entries(value).forEach(([key, value2]) => {
                      convert.push(value2);
            
                    });

                    // convert.push(value);
          
                  });
              
                  dataUsersArray = convert;
                  console.log(dataUsersArray);
          
                  whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
                  this.state.container.load = false;
                  this.props.container.load = false;
                  this.asignarColumnas(dataUsersArray);

                }
          
              //       // return json;
              //       return false;
          
          
              //     }).catch(error => {
                  
              //       let objReturn = {
              //         title:"E r r o r",
              //         error:true,
              //         msg : error.message,
                
              //       }
              //       personalityFetchMsg(objReturn);
              //       // return  objReturn;
              //     } 
              //     );
              // // hideLoad();  
              // // alert();
              // }else{
              //   // console.log("EL OTRO");
              //   // if(this.state.searchBlur){
              //   // this.setState({});  
              //   // }
              //   // this.setState({});
              // }
              // createLoad();
              
              // console.info("ter");
      // return false;
              // this.props.id !== prevProps.id
        
        
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
      // anotherMethod(){
      // console.log(this.state);

      console.log(this.props);
      if((this.props.json).length === 0 ){
        // alert();
        if( this.props.preLoad===true ){
          // this.state.container.load = true;
          // this.setState({});
          // te.push({label: value.name , value: value.idCatCheck});
          return false;
        }

        this.state.container.load = false;
        this.setState({columnas: [],campeones:[]});
        // alert("JEJe");
        return false;
      }
      
      // console.log("SIU");
      // let json = this.props.json;
      //   dataUsersGlobal = json;
      //     console.log(dataUsersGlobal);
      //     // alert();
      //     if(dataUsersGlobal.error){
      //       return false;
      //     }

      //   dataUsersArray = dataUsersGlobal.data;
      //   // console.log(tablaCampeones);
    
      //   let convert = [];
      //   Object.entries(dataUsersArray).forEach(([key, value]) => {
      //     convert.push(value);

      //   });
    
      //   dataUsersArray = convert;
      //   console.log(dataUsersArray);

      //   whoIs = convert[userSize-1] ? convert[userSize-1] : {} ;
      //   this.state.container.load = false;
      //   this.props.container.load = false;
      //   this.asignarColumnas(dataUsersArray);
      //   console.log("ACABO");
        // function resolveAfter2Seconds() {
        //   return new Promise(resolve => {
        //     setTimeout(() => {

        //       document.getElementsByClassName("loadContainer").style.display = "none";
        //       // resolve('resolved');
        //     }, 2000);
        //   });
        // }
        
        // async function asyncCall() {
        //   console.log('calling');
        //   const result = await resolveAfter2Seconds();
        //   console.log(result);
        //   // expected output: "resolved"
        // }
        
        // asyncCall();
        

        console.log("ESPERAR");

  }
  
  

  render(){
    // console.warn(this.props);
  const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
            backgroundColor: "#00000000",
            borderBottomWidth:"0px"
        },
      }
  };
  // this.anotherMethod();
  SetDataTableFirst(this.state.columnas);
  var whoDataTableIs = "";

  let URLhash = window.location.hash;
  let typeOfReportIndex = URLhash ==="#details" ? 0: 1 ;
  let style_Event = (this.state.campeones).length ===0 ?  {opacity:"0.5",pointerEvents:"none"} : {};
  
  let searchBtn = (<div className='contentFiltersAboutTable' style={style_Event} >
  {/* <SelectPicker cleanable={false}  
  data={dataSelectPicker}
  defaultValue={dataSelectPicker[0].label}
    // defaultValue={value}
    onChange={this.onChangeView}
    searchable={false} style={{ width: 224 }} />  */}
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
      </div>);


  console.log(URLhash);
  let searchHtml = searchBtn ;
  let dateInfo = (this.state.campeones).length ===0 ? "- - -" :this.props.propiedad;
  // alert(dateInfo);
  let textDate = dateInfo === "- - -" || dateInfo ==""  ?  "- - -" : FunctionConvertDateInitToFinal(dateInfo);
  // textDate
  // if( (props.data).length !== 0  ){
    
    // dateInfo = this.props.propiedad;
    // dateInfo = props.data.details.post ;

    // console.log(this.props.propiedad, "ESTO");
    
// }
  // alert(URLhash);
  // alert(URLhash);
  // this.state.view==="Reporte Detalle" || 
  // let tittleReport = URLhash ==="#details" ? "Reportes Detalle"  : "Reporte Consolidad";
  whoDataTableIs = 
  URLhash ==="#details" ?  
  (
  
  <>
  <div className='titleDataReportGlobal'> <span>REPORTE DETALLE  |  <span>
    {textDate}
    </span> </span>
            
            <span>
                {searchHtml}
                </span>  
            
             </div>
  
  <DataTable   
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
                            noDataComponent={<NoOneD></NoOneD>}
                            rowStyleField={"myRowStyle"}
                            progressPending={this.props.container.load}
                            // value={test}
                            // onChange={(e)=>setTest(e.target.value)} 
                            // console.log(setTest({load:false}));
                            // progressPending={true}

                            progressComponent={ this.props.error ? <ErrorD/> : <LoadD /> }
                            // progressPending={<div id="idBar" className="classProgressBar">
                            // <div id="idLoad2"></div>
                          // </div>}
                            // progressComponent={<CustomLoader />}
                            // noHeader={true}
          />
          
          </> ) :     
        <DataReportGlobal 
        details = { this.props.details}
        searchBtn = {searchBtn}
        style_Event = {style_Event}
        progressPending={this.props.container.load} data={dataUsersGlobal} search={this.state.searchForAnother}/>;

  let display_ = this.props.container.load === true ? "none" : "block";
  // let style_Event = (this.state.campeones).length ===0 ?  {opacity:"0.5",pointerEvents:"none"} : {};
  // let typeOfReportIndex = URLhash ==="#details" ? 0: 1 ;
  console.warn(this.state);
  console.log("ALER");
  return (
    
    // {this.}
    
    // {console.log("")}
    <div className="table-responsive" 
    // style={{display:display_}}
    >
 


    {/* <br></br>   */}
    <div className='contentBtnExcelRight'>
    <Button className='classNameFormGroupExcel'  onClick={()=>{
      let linkDownLoad = this.props.json.details.encryptPostDownload;
      console.warn(linkDownLoad);
      window.open( urlCookie+"AdminApiReportjobs/reportJobsExport2/"+linkDownLoad+"/"+typeOfReportIndex);
    }} variant="success"> <FontAwesomeIcon icon={faFileExcel} /> 
    <span>{' Descargar el contenido'}</span>
    </Button>
    {/* <SelectPicker 
     defaultValue={ typeOfReportIndex }
     cleanable = {false}
    data={typeOfReport} searchable={false}  style={{ width: 224 }} /> */}
    </div>
    {/* <div className='contentFiltersAboutTable' style={style_Event} >
  
      <div className="barraBusqueda">
        <button onClick={this.onChangeSearch} type="button" className="btnBuscar" >
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
          </div> */}
          
         
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



