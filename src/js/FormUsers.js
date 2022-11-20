import React from 'react';
import FormAllUsers from '../App';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {urlCookie} from "./UrlAlot";

// import Cookies from 'js-cookie';

// const urlCookie = Cookies.get('url') == undefined ? "http://localhost/checker/" : Cookies.get('url');
// console.log(urlCookie);
// import './styles.css';
// import { Form, Schema } from 'rsuite';
// import boolChange from './htmlOfJs'
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
import { Cookie } from '@mui/icons-material';
    //   import JSONTree from 'react-json-tree';
    //   const { allowedMaxDays, allowedDays, allowedRange, beforeToday, afterToday, combine } = DateRangePicker;
const { afterToday } = DateRangePicker;
const urlSchedule = urlCookie+'AdminMain/getCatCheckForAdmin';
// const urlCookie = Cookies.get('url') == undefined ? "http://localhost/checker/" : Cookies.get('url');
// console.log(urlCookie);
// export var boolPagination_ = {};
// const rootTable = ReactDOM.create(document.getElementById('idFormAllUsersContainer'));
export var dataParam = {};
const Field = React.forwardRef((props, ref) => {
    const { name, message, label, accepter, data ,error, ...rest } = props;
    return (
        // className="fieldInputBlockContainer"
    <Form.Group controlId={`${name}`} ref={ref} className={error ? 'has-error' : 'fieldInputBlockContainer'}>
        <Form.ControlLabel  className="fieldLabelCustome">{label} </Form.ControlLabel>
        <Form.Control data={data} name={name} accepter={accepter} errorMessage={error} {...rest} />
        <Form.HelpText>{message}</Form.HelpText>
    </Form.Group>
    );
});
const {DateType,StringType} = Schema.Types;
var countProps = 0;
export var boolPagination_ = false;




