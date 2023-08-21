import React from 'react';
import FormAllUsers,{FormAllUsers2} from '../App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {urlCookie} from "./UrlAlot";
import { useQuery, useMutation } from 'react-query';
import {api} from "../utilities/api";
import {LoadD} from "../js/noticeDesign";
import { DateRangePicker ,
        Form,
        Button,
        // CheckboxGroup,
        // RadioGroup,
        // Checkbox,
        // Radio,
        Schema,
        // CheckPicker,
        // InputNumber,
        // Panel,
        // Slider,
        SelectPicker,
        DatePicker,
        Message,
        toaster,
        FlexboxGrid
    } from 'rsuite';
import { fontSize } from '@mui/system';
    

const { afterToday } = DateRangePicker;
const urlSchedule = urlCookie+'AdminMain/getScheduleForSelect';
export var dataParam = {};

var dataGlobal = {};
const Field = React.forwardRef((props, ref) => {
    const { name, message, label, accepter, data ,error, ...rest } = props;
    
    if(props.name == "initDate" || props.name == "finalDate" ) {

    }else{
        // console.warn("DATA",props);  
        // props.value =null;  
    }
    return (
        // className="fieldInputBlockContainer"
    <Form.Group controlId={`${name}`} ref={ref} className={error ? 'has-error' : 'fieldInputBlockContainer'}>
        <Form.ControlLabel  className="fieldLabelCustome">{label} </Form.ControlLabel>
        <Form.Control data={data} name={name} accepter={accepter} errorMessage={error} {...rest}  />
        <Form.HelpText>{message}</Form.HelpText>
    </Form.Group>
    );
});
const {DateType,StringType} = Schema.Types;
var countProps = 0;
var objHEre = {};
export var boolPagination_ = false;

