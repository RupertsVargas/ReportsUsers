import React, {Component} from 'react';
// import logo from './logo.svg';
import ReactDOM from 'react-dom';

// import './js/htmlOfJs.js';
import {HeaderTable} from './js/htmlOfJs.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {dataParam} from "./js/FormUsers";
// import 
import {urlCookie} from "./js/UrlAlot";
let userSize = 10;
export var whoIs = {};
// export var boolPagination_ = false;
// var userData = null;
var dataUsersGlobal = [];
const urlFetch = urlCookie+"AdminMain/index";

function hideLoad(){
  // document.getElementById("idFormAllUsersContainer").style.display = "none";
  document.getElementById("idLoad2").classList.add("classProgressBarInner");
  document.getElementById("idContainerAbsolute").style.display = "none";
  document.getElementById("idFormAllUsersContainer").style.display = "flex";
  
}

function ComponentTest(){
  // const [nameContest, setNameContest] = useState('')
}
// setLoadInputs(true);
function setLoadInputs(is_){
  // if(is_ === true)  {
  //   document.getElementById("idSubmitSearch").setAttribute("disabled",is_)
  // }else{
  //   document.getElementById("idSubmitSearch").removeAttribute("disabled") ;
  // }

  
  
  
  // return a;
}
// function setOffLoadInputs(){
  // document.getElementById("idSubmitSearch").setAttribute("disabled","false");
// }

const CustomLoader = () => (
  <div className="loadContainer" >
    <FontAwesomeIcon icon={faSpinner} spin className='iconCustom' />
    <div>C a r g a n d o . . .</div>
  </div>
);


function createLoad(){

  // console.log("LOAD");
  let container_ = 
  (
    <div className="classContentLoadNew">
          <div id="idTheme">L o a d i n g</div>
          <div id="idBar" className="classProgressBar">
          <div id="idLoad2"></div>
          </div>
          <div id="idMsg" className="classErrorMsgContainer"></div>
    </div>
    ) ;

    ReactDOM.render(
      container_
      , document.getElementById("idContainerAbsolute"));
      // document.getElementById("idLoad2").classList.add("classProgressBarInner");
      // document.getElementById("idContainerAbsolute").style.display = "none";
      document.getElementById("idFormAllUsersContainer").style.display = "none";
      // alert();
      document.getElementById("idContainerAbsolute").style.display = "flex";
    
}


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

// let dataParam = {};

// const getData_ = fetch("http://localhost/checker/AdminMain/index" , {

//   method: 'POST',
//   body: JSON.stringify(dataParam),
//   headers:{
//     'Content-Type': 'application/json'
//   }
// })

//   .then((response) => response.json() )
//   .then((json) => {
//     console.log(json);
//     return json;
//   }).catch(error => {
//     // console.log("SIU");
//     let objReturn = {
//       title:"E r r o r",
//       error:true,
//       msg : error.message,

//     }
//     personalityFetchMsg(objReturn);
//     return  objReturn;
//   } 
//   );

  let dataUsersArray = [];


