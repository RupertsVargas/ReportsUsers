import DataTable from 'react-data-table-component';

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
    let array = arrayPre.data.data;
    let search = (arrayPre.search).toLowerCase();
    let subData = [];
    console.log(search);
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
                category: "Limpieza",
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
            category: "Limpieza",
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
    
    console.log(subData);
    return subData;
}


export const DataReportGlobal = (props) => {
    console.log(props);
    let dataHere = data(props);
    return (
        <DataTable
            columns={columns}
            data={dataHere}
        />
    );
};