const model = Schema.Model({
    // skills: ArrayType()
    //     .minLength(2, 'Please select at least 2 types of Skills.')
    //     .isRequired('This field is required.'),
    // createDate: StringType().isRequired("This field is required."),
    initDate: DateType().isRequired('This field is required.'),
    selectSchedule: StringType().isRequired('This field is required.'),
    selectSchedulecompanyGlobal: StringType().isRequired('This field is required.'),
    // selectSchedulecompanySucursal: StringType().isRequired('This field is required.'),
    // selectSchedulecatCheck: StringType().isRequired('This field is required.'),
    // selectScheduleJob: StringType().isRequired('This field is required.'),
    // selectScheduleJob: StringType().isRequired('This field is required.'),
    finalDate: DateType().isRequired('This field is required.').addRule((value, data) => {
        console.warn(data.initDate);
        console.warn(value);
        let moment = require('moment');
        let date1 = data.initDate;
        let date2 = value;
        let time1 = moment(date1).format('YYYY-MM-DD');
        // dateInitG = time1;
        let time2 = moment(date2).format('YYYY-MM-DD');
        // dateFinalG = time2;
        if(time2 < time1){
            return false;
        }

      }, 'Fecha final es menor que fecha Inicial.'),

    });

    




    // console.log(recuperado)
    







    const  App =  () => {
    var formRef = React.useRef();
    // var initTemplate = 0;
    
    var state = {disabled:false};
    const [template, setTemplate] = React.useState({});

    // const [test, setTest] = React.useState({
    //     load:true
    // });
    // const { isLoading, isError, isSuccess, data, isFetching , refetch }

    // const [recuperado, setRecuperado] = React.useState([1,2,3,4]);
    // selectField
    const [selectField, setSelect] = React.useState([
        {name: 'companyGlobal', label: 'Compañía', value: '',disabled:false}, 
        {name: 'companySucursal', label: 'Sucursal', value: '',disabled:false},
        {name: 'catCheck', label: 'Horario', value: '',disabled:false},
        {name: 'job', label: 'Empleo', value: '',disabled:false}
    ]);
    const [selectFieldAux, setSelectAux] = React.useState([]);

    const [jsonDataFilters, setJsonDataFilters] = React.useState([]);
    const [nextDataAux, setNextDataAux] = React.useState({});
    const [details, setDetails] = React.useState({});
    const [dataSelectByField, setDataSelectByField] = React.useState([
        
        // {'companyGlobal' : {name: 'companyGlobal', label: 'Compañía', value: ''}}, 
        // {'companySucursal':{name: 'companySucursal', label: 'Sucursal', value: ''}},
        // {'catCheck':{name: 'catCheck', label: 'Horario', value: ''}},
        // {"job":{name: 'job', label: 'Empleo', value: ''}}

    ]);
    const [formError, setFormError] = React.useState({});
    var seleccion = [""];
    const [formValue, setFormValue] = React.useState({
        number: 10,
        skills: ['Node.js'],
        browser: 'Chrome',
        status: ['open'],
        level: 1,
        
        level2: 1,
        // createDate: new Date(),
        selectPicker: {},
        // size: "sm",
        // stringers : String,
    });

    const  HandleSubmit = async () => {

        console.log( selectField);
      if (
        // !formRef.current.check()
        formRef.current.root[0].value=="" ||
        formRef.current.root[1].value== "" ||
        selectField[0].value==""
        ) {
            formRef.current.check()
        // toaster.push(<Message type="error">Error</Message>);
        console.log("ENTRA");
        return;
    }
    else{
    //   AQUI
        // toaster.push(<Message type="success">Success</Message>);

            let array = formRef.current.root;
            let sucursalName = "";
            dataParam = new URLSearchParams("");
            let postAux = {};
            objHEre = {count:countProps};
            countProps ++;
            // for(let i = 0; i < array.length; i++){
            for(let i = 0; i < array.length; i++){
                // dataParam
                // console.log(array[i]);
                let id = array[i].id ;
                if(id=="initDate" ||id=="finalDate" ){
                    // dataParam[id] = array[i].value ;
                    objHEre[id] = array[i].defaultValue ;
                    
                    dataParam.append(id, array[i].defaultValue );

                    // console.log(array[i].defaultValue)
                    // dataParam.append('finalDate', '2022-10-21');

                }
            
            }
           
            dataParam.append("filters",JSON.stringify(selectField)); 
            // dataParam.append("Filters",selectField);
            // console.warn("PARA AJAx",selectField);
            boolPagination_ = true;        
            state.disabled = true;
            // alert(state.disabled);
            setTemplate({post:dataParam,stept:1,count:countProps,disabled:true});
            console.log(template);
            ReactDOM.render(
                                <FormAllUsers  
                                propiedad={[]} 
                                json = {[]}
                                container ={ {load:true}}
                                setTest = {[]}
                                test = {{load:true}}
                                preLoad = {true}
                            />
                , document.getElementById("idFormAllUsersContainer"));

            let post = dataParam;
            console.log("ANTES",post);
            var result = {};

            try{
            result = await api.post("AdminMain/index",dataParam);
            console.log("AWAIT",result);
            // VOLVER PARA 
            // setDetails
            
            ReactDOM.render(
                <FormAllUsers  
                        propiedad={objHEre} 
                        details = {details}
                        // resetPagination ={reset}
                        json = {result}
                        container ={ {load:true}}
                        setTest = {[]}
                        test = {{load:true}}
                        reset = {true}
                    />
                , document.getElementById("idFormAllUsersContainer"));
            }
            catch(error){
                console.log(error);
                ReactDOM.render(
                    <FormAllUsers  
                                propiedad={[]} 
                                json = {[]}
                                container ={ {load:true}}
                                setTest = {[]}
                                test = {{load:true}}
                                error = {true}
                        />
                    , document.getElementById("idFormAllUsersContainer"));
            }
            

            // console.log(typeof(result));
            // if(result.error){
            //     alert();
            // }
                
            
                state.disabled = false;
                setTemplate({});

            // console.log(result);
                
            // console.log("desouesS");

        
            // console.log(template);
            dataGlobal = template;
            
        }
        // console.error(test);
        

                }

    React.useEffect(() => {
        // console.log(test);
        // console.log("INICIANDO");
        fetch(urlSchedule,{})
            .then(response => response.json())
        .then((articulos) => {
            console.log(articulos);
            setDetails(articulos.details);
            let dataHere = articulos.data.info.select;
            let new_ = dataHere;
            let details = articulos.details;
            // articulos.details;
            // console.log(details);
                            // if(!details.SESSION){
                                // return false;
                            // }
                            
                            let idCompany = details.SESSION.idCompany;
                            let idCompanyG = details.SESSION.idCompanyG;
                            // if(selectField[index]=="companyGlobal"){
                            //     console.log("GLOBAL0");
                            //     // return idCompanyG;
                            // }
                            // if(selectField[index]=="companySucursal"){
                            //     // return idCompany;
                            // }
                            // console.warn(idCompany,"PEPEPE",selectField[index]);
                        //     return false;
            console.log(new_)
            let te = [];
            let newData = [];
            new_.forEach((element,index) => {
                // new_[index]["value"] = "";
                // console.warn("JEJEJE",element.name);
                let value__ = "";
                let disabled__ = false;
                // if(element.name=="companyGlobal" || element.name=="companySucursal" ){
                //     // value__ = idCompanyG;
                //     // disabled__ = true;
                //     if(element.name=="companyGlobal"){
                //         value__ = idCompanyG
                //     }
                //     if(element.name=="companySucursal"){
                //         value__ = idCompany
                //         disabled__ = false;
                //     }
                    
                //     console.warn(value__,disabled__,index);
                //     }
                    new_[index]["value"] = value__;
                    new_[index]["disabled"] = disabled__;
                    
                if(index!=0)
                newData[element.name] = [{label: "Seleccione "+element.label , value: value__ ,  }];
            });

            te.push({label: "Seleccione una Compañia" , value: "" ,});

                let companyGlobal = articulos.data.data.companyGlobal;
            Object.entries(companyGlobal).forEach(([key, value]) => {
          
                te.push({value: key, label:value.name });
            });


            let sizeFilter = (Object.values(companyGlobal));
            // console.log("companyGlobal",(Object.values(companyGlobal)));
            // LISTO TOD@S
            if(sizeFilter.length>1){
                te.push({label: "Todos" , value: "ALL"});
            }
            
            newData["companyGlobal"] = te;
            // console.log({companyGlobal:te});
            
            // setDataSelectByField(te);




            




            
            setDataSelectByField(newData);
            // Object.entries
        // ];

            
            // state.disabled = false;
            console.log(te,new_);
            // console.log(dataSelectByField)
            setJsonDataFilters(articulos.data);
            setSelect(new_);
            setSelectAux(new_)
    });
    }, []);
    const eventValue = (e) =>{
        // console.log(e);
        console.log("JEJE");
        // let re =  e==undefined ? "" : "0";
        // return re;
    }

    let URLhash = window.location.hash;
    console.log(URLhash);
    // alert(URLhash);
    // SelectPicker.size = "sm";
    // SelectPicker.propTypes.size = function () {

        // return  "sm";
        
        // }

    // } return ("") ;
    console.log(SelectPicker.propTypes,"HOLA");
    // alert(URLhash);
    // this.state.view==="Reporte Detalle" || 
    let tittleReport = URLhash ==="#details" ? "Reportes Detalle"  : "Reporte Consolidado";

    return  (
        
        <div >
            <div className='divTittleReport'>
            
                <span className='spanTittleReport' > {tittleReport} </span>
                
                </div>
        <FlexboxGrid className="formWidthSearchContainer">
            <FlexboxGrid.Item /*colspan={}*/ className="formWidthSearchContainer">
                <Form
                ref={formRef}
                // onChange={setFormValue},
                onChange = {formValue => setFormValue(formValue)}
                onCheck={setFormError}
                formValue={formValue}
                model={model}
                >
            <div className="formWidthSearchContainer_">
            <Field  oneTap
                    accepter={DatePicker}
                    name="initDate"
                    label="Fecha Inicial"
                    errorMessage={formError.createDate}
                    
                    className="fieldBtnInput"
                    // id="idRange"
                    // name="date"
            // label ="Date"
                    // onSelect={value => {getValue(value, 'yyyy/MM/dd')}}
                    disabledDate={afterToday()}
                    placeholder="Selecciona la fecha" 
                />
            <Field  oneTap
                    accepter={DatePicker}
                    name="finalDate"
                    label="Fecha Final"
                    errorMessage={formError.createDate}
                    className="fieldBtnInput"
                    // className="fieldInputBlockContainer"
                    // id="idRange"
                    // name="date"
            // label ="Date"
                    // onSelect={value => {getValue(value, 'yyyy/MM/dd')}}
                    disabledDate={afterToday()}
                    placeholder="Selecciona la fecha" 
                />

                

                <div className="contentSelectFilters">
                    {selectField.map((dataRow,index) => (
                        
                        // console.log(dataRow.name),
                        // console.error("COMENZANDO", dataRow),
                        <Field  
                        key={dataRow.name+"_"+index}
                        className="fieldBtnInput"
                        // size={()=>{return [0]}}
                        // size={ "xs"}
                        styles = { {width: 224, display: 'block', marginBottom: 10 ,fontSize:"10px"} }
                        // onLoad={(e)=>{
                        // size="sm"
                        //     console.log(e,"LOADLOAD");

                        // }}

                        // onChange={(e)=>{
                        //     eventValue(e)
                        // }}
                        onChange={(e)=>{
                            // const [jsonDataFilters, setJsonDataFilters] = React.useState([]);
                            // console.log(jsonDataFilters);
                            console.log(e);
                            console.log("JEJEJE SIU");
                            // setDataNew

                            if(e==""){
                                selectField[index]["value"] = e;
                                selectField.forEach( (element,subIndex) => {
                                let nameHere_ = element.name;
                                if(index<subIndex){
                                    selectField[subIndex].value = "";
                                    dataSelectByField[nameHere_] = [];
                                    console.error("SOLO",nameHere_,selectField[subIndex])
                                }
                            

                            });
                            console.warn(index,selectField);
                            setSelect(selectField);
                                return false;
                            }
                            if(e=="ALL"){
                                let nameNow = dataRow.name
                                // let idName =  index != selectField.length -1 ? array_[1][0] : array_[0][0]; //array_[1][0];
                            // let dataPush = index != selectField.length -1 ? array_[1][1] : array_[0][1];
                                let afterData = index != selectField.length -1 ? selectField[index+1] : selectField[index]  ;
                                console.warn(afterData);
                                // let anotherData =  index==0 ? jsonDataFilters.data : nextDataAux[index];
                                let anotherData =  index==0 ? jsonDataFilters.data : nextDataAux[index-1];
                                // nextDataAux

                                selectField[index]["value"] = e;
                                
                                selectField.forEach( (element,subIndex) => {
                                // console.error(subIndex,element);
                                let nameHere_ = element.name;
                                if(index<subIndex){
                                    selectField[subIndex].value = "";
                                    dataSelectByField[nameHere_] = [];
                                    console.error("SOLO",nameHere_,selectField[subIndex])
                                    
                                    // selectField[subIndex]
                                    
                                }
                            

                            });
                            console.warn(index,selectField);
                            setSelect(selectField);

                                // let dataN = index==0 ? jsonDataFilters.data[name] : nextDataAux[index-1][name] ;
                                console.log(anotherData,nextDataAux);
                                // let idName =  index != selectField.length -1 ? array_[1][0] : array_[0][0]; //array_[1][0];
                            // let dataPush = index != selectField.length -1 ? array_[1][1] : array_[0][1];
                                let nameNext = afterData.name;
                                let allNext_before= Object.entries(anotherData[nameNow]);
                                let arrayNextReturn =  [{label: "Seleccione "+dataRow.label , value: ""}];
                                // let convertData = [{label: "Seleccione "+dataRow.label , value: ""}];
                                console.log(allNext_before);
                                let ePlus =  nextDataAux;
                                // let ePlus =  Object.entries(nextDataAux).length == 0 ? {}: ;
                                console.error("ERROR",ePlus)
                                ePlus[index] = {};
                                ePlus[index]["name"] = "ALL";

                                let arrayNowInsertData = {};
                                allNext_before.forEach(element => {
                                    
                                        let secondPart = element[1];
                                        let arraySubNext = Object.entries(secondPart[nameNext]);
                                    
                                        arraySubNext.forEach(element => {
                                            let numberId = element[0];
                                            let data = element[1];
                                            
                                            console.log(data);
                                            // if(numberID)
                                            if(data.name==null){

                                            }
                                            else{
                                            arrayNowInsertData[numberId] = data;
                                            arrayNextReturn.push({value:numberId,label:data.name});
                                            }
                                            // arrayNextReturn.push({name:element.name})
                                        });
                                        
                                });

                                let sizeFilter = (Object.values(arrayNextReturn));
                                if(sizeFilter.length>2){
                                    // te.push({label: "Todos" , value: "ALL"});
                                    arrayNextReturn.push({label: "Todos" , value: "ALL"});
                                }
                                
                                // setDataNew[nameNext] = arrayNextReturn ;
                                // setDataSelectByField(setDataNew);
                                let setDataNew = dataSelectByField;
                                setDataNew[nameNext] = arrayNextReturn ;
                                console.warn(arrayNowInsertData);
                                ePlus[index] = {};
                                ePlus[index][nameNext] = arrayNowInsertData;
                                ePlus[index]["name"]= "ALL";
                                console.warn(ePlus);
                                setDataSelectByField(setDataNew);
                                setNextDataAux(ePlus);
                        
                                return false;
                                // jsonDataFilters.data[name] : nextDataAux[index-1][name] ;
                            }
                            let name = dataRow.name;
                            let dataN = index==0 ? jsonDataFilters.data[name] : nextDataAux[index-1][name] ;
                            let ePlus = nextDataAux;
                            ePlus[index]=dataN[e];
                            // ePlus.push(e);
                            
                            let array_ = Object.entries(ePlus[index]);
                            console.error("CONOCIENDO",ePlus,array_, index, selectField.length);
                            let idName =  index != selectField.length -1 ? array_[1][0] : array_[0][0]; //array_[1][0];
                            let dataPush = index != selectField.length -1 ? array_[1][1] : array_[0][1];
                            // console.log(idName,array_,dataPush);
                            let convertData = [{label: "Seleccione "+dataRow.label , value: ""}];
                            // convertData.push({label: "Todos" , value: "ALL"});
                            Object.entries(dataPush).forEach(                               
                                    element => {

                                        let numberId = element[0];
                                        let data = element[1];
                                        console.log(data);
                                        if(data.name==null){               }
                                        else{
                                        // arrayNowInsertData[numberId] = data;
                                        convertData.push({value:numberId,label:data.name});
                                        }
                                    }
                                        
                            
    
                                    
                                );

                                
                                selectField[index]["value"] = e;
                                
                                selectField.forEach( (element,subIndex) => {
                                // console.error(subIndex,element);
                                let nameHere_ = element.name;
                                if(index<subIndex){
                                    selectField[subIndex].value = "";
                                    dataSelectByField[nameHere_] = [];
                                    console.error("SOLO",nameHere_,selectField[subIndex])
                                    
                                    // selectField[subIndex]
                                    
                                }else{
                                
                                }
                            

                            });

                            // document.getElementById("selectSchedulecompanyGlobal").value = "HEHE"
                            console.warn(index,selectField);
                            setSelect(selectField);
                            // console.error("Entonces",dataSelectByField,selectField,selectFieldAux);
                            
                            let sizeFilter = (Object.values(convertData));
                            console.log("SIZE NORMAL",sizeFilter)
                            // LISTO TOD@S
                                if(sizeFilter.length>2){
                                    convertData.push({label: "Todos" , value: "ALL"});
                                }
                            
                            let setDataNew = dataSelectByField;
                            setDataNew[idName] = convertData ;
                            setDataSelectByField(setDataNew);
                        
                            setNextDataAux(ePlus);
                            

                        }}
                        
                        // defaultValue = {()=>{
                        //     console.log(details);
                        //     if(!details.SESSION){
                        //         return false;
                        //     }
                            
                        //     let idCompany = details.SESSION.idCompany;
                        //     let idCompanyG = details.SESSION.idCompanyG;
                        //     if(selectField[index]=="companyGlobal"){
                        //         console.log("GLOBAL0");
                        //         return idCompanyG;
                        //     }
                        //     if(selectField[index]=="companySucursal"){
                        //         return idCompany;
                        //     }
                        //     // console.warn(idCompany,"PEPEPE",selectField[index]);
                        //     return false;
                        // }}
                        disabled={selectField[index]["disabled"]}
                        // readOnly = {()=>{
                        //     return false;
                        // }}
                        // defaultValue={'Bryan'} 
                        // size = {"sm"}
                        accepter={SelectPicker}
                        name= {`selectSchedule${dataRow.name}`}
                        label={dataRow.label}
                        
                        // errorMessage={formError.selectPicker}
                        // value = {selectField[index]["value"]}
                        value = {selectField[index]["value"]}
                        cleanable = {false}
                        // defaultValue={[dataSelectByField[dataRow.name][0]]}
                        // defaultValue={ [{ label: "Select Dept", value: "" }]}
                        data = {
                            // console.log(dataSelectByField[dataRow.name]),
                            dataSelectByField[dataRow.name]
                        
                        }
                        
                        // value = {console.log( dataSelectByField[dataRow.name][index]["value"]),""}
                        // valueKey = {"HOLA"}
                        placeholder="Selecciona el Horario" 
                    />
                    ))}

<Form.Group>
                    <Button  style={{backgroundColor:"#00ef00",color:"white",fontWeight:"600"}} id="idSubmitSearch" 
                    disabled  =  {selectField.length===0 || selectField.disabled ? true : false} appearance="primary" onClick={HandleSubmit}>
                    Enviar
                    </Button>
                </Form.Group>
                </div>
                {console.log(SelectPicker,"HOLA2")}
                {/* <Field  
                    accepter={SelectPicker}
                    name="selectSchedule"
                    label="Horario"
                    errorMessage={formError.createDate}
                    data = {recuperado}
                    // className="fieldInputBlockContainer"
                    // id="idRange"
                    // name="date"
            // label ="Date"
                    // onSelect={value => {getValue(value, 'yyyy/MM/dd')}}
                    // disabledDate={afterToday()}
                    placeholder="Selecciona el Horario" 
                /> */}

               
                
                </div>
                
                
                </Form>


            </FlexboxGrid.Item>
            
            </FlexboxGrid>

            {/* <div>
                <br></br>  
                <TemplateComponent props = {template}/>
                
                
            </div> */}

            </div>
            
            

        );
    };


  



    export default App;