const paginacionOpciones={
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

// const setHtml = 
//   {
//     div:"<div>HOLA</div>"

//   };

// const [pending, setPending] = React.useState(true);
//     const [rows, setRows] = React.useState([]);
//     React.useEffect(() => {
//       const timeout = setTimeout(() => {
//         setRows(data);
//         setPending(false);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }, []);
function  SetDataTableFirst(dataObj={}) {
//     const [pending, setPending] = React.useState(true);
// const [rows, setRows] = React.useState([]);
// React.useEffect(() => {
//   const timeout = setTimeout(() => {
//     // setRows(dataObj.columns);
//     // setPending(false);
//   }, 2000);
//   return () => clearTimeout(timeout);
// }, []);
  return dataObj;
  console.log(dataObj);
// CrearFuncion(){
//   const [pending, setPending] = React.useState(true);
// const [rows, setRows] = React.useState([]);
// React.useEffect(() => {
//   const timeout = setTimeout(() => {
//     setRows(dataObj.columns);
//     setPending(false);
//   }, 2000);
//   return () => clearTimeout(timeout);
// }, []);

// return <DataTable 
//         columns={dataObj.columns}
//         data={dataObj.data}
//         // title="Campeones UCL 2000-2019"
//         // progressPending={pending}
//         pagination
//         paginationComponentOptions={paginacionOpciones}
//         fixedHeader
//         // noHeader={true}
//         fixedHeaderScrollHeight="600px"
//         noDataComponent={<span>No se encontró ningún elemento</span>}
//         // progressPending={pending}
//         // progressComponent={<CustomLoader />}
//         // noHeader={true}
//         />
}

// function createLoad(){
//   let container = 
//   (<div id="idTheme">L o a d i n g</div>
//           <div id="idBar" className="classProgressBar">
//             <div id="idLoad2"></div>
//           </div>
//           <div id="idMsg" className="classErrorMsgContainer"></div>
//     ) ;
//     ReactDOM.render(
     
//       container
//       , document.getElementById("idContainerAbsolute"));
    
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
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      busqueda: '',
      campeones: [],
      columnas:[],
      subColumns :[],
      propiedad : {},
      searchBlur:false,
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

  

  // const dataUsers = async () => {
  //   console.log("Loading");
  //   const a = await getData_;
  //   console.log(a);
  // };
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

  // setSubColumns=(value)=>{
  //   const columnas_ = [
  //     { 
  //      // count : 0,
  //      table: true,
  //      // selector: 'id',
  //      sortable: true,
  //     //  name: "año",
  //      cell: (value) => ( 
  //       //  console.log("SD"),
  //       console.log(value.info)
  //     )
  //     },
          
    
  //   ];
  //   console.log(columnas_);
  //   // console.log()
  //   this.setState({subColumns: columnas_});
  // }


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


   
    // this.setState({campeones: search});
    // this.state.container.load = false;
    this.setState({campeones: search});
  }

  crearIndex = () => {


  }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextState);
  //   console.log(nextProps);
  // }
  // componentDidMount(){
    // componentWillMount() {
    //   console.log('Se ejecuta componentWillMount')
    // }
  
    // componentDidMount() {
    //   console.log('Se ejecuta componentDidMount')
    // }
  
    // componentWillReceiveProps(nextProps) {
    //   console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
    // }
  
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    //   // debo devolver un boleano
    //   return true
    // }
  
    // componentWillUpdate(nextProps, nextState) {
    //   console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // }
  
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
  
                  
                  // setLoadInputs(false);
                  // document.getElementById("idSubmitSearch").removeAttribute("disabled") ;
                  // this.setState({campeones: dataUsersArray}); 
                  
                  
          
          
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
      // setLoadInputs(true);
    // let userData_ = userData;
    // console.log("Loading");
    // obj.name
    // console.log(dataUsersArray);
    // let  _dataParam = { initDate:"2022-01-02" };
    // console.log( JSON.stringify (_dataParam));
    // console.log(countGlobal);
    // const data = new URLSearchParams("");
    // data.append('initDate', '2022-10-01');
    // data.append('finalDate', '2022-10-21');
    // // if(await countGlobal===0){
      // alert();
      // createLoad();
      // return false;
      // return false;
      // dataUsersGlobal  = await getData_;
      let test = null;
      test = fetch(urlFetch , {
        method: 'POST',
        // mode: 'cors',
        // body: JSON.stringify({ 'parametro': 23 }),
        body:dataParam,
        // headers: { 'Content-Type': 'application/json' },
        // method: "POST",
        // // mode: 'cors',
        
        // // body: _dataParam,
        // body: JSON.stringify({'initDate':"2022-10-01",'finalDate':"2022-10-21"}),
        // headers: {"Content-type": "application/json;charset=UTF-8" , 
        // 'Access-Control-Allow-Origin' : "*",
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        // 'Access-Control-Allow-Headers': 'Content-Type'
        // },
        // res.header('Access-Control-Allow-Origin', "*");    
        // res.h}eader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');   
          // res.header('Access-Control-Allow-Headers', 'Content-Type');  

       
        
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
    // console.warn("RENDER: " + this.state.container.load);
    // console.log(this.state.columnas);
    
  // progressPending={pending}
  // progressComponent={<CustomLoader />}
  // noHeader={true}}

  // const [nameContest, setNameContest] = React.useState('')
  const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
            backgroundColor: "#00000000",
            borderBottomWidth:"0px"
        },
      }
  };
    // },
    // headCells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for head cells
    //         paddingRight: '8px',
    //     },
    // },
    // cells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for data cells
    //         paddingRight: '8px',
    //     },
    // },
// };

  // onChange={(e)=>setEstado(e.target.value)} ;
  
  // console.log(SetDataTableFirst(this.state.columnas));
  SetDataTableFirst(this.state.columnas);
  return (
    
    // {this.}
  
    // {console.log("")}
    <div className="table-responsive">
    <br></br>  
      <div className="barraBusqueda">
            <input
              type="text"
              placeholder="Buscar"
              className="textField"
              name="busqueda"
              id="idSearchTable"
              onKeyDown={this.onChange}
              // value={this.state.busqueda}
              // value={""}
              // onChange={this.onChange}
            />
            <button onClick={this.onChangeSearch} type="button" className="btnBuscar" /*onClick={onClear}*/>
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
      
        <div >
          {/* <div id="idLoad">Cargando</div> */}
          {/* {SetDataTableFirst(setDataVar)} */}
          <DataTable 
          columns={this.state.columnas}
          data={this.state.campeones}
          // title="Campeones UCL 2000-2019"
          // progressPending={pending}
          pagination
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
          />
        </div>
    </div>
  );
}
}

export default FormAllUsers;
FormAllUsers.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}