// const { ArrayType, NumberType ,DateType,StringType} = Schema.Types;
const model = Schema.Model({
    // skills: ArrayType()
    //     .minLength(2, 'Please select at least 2 types of Skills.')
    //     .isRequired('This field is required.'),
    // createDate: StringType().isRequired("This field is required."),
    initDate: DateType().isRequired('This field is required.'),
    selectSchedule: StringType().isRequired('This field is required.'),
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

        // if(data.initDate==undefined){
        //     return true;
        // }

      }, 'Fecha final es menor que fecha Inicial.'),
    // status: ArrayType()
    //     .minLength(2, 'Please select at least 2 types of Status.')
    //     .isRequired('This field is required.'),
    // level: NumberType().min(5, 'This field must be greater than 5')
    });

    // async function add1(x) {
    //     const a = await resolveAfter2Seconds(20);
    //     const b = await resolveAfter2Seconds(30);
    //     return x + a + b;
    //   }

    const  App =  () => {
    const formRef = React.useRef();
    var state = {disabled:true};
    // disabled  =  {this.state.disabled}
    const [test, setTest] = React.useState({
        load:true
    });
    const [articulos, setArticulos] = React.useState([])
    const [recuperado, setRecuperado] = React.useState([]);
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        number: 10,
        skills: ['Node.js'],
        browser: 'Chrome',
        status: ['open'],
        level: 1,
        level2: 1,
        createDate: new Date()
    });
    
    const HandleSubmit = () => {

        console.log( formRef.current);
      if (!formRef.current.check()) {
        toaster.push(<Message type="error">Error</Message>);
        
        return;
    }
    else{
    //   AQUI
        toaster.push(<Message type="success">Success</Message>);
        // FormAllUsers
        // alert("HOL");
        // rootTable.render(<FormAllUsers  />);
        // . 
        // ReactDOM.render(
        //    ""
            // , document.getElementById("idFormAllUsersContainer"));
            let array = formRef.current.root;
            dataParam = new URLSearchParams("");
            let objHEre = {count:countProps};
            countProps ++;
            for(let i = 0; i< array.length; i++){
                // console.log(array[i]);
                let id = array[i].id ;
                if(id!=""||id!=null){
                    // dataParam[id] = array[i].value ;
                    objHEre[id] = array[i].defaultValue ;
                    // console.log((array[i].defaultValue).toString() );
                    dataParam.append(id, array[i].defaultValue );
                    // dataParam.append('finalDate', '2022-10-21');

                }
                // console.log(id);
                // dataParam[]
            }
            console.log(objHEre);
            // console.log(dataParam);
            // console.log(array[i]);
            // console.log(formRef.current.);
            let reset = {pagination:true};
            boolPagination_ = true;
            // boolChange = true;
            // console.log(boolPagination_);
            // this.state.container.load = false;
            state.disabled = true;
        ReactDOM.render(
            <FormAllUsers  propiedad={objHEre} resetPagination ={reset}
                container ={ {load:true}}
                setTest = {setTest}
                test = {test}
            />
            , document.getElementById("idFormAllUsersContainer"));
        }
        // setRecuperado([]);
        
        console.error(test);
        
        
        // console.log(<FormAllUsers></FormAllUsers>);

            // React.useEffect(() => {
            //     setTest({load:false});
            //     console.log(test);
            //     });
            //     console.log(test);
                }
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
                
    //             // boolChange = false;
    //             boolPagination_ = false;
    //             console.log(boolPagination_ + "---")
    //             // setPage(1);
    //         }, 1000);
    //         return () => clearTimeout(timer);
    //     });
    // const [page, setPage] = React.useState(0);
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log(`You ${boolPagination_} times`);
    //         // boolPagination_ = false;
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [boolPagination_]);
    // console.log("HOLA");
    
    // var test_ = {};
    // const prueba =  () => {
    //     fetch('http://localhost/checker/AdminMain/getCatCheckForAdmin')
    //     .then((response) => {

    //         console.log(response);
    //         return response.json()
    //         });
    // }
    // console.log(prueba());
    // hideContainer("idContainerAbsolute");
    // const asyncGreeting = async () => { 
        
    //     fetch('http://localhost/checker/AdminMain/getCatCheckForAdmin')
    //         .then(response => response.json())
    //          .then((response) => {
    //             return response
    //         });
        
    // }


            // console.log(asyncGreeting);
            // .then((articulos) => {
            // setArticulos(articulos);
            // let dataHere = articulos.data;
            // let new_ = dataHere;
            // Object.entries(new_).forEach(([key, value]) => {

            //         recuperado.push({label: value.name , value: value.idCatCheck});
            // });
    // asyncGreeting().then(result => console.log(result));
    // console.log(asyncGreeting)
    React.useEffect(() => {
        console.log(test);
        // setTest = {setTest}
        // test = {test}

        fetch(urlSchedule,{
            // fetch('http://localhost/checker/AdminMain/getCatCheckForAdmin',{
                // mode: 'cors', // <---
                // cache: 'default',
                // headers: new Headers({ 'Content-type': 'application/json'}),
            //     header:{
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*'
            //   },
                // mode: 'no-cors'
            })
            .then(response => response.json())
          .then((articulos) => {
            setArticulos(articulos);
            let dataHere = articulos.data;
            let new_ = dataHere;
            let te = [];
            // recuperado = [
            Object.entries(new_).forEach(([key, value]) => {
                
                te.push({label: value.name , value: value.idCatCheck});
            });

            // console.log("")
            // item => ({ label: item, value: item })
            state.disabled = false;
            setRecuperado(te);
    });
    }, []);


    // const data_ =  [];
    console.log(recuperado)
    
    //   console.log(test_);
    return  (
        <FlexboxGrid className="formWidthSearchContainer">
            <FlexboxGrid.Item /*colspan={}*/ className="formWidthSearchContainer">
                <Form
                ref={formRef}
                onChange={setFormValue}
                onCheck={setFormError}
                formValue={formValue}
                model={model}
                >
            <div className="formWidthSearchContainer_">
            <Field  oneTap
                    accepter={DatePicker}
                    name="initDate"
                    label="Fecha Inicio"
                    errorMessage={formError.createDate}
                    // className="fieldInputBlockContainer"
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
                    
                    // className="fieldInputBlockContainer"
                    // id="idRange"
                    // name="date"
            // label ="Date"
                    // onSelect={value => {getValue(value, 'yyyy/MM/dd')}}
                    disabledDate={afterToday()}
                    placeholder="Selecciona la fecha" 
                />

                <Field  
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
                />

                <Form.Group>
                    <Button style={{backgroundColor:"#00e500",color:"black",fontWeight:"600"}} id="idSubmitSearch" disabled  =  {recuperado.length===0 ? true : false} appearance="primary" onClick={HandleSubmit}>
                    Enviar
                    </Button>
                </Form.Group>
                
                </div>
                
            {/* <div> */}
            {/* <br></br> */}
            {/* <Form.Group> */}
            
                {/* </Form.Group> */}
                 {/* </div> */}
            
          
                
                </Form>
            </FlexboxGrid.Item>
            
            </FlexboxGrid>
            
            
        );
    };

    export default App;

