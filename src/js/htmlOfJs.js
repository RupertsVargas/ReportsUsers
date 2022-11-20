// import DataTable from 'react-data-table-component';

// import * as React from 'react';
// import React from 'react';
import React, { useEffect } from "react";
// import {Pagination } from 'rsuite';
// import "./style.css";
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';
import moment from 'moment';

// NUEVOS
import { useTheme } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCircle, faInfo, faHeart, faCircleCheck,faCircleXmark,faCircleExclamation ,
import {faCircle, faCircleCheck,faCircleXmark,faCircleExclamation ,
  faEye,faEyeSlash,faPenToSquare,
  faMagnifyingGlass,faPencil, faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
// import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
// import {FormAllUsers,whoIs} from "../App"
import 'moment/locale/es';
export var boolChange = false;
export var boolChangesd = false;


moment.locale('es'); // aca ya esta en es

// var init = true;


function processGetHour(exist_,obj,index){

  let hour = "--:--:--";
      // if(exist_ == false){
      if(exist_===false){
        hour = "--:--:--";
      }else{
    
        let next = obj.data==null ? false : true;
        if(next){
          // myStr1.equals(myStr2)
          // index = index != 0 ? obj.data.length-1 : index ;
          index = index !== 0 ? obj.data.length-1 : index ;
          // let dayName = (moment(index, "DD-MM-YYYY HH:MM:SS").format('dddd'));
          hour = obj.data[index].has === false ? "--:--:--" : 
          moment(obj.data[index].data.check.checkDateAux, 
            "DD-MM-YYYY hh:mm:ss").format('LTS');

    
        }
        
        // entrada = obj.data[0].has == false ? "--:--:--" : obj.data[0].check.checkDateAux ;
      } 
    return hour;
}

function setImgResult(url_="NA",path,class_="imgResult_"){
  // style={{ backgroundImage: `url(${obj.pathPhotoReal})`}}></div> 
  // style={{ backgroundImage: `url(${obj.pathPhotoReal})`}}></div> 
  path = path+"assets/img/v2/svg/";
  let html = <div className={class_} style={{backgroundImage: `url(${path+url_}.svg)`}}></div>;
  return  html;
}
// function createData(day, stringDate, fat, carbs, protein, price,obj={} ) {
  function createData(obj={},dataAll={},fecha ) {
    let index = obj.dateNormalFormat;
    
    
    // console.log(obj);
    // console.log(obj.data); 
      let exist_ = obj.void ? false : true;
      let entrada = processGetHour(exist_,obj,0);
      let salida = processGetHour(exist_,obj,1);
      let statusComplete = obj.status.result;
      let incidencePre = obj.incidence && obj.incidence === true ? 1: 0 ;
      let incidence = "";
      // if(incidence)
      // let incidence = 0;

      let dayName = (moment(index, "DD-MM-YYYY").format('dddd'));
      dayName = dayName[0].toUpperCase() + dayName.substring(1);
      // console.log(dayName);
      let day_ =  (moment(index, "DD-MM-YYYY").format('DD'));
      let mounth =  (moment(index, "DD-MM-YYYY").format('MMMM'));
      mounth = mounth[0].toUpperCase() + mounth.substring(1);
      let year =  (moment(index, "DD-MM-YYYY").format('YYYY'));
      let stringDate =  day_+"/"+mounth+"/"+year;
      let startTime = entrada;
      let endTime = salida;

      let opcImg = false;

      let complete = opcImg ? setImgResult("NA",dataAll.info.url) : <FontAwesomeIcon icon={faCircle} className="iconPrincipalTable" />;
      // <FontAwesomeIcon icon={faSpinner} spin className='iconCustom' />
      if(statusComplete==1){
        // complete = setImgResult("Correcto",dataAll.info.url);
        complete = <FontAwesomeIcon icon={faCircleCheck} className="classIconCustom2"/>
      }
      if(statusComplete==2){
        // complete =  setImgResult("Incorrecto",dataAll.info.url);
        complete =  <FontAwesomeIcon icon={faCircleExclamation} className="classIconCustom2" />
      }
      if(statusComplete==0){
        // complete =  setImgResult("NA",dataAll.info.url);
        complete =  <FontAwesomeIcon icon={faCircleXmark} className="classIconCustom2" />
      }

      // faMagnifyingGlass,faPencil
      // if(incidencePre==0 && statusComplete == 1 ){

      let iE = obj.iE ? obj.iE : "0" ;
      let iconIncidence_ = iE === "0" ? faEyeSlash : faPenToSquare;
      let isDisableIncidence = iE ==="0" ? "classDisableIncidence" : "";
      // let iE = obj.iE ? obj.iE : "javascript:void(0)" ;
      // iE = iE ==="0"? "javascript:void(0)" : iE; 
      let urlClickFather =  iE ==="0" ? "javascript:void(0)" : dataAll.info.url+"AdminIncidences/"+iE;
      // let isDisableIncidence = iE ==="0" ? "classDisableIncidence" : "";

        incidence = <a className={isDisableIncidence} href={urlClickFather}> <FontAwesomeIcon icon={iconIncidence_} className={"normalIncidence "} /> </a>;
      // }
      if(incidencePre==1){
        incidence =<a className="" href={urlClickFather}> <FontAwesomeIcon icon={faEye} className="normalIncidence" /> </a>;
      } 

      // <FontAwesomeIcon icon="fa-solid fa-circle" />
      // let complete = statusComplete;
      
      // let price = "";
      let minExtras = "--";
      let subTable = obj;
      let date = fecha;
      let dataInfoByUser = dataAll;
    return {
      dayName,
      stringDate,
      startTime,
      endTime,
      complete,
      minExtras,
      incidence,
      subTable,
      dataInfoByUser,
      date,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }
  

  
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange,initPage } = props;
  
  
    // console.log("TABLE");



  const handleFirstPageButtonClick = (event) => {
    // if(boolPagination_==true){
      
      // boolPagination_ = false;
    // }
    // init = false;
    
    onPageChange(event, 0);
  };

  // if(boolPagination_===true){
  //   handleFirstPageButtonClick()
  // }
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
    // init = false;
  };


  const handleNextButtonClick = (event) => {
    
    onPageChange(event, page + 1);
    // init = false;
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    // init = false;
  };
 
  // init = false;


  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        // onLoad ={initPage_}
        disabled={page === 0}
        aria-label="first page"
        id="idIconFirstInit"
        // ref={simulateClick}
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// var 583953774c6c4a69517054325657384e3442664c61673d3d@02-08-2022 = 0;
var count_SubRows = 0;

