import DataTable from 'react-data-table-component';
import {LoadD,NoOneD} from "../js/noticeDesign";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es'); // aca ya esta en es
const columns = [
    {
        cell: (value) => ( 
            // console.log(value),
            <div className="containerPictureUser" style={{width:"100%"}}>
                <div className="byContainerProfilePicture"  style={{width:"auto"}}>
                    <div className="byUserProfilePicture_Border" style={{width:"48px",height:"48px"}}></div>
                    <div className="byUserProfilePicture" style={{width:"42px",height:"42px" , backgroundImage: `url(${value.photo})`}}></div> 
                </div>
            </div>
            // "HOLA"
            )
    },
    {
        name: 'Nombre',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Categoría',
        selector: row => row.category,
        sortable: true,
    },
    {
        name: 'Jornadas Laboradas',
        selector: row => row.journeys,
        sortable: true,
    },
    {
        name: 'Horas Laboradas',
        selector: row => row.totalTime,
        sortable: true,
        // selector: row => row.min,
    },
    {
        name: 'Horas Extras',
        selector: row => row.extraTime,
        sortable: true,
        // selector: row => row.min,
    },
    {
        name: 'Días festivos Laborados',
        selector: row => row.holyDaysDone,
        sortable: true,
    },
    {
        name: 'Retardos',
        selector: row => row.delays,
        sortable: true,
    },
    {
        name: 'Faltas',
        selector: row => row.faults,
        sortable: true,
    },
    {
        name: 'Observaciones',
        selector: row => row.observations,
        sortable: true,
        // selector: "- - -",
    },
    
];
// ESTRUCTURA
// const data = [
//     {
//         id: 1,
//         title: 'Beetlejuice',
//         year: '1988',
//     },
//     {
//         id: 2,
//         title: 'Ghostbusters',
//         year: '1984',
//     },
// ]

const data = (arrayPre) => {
    // if(arrayPre.length === 0 || arrayPre === null){
    //     return [];
    // }
   
    let arrayPre01 = arrayPre.data.data;
    let search = (arrayPre.search).toLowerCase();
    let subData = [];

    if((arrayPre.data).length ===  0 ){
        return [];
    }

    console.log(arrayPre);
    console.log(search);
    // console.warn(arrayPre);

    Object.entries(arrayPre01).forEach(([key, value]) => {

    
        let array = value;
   

    for (let x in array) {
        // console.log(array[x]);
        let info = array[x].info;
        let time = array[x].time;
        let obj = {};
        console.log(info.email);

        console.log(info.email.toString().includes(search));
        // if(search==info.fullName)
        if(search!=""){
            if( 
            info.email.toString().includes(search) ||
            info.fullName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(search) ||
            info.fullName.toLowerCase().includes(search)
            ){      
                console.log("ENTRO?");
            
            obj = {
                name:info.fullName,
                category: info.jobName,
                holyDaysDone : 0,
                journeys: time.journeys,
                totalTime: ((time.timeTotal) / 60 ).toFixed(2) ,
                extraTime: 0,
                delays:time.delays,
                faults:time.faults,
                observartions:"",
                photo:info.pathPhotoReal
                    // holyDaysDone : "-",
            }

            subData.push(obj);
            // break;
        }else{
            // break;
        }
        // break;
    }else{
        obj = {
            name:info.fullName,
            category: info.jobName,
            holyDaysDone : 0,
            journeys: time.journeys,
            totalTime: ((time.timeTotal) / 60 ).toFixed(2) ,
            extraTime: 0,
            delays:time.delays,
            faults:time.faults,
            observartions:"",
            photo:info.pathPhotoReal

            // holyDaysDone : "-",
        
        }

        
        
        subData.push(obj);
    }
        // subData 
        // subData.data = array[x].data

    }
});
    
    console.log(subData);
    return subData;
}


function FunctionConvertDateInitToFinal(dateInfo){
    let init = dateInfo.initDate;
    let final = dateInfo.finalDate;
    // moment().get('month'); 
    let monthRange1 =  moment(init).get('month'); 
    let monthRange2 =  moment(final).get('month'); 


    // var oneDate = moment('02-01-2021', 'DD-MM-YYYY');
    // var monthName = oneDate.format('MM');
    
    // console.log(monthName);
    
    // var oneDate = moment();
    // var monthName = oneDate.format('MMMM');
     
    // console.log(monthName);

    let text =  monthRange1 === monthRange2 ? 
    "Del " +  moment(init).get('date') + " AL " +  moment(final).get('date') + " " + (moment(final,"DD-MM-YYYY")).format("MMMM")
    : "Del " +  moment(init).get('date') + " "+ (moment(init,"DD-MM-YYYY")).format("MMMM") +" AL " +  moment(final).get('date') + " " + (moment(final,"DD-MM-YYYY")).format("MMMM");
    return text;
}
const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
            backgroundColor: "#f5f5f7",
            color:"#27363d",
            fontWeight: 600,
        },
    },
    headCells: {
        style: {
            backgroundColor: "#f5f5f7",
            color:"#27363d",
            fontWeight: 600,
    //         paddingLeft: '8px', // override the cell padding for head cells
    //         paddingRight: '8px',
        },
    },
    // cells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for data cells
    //         paddingRight: '8px',
    //     },
    // },
};

export const DataReportGlobal = (props) => {
    console.log(props);
    let dataHere = data(props);
    let textPre = "Cargando";
    let dateInfo = textPre;
    // props.data.details.post ? props.data.details.post : [];
    let textDate = textPre;

    if( (props.data).length !== 0  ){
        dateInfo = props.data.details.post ;
        textDate =FunctionConvertDateInitToFinal(dateInfo);
    }


    // dateInfo.length===0 ? "" : FunctionConvertDateInitToFinal(dateInfo);
    console.log(textDate);
    console.log(dateInfo);
    return (
        <div className='AllContentDataReportGlobal'>
            <div className='titleDataReportGlobal'>REPORTE CONSOLIDADO | <span>{textDate}</span>    </div>
            <div className='contentDataReportGlobal'>
                <div className='DataPersonalByUserContent'>
                    <div>
                        <span className="DataPersonalByUserContentTitle">Tienda: </span>
                        <span className="DataPersonalByUserContentSet">{" "}  001 SANTO DOMING,NUEVO LEÓN</span>
                    </div>
                    <div className='bordersMiddle'>
                        <span  className="DataPersonalByUserContentTitle" >Gerente o R.H. </span>
                        <span className="DataPersonalByUserContentSet">{" "} FRANCISCO MARTINEZ</span>
                    </div>
                    <div>
                        <span  className="DataPersonalByUserContentTitle" >Periodo: </span>
                        <span  className="DataPersonalByUserContentSet">{" "+textDate}</span>
                    </div>
                </div>
                <DataTable
                    className='DataTableClassName02'
                    columns={columns}
                    data={dataHere}
                    progressComponent={<LoadD />}
                    noDataComponent={<NoOneD></NoOneD>}
                    progressPending = {props.progressPending}
                    customStyles={customStyles}
                    // conditionalRowStyles={conditionalRowStyles}
                />
            </div>
        </div>
    );
};