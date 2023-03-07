
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation,faSpinner,faUserSlash } from "@fortawesome/free-solid-svg-icons";
{/* <i class="fas fa-user-slash"></i> */}
{/* <i class="fa-solid fa-triangle-exclamation"></i> */}
export const LoadD = () => {
  console.log("CARGANDO");
  return (
  <div className="loadContainerPre">
  <div className="loadContainerM" >
  <FontAwesomeIcon icon={faSpinner} spin className='iconCustom' />
  <br></br>
  <div className="letterContainer">Cargando</div>
</div>
</div>
)
}

export const NoOneD = () => {
  console.log("NINGUNO");
  return (
  <div className="loadContainerPre">
  <div className="loadContainerM" >
  <FontAwesomeIcon icon={faUserSlash} className='iconCustom' style={{color:"gray"}} />
  <br></br>
  <div className="letterContainer"><span>No se encontró ningún elemento</span></div>
</div>
</div>
)
}


export const ErrorD = () => {
  console.log("ERROR");
  return (
  <div className="loadContainerPre">
  <div className="loadContainerM" >
  <FontAwesomeIcon icon={faTriangleExclamation} className='iconCustom' style={{color:"red"}} />
  <br></br>
  <div className="letterContainer"><span>La información no se encontró</span></div>
</div>
</div>
)
}