function createSubRows(obj={},objAll={},fecha,row_){
  
  let dataSchedule =  obj.has === true ? obj.data["schedule-check"]: obj.data["schedule"] ;
  let dataCheck = obj.has === true ? obj.data["check"]: {} ;
  let incidence = obj.incidence === true ? obj.data["incidences"]: {} ;
  let incidencePre = obj.incidence && obj.incidence === true ? 1: 0 ;
  let incidence__ = "";
  let idTable = objAll.info.idUser + "@"+ fecha+"@"+count_SubRows;
  count_SubRows++;
  let iconIncidence = "";
  let statusByCheckPoint = "";
  let iconResult = "";
  // console.log(idTable)
  // console.log(dataCheck);
  // console.warn(row_);
  // console.warn(obj);
  // if(dataSchedule==undefined){
  //   console.log(obj);
    // console.log(objAll);
  //   console.log(fecha);
  // }
  // console.log(dataSchedule.idCheckHours);
  // console.log(incidence);
  let nameSchedule = dataSchedule.name;
  // console.log(nameSchedule);
  let realizado = obj.has===true ? 1 : 0;

      let iE = obj.iE ? obj.iE : "0" ;

      let objIeAux = obj.iE ? obj.iE : [];
      let iconIncidence_ = iE === "0" || objIeAux.length === 0  ? faEyeSlash  : faPenToSquare;
      let isDisableIncidence = iE === "0" || objIeAux.length === 0  ? "classDisableIncidence" : "";
      let urlClickFather =  iE === "0" || objIeAux.length === 0 ? "javascript:void(0)" : objAll.info.url+"AdminIncidences/"+iE;
      // let isDisableIncidence = iE ==="0" ? "classDisableIncidence" : "";
      
      incidence__ = <a className={isDisableIncidence} href={urlClickFather}> <FontAwesomeIcon icon={iconIncidence_} className={"normalIncidence "} /> </a>;
      if(incidencePre==1){
        // let addIfIsFather = row_.incidenceType === "father" ?  row_.iE : "javascript:void(0)";
        urlClickFather =  row_.subTable.incidenceType === "father" ? objAll.info.url+"AdminIncidences/"+row_.subTable.iE : urlClickFather;

        incidence__ =<a className="" href={urlClickFather}> <FontAwesomeIcon icon={faEye} className="normalIncidence" /> </a>;
      } 


  if(realizado===0){
    iconIncidence = setImgResult("AvisoIncidencia",objAll.info.url,"imgResult_");
    iconResult = <FontAwesomeIcon icon={faCircleXmark} className="classIconCustom" />;
  }
  if(realizado === 1){  
    statusByCheckPoint =  obj.data.check.statusUserChecks;
    iconResult = statusByCheckPoint == 0 ?  <FontAwesomeIcon icon={faCircleCheck} className="classIconCustom" /> 
    :  <FontAwesomeIcon icon={faExclamationCircle} className="classIconCustom" />  ;
  }

  // if(statusByCheckPoint == 1){
  //   iconResult = <FontAwesomeIcon icon={fa} className="" />;
  // }



  let hora = "-- : -- : --";
  hora = obj.has === true ? moment(dataCheck.checkDate,"YYYY-MM-DD hh:mm:ss").format('LTS')   : hora;
 
  if(obj.incidence){
    if(obj.incidence==true){
      realizado = 1 ;
            if( //FATHER
              obj.incidencesType == "father" && incidence.statusFather==1 
              ||
            obj.incidencesType == "child" && incidence.statusFather==1 
              && incidence.statusIncSon==1
              //SON
              ){
              iconResult =  <FontAwesomeIcon icon={faCircleCheck} className="classIconCustom" /> ;
            }
      iconIncidence = setImgResult("IncidenciaDeshabilitada",objAll.info.url,"imgResult_incidence");
    }else{
      if(realizado===1){
        iconIncidence = setImgResult("IncidenciaDeshabilitada",objAll.info.url,"imgResult_incidence");
      }else{
        iconIncidence = setImgResult("JustificarIncidencia",objAll.info.url,"imgResult_incidence");
      }
    // iconIncidence = setImgResult("Incidencia Deshabilitada",objAll.info.url,"imgResult_");
    } 
  }else{

  }


  // realizado = realizado===1 ? setImgResult("Correcto",objAll.info.url,"imgResult_2"): setImgResult("Incorrecto",objAll.info.url,"imgResult_2");;
  // realizado = realizado ===1 ? iconResult : setImgResult("Incorrecto",objAll.info.url,"imgResult_2");;
  

  // if(realizado === 1 ){
  //   setImgResult("Correcto",objAll.url,"imgResult_2");
  // }
  // if(realizado === 0 ){
  //   setImgResult("Incorrecto",objAll.url,"imgResult_2");
  // }
  // realizado = realizado == 1 ? setImgResult("",objAll.url,"imgResult_2") : ;

  // console.log(hora);
  // hour = obj.data[index].has === false ? "--:--:--" : 
  // moment(obj.data[index].data.check.checkDateAux, 
  //   "DD-MM-YYYY hh:mm:ss").format('LTS');
   
  // if(has===true){
  // }
  return(<TableRow key={idTable}>

        <TableCell className="letterSubTableByUserBody middleTextCenter" align="center" component="th" scope="row">{nameSchedule}</TableCell>
        <TableCell className="letterSubTableByUserBody middleTextCenter" align="center">{hora}</TableCell>
        <TableCell className="letterSubTableByUserBody middleTextCenter" align="center">{iconResult}</TableCell>
        <TableCell className="letterSubTableByUserBody middleTextCenter" align="center">{incidence__}</TableCell>
        <TableCell className="letterSubTableByUserBody middleTextCenter" align="center">{}</TableCell>
        {/* <TableCell className="letterSubTableByUserBody" align="center" component="th" scope="row">{nameSchedule}</TableCell> */}
        {/* <TableCell className="letterSubTableByUserBody" align="center" component="th" scope="row">{nameSchedule}</TableCell> */}

</TableRow>)
  // return ();
}

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    
    console.warn(row);
    let infoByDay = row.subTable.infoByDay;
    let timeTotal = infoByDay.rest ? "--" : Math.round(infoByDay.timeTotal) ;
    let timeToReplace = infoByDay.rest ? "--" : Math.round(infoByDay.timeToReplace) ;
    // CREACION DE ROW PADRE
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell className="letterTableByUserBody beginMiddleTable">
           
                <IconButton
                aria-label="expand row"
                size="small"
                onClick={() =>  setOpen(!open) }
                >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                {row.dayName}
            </TableCell>
           
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{row.stringDate}</TableCell>
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{row.startTime}</TableCell>
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{row.endTime}</TableCell>
            
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{row.minExtras}</TableCell>
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{timeTotal}</TableCell>
            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{timeToReplace}</TableCell>
            


            <TableCell className="letterTableByUserBody firstMiddleTable" align="center">{row.incidence}</TableCell>
            <TableCell className="letterTableByUserBody endMiddleTable" align="center">{row.complete}</TableCell>
            
            </TableRow>
            <TableRow className="innerTableSub">
            <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 0}} colSpan={9}>
            {/* <TableCell className="containerSubTableSub" style={{ paddingBottom: 0, paddingTop: 0 }} > */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                    <Typography className="letterTableByUserHeader" variant="h6" gutterBottom component="div">
                        Detalle del día
                    </Typography>
                    <Table  size="small" aria-label="purchases">
                    {/* <Table stickyHeader aria-label="sticky table" size="small" > */}
                    
                    <TableHead>
                        <TableRow>
                        <TableCell className="letterTableByUserTheadSub middleTextCenter">Nombre</TableCell>
                        <TableCell className="letterTableByUserTheadSub middleTextCenter">Hora</TableCell>
                        <TableCell className="letterTableByUserTheadSub middleTextCenter"  >Realizado</TableCell>
                        <TableCell className="letterTableByUserTheadSub middleTextCenter" >Incidencia</TableCell>
                        <TableCell className="letterTableByUserTheadSub middleTextCenter" >Detalle Incidencia</TableCell>
                        {/* <TableCell className="letterTableByUserTheadSub" ></TableCell> */}
                        
                        {/* <TableCell className="letterTableByUserTheadSub" ></TableCell> */}
                        {/* align="" */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                
                        
                        {
                        
                        row.subTable.data.map((historyRow) => (
                            createSubRows(historyRow,row.dataInfoByUser,row.date,row)
                        ))
                        
                        }
                    </TableBody>
                    </Table>
                  
                </Box>
                </Collapse>
            </TableCell>
            </TableRow>
        </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      stringDate:  PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      dataInfoByUser : PropTypes.object.isRequired,
      date: PropTypes.string.isRequired,
      subTable:  PropTypes.object.isRequired,
      // subTable : PropTypes.arrayOf(
      //   // PropTypes.shape({
      //   //   amount: PropTypes.number.isRequired,
      //   //   customerId: PropTypes.string.isRequired,
      //   //   date: PropTypes.string.isRequired,
      //   // }),
      // ).isRequired,
      // history: PropTypes.arrayOf(
      //   PropTypes.shape({
      //     amount: PropTypes.number.isRequired,
      //     customerId: PropTypes.string.isRequired,
      //     date: PropTypes.string.isRequired,
      //   }),
      // ).isRequired,
      dayName: PropTypes.string.isRequired,
      // price: PropTypes.string.isRequired,
      // complete: PropTypes.string.isRequired,
      complete: PropTypes.object.isRequired,
    }).isRequired,
  };
  
  var rows = [
  
  ];

  
  // const arrayHeaderTable = {
  //   // vermas: "Ver más",
  //   day:"Día",
  //   fecha:"Fecha",
  //   entrada:"Entrada",
  //   salida:"Salida",
  //   completado:"Completado",
  //   minExtra:"Minutos Extras",
  // }
  const arrayHeaderTable = [
    // "Ver más",
    "Día",
    "Fecha",
    "Entrada",
    "Salida",
    "Min Ext",
    "Min Totales",
    "Min Rep",    
    "Incidencias",
    "Completado",
  ];
  
    // const arrayHeaderTable = [
  //   // "Ver más",
  //   {name:"Día",index:0},
  //   {name:"Fecha",index:1},
  //   {name:"Entrada",index:2},
  //   {name:"Salida",index:3},
  //   {name:"Completado",index:4},
  //   {name:"Minutos Extras",index:5},
  //   {name:"Incidencias",index:6},
  //   // "",
  //   // "Entrada",
  //   // "Salida",
  //   // "Completado",
  //   // "Minutos Extras",
  // ];
  // var count_SD = 0;
  var countPreRow = -1;
  function createPreRowForCollapsibleTable(dataObj,row){
    countPreRow ++;
    return (<Row  key={dataObj.info.idUser+countPreRow} row={row} />);
  } 
  function  CollapsibleTable(dataObj={},again=false){
    // console.log(dataObj);
    
    // boolPagination_ = true;
    // console.log(boolPagination_);
    const [page, setPage] = React.useState(0);
    // const [boolPagination_, setNewPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    // console.log("COLLAPSION");
    // const emptyRows =
    // page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    // boolChange = false;
    // init = true;
    const handleChangePage = (event, newPage) => {
      // console.log(newPage);
      // console.log(boolPagination_);
      boolChange = true;
      // boolPagination_
      
      // again = true;
      // console.log(init + " AGAIN");
      // console.log(boolPagination_);
      // setIsLoading(true);
      
      setPage(newPage);

    };

    
    // boolPagination_ = false;
    // const render = () =>{
    //   console.log("HOLRENDER");
    // }

    // const userObject = React.useMemo(() => {
    //   console.log("MEMO");
    // }, []); // Don't forget the dependencies here either!
  
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      // console.log(+event.target.value)
      setPage(0);
    };


    let dataInfoFromObj = dataObj.data;
    let newObjSend = {
      has:dataObj.has,
      info:dataObj.info
    };

    // console.log(dataObj);
    
    // defaultData = dataInfoFromObj;
    rows = [];
    for (let index in dataInfoFromObj){
      // console.log("HCRE");
      
      rows.push(createData(dataInfoFromObj[index],newObjSend,index));
        
      }

    return (
      <Paper className="paperClass" sx={{ width: '100%' }}>
      <TableContainer   sx={{ maxHeight: 440 }} >
        {/* <Table    aria-label="collapsible table" className="subTableClassNameByUser"  pageSize={5} */}
        {/* rowsPerPageOptions={[5]}> */}
        {/* <Table stickyHeader aria-label="collapsible table" className="subTableClassNameByUser"  pageSize={5} rowsPerPageOptions={[5]} > */}
        <Table stickyHeader aria-label="collapsible table" className="subTableClassNameByUser" >
          <TableHead className="headerByUser" >
            <TableRow>
              
              
              {/* <TableCell className="letterTableByUserHeader"></TableCell> */}
              {/* {arrayHeaderTable.map((tableCell) => (
              <TableCell key = {namePre+tableCell.length}    className="letterTableByUserHeader" align="center">{tableCell}</TableCell>
              ))} */}

              <TableCell className="letterTableByUserHeader firstTable beginMiddleTable" align="center">{arrayHeaderTable[0]}</TableCell> 
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[1]}</TableCell> 
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[2]}</TableCell> 
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[3]}</TableCell> 
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[4]}</TableCell>
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[5]}</TableCell>
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[6]}</TableCell>  
              <TableCell className="letterTableByUserHeader firstTable firstMiddleTable" align="center">{arrayHeaderTable[7]}</TableCell>
              <TableCell className="letterTableByUserHeader firstTable endMiddleTable" align="center">{arrayHeaderTable[8]}</TableCell>

              </TableRow>
          </TableHead>
          <TableBody  >
          {   rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              createPreRowForCollapsibleTable(dataObj,row)
              // <Row  key={dataObj.info.idUser + row.length} row={row} />
            ))}
            
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
              // active={0}
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              // ref={ n => this.node = n }
              // forcePage ={0}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              // onLoad = {FunctionInit}
              // page = {0}
              // autoResetPage = {false}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
    </Paper>
    

    );
  }








  // const dataUsers = async () => {
  //   console.log("Loading");
  //   const a = await getData_;
  //   console.log(a);
  // };
  // export  const htmlTable_ =  (objFather={}) => { 
export function BodyTable(objFather={}) {  


  let obj = objFather.info;
  let setHtml =   CollapsibleTable(objFather);
  // whoIs.idUser
  // console.log(obj);
  // console.
  // console.log("FIN");
  return  setHtml ;


}  

export function HeaderTable(objFather={}) {  
    // const [state, setState] = useState({
    //   name: "John Doe",
    //   email: "john.doe@test.com"
    // });
  // console.log("HEADER");
    // const [loading, setLoading] = React.useState(true);
    // console.log(loading);
    


    let obj = objFather.info;
    obj.name = obj.name ? obj.name : "- - -";
    obj.email = obj.email ? obj.email : "notFound@notFound.not";

    let summary = objFather.time;

    let summaryShow = {};

    // timeToReplace
    summaryShow.timeTotal = summary.timeTotal ? summary.timeTotal : "-";
    summaryShow.timeToReplace = summary.timeToReplace ? summary.timeToReplace : "-";
    obj.minutesExtra = obj.minutesExtra ? obj.minutesExtra : "-";

    // obj.delays = obj.delays ? obj.delays : "-";
    summaryShow.faults = summary.faults ? summary.faults : "-";
    summaryShow.correctDays = summary.correctDays ? summary.correctDays : "-";
    summaryShow.incompletDays = summary.incompletDays ? summary.incompletDays : "-";
    summaryShow.restDays = summary.restDays ? summary.restDays : "-";
    summaryShow.journeys = summary.journeys ? summary.journeys : "-";
    let setHtml =   CollapsibleTable(objFather,true);


    
    return <div className="containerByUser">
      <div className="containerHeaderByUser">
        <div className="containerPictureUser">
        <div className="byContainerProfilePicture">
            <div className="byUserProfilePicture_Border"></div>
            <div className="byUserProfilePicture" style={{ backgroundImage: `url(${obj.pathPhotoReal})`}}></div> 
        </div>
        </div>
        <div className="containerDataNameEmail"> 
            <div className="byUserName">{obj.name + " "+ obj.lastName}</div> 
            <div className="byUserEmail">{obj.email}</div>
        </div>
        <div className="lineDivide"></div>

        <div className="containerDataExtra"> 
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Jornadas:</span>
            <span className="byUserAnotherChild">{summaryShow.journeys}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Minutos Totales:</span>
            <span className="byUserAnotherChild">{summaryShow.timeTotal}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Minutos a Reponer:</span>
            <span className="byUserAnotherChild">{summaryShow.timeToReplace}</span>
            </div>
            {/* <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Retardos:</span>
            <span className="byUserAnotherChild">{obj.delays}</span>
            </div> */}
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Faltas</span>
            <span className="byUserAnotherChild">{summaryShow.faults}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Minutos Extra:</span>
            <span className="byUserAnotherChild">{0}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Días Correctos:</span>
            <span className="byUserAnotherChild">{summaryShow.correctDays}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Incompletos:</span>
            <span className="byUserAnotherChild">{summaryShow.incompletDays}</span>
            </div>
            <div className="byUserAnotherContainer">
            <span className="byUserAnotherFather">Días de Descanso:</span>
            <span className="byUserAnotherChild">{summaryShow.restDays}</span>
            </div>
          </div>
      </div>
      <br></br>
    { setHtml }

</div> ;
}  

