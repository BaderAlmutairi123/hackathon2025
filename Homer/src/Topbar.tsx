import homerlogo from "./assets/Homer logo final.svg"


export function Topbar() {


    return (
        <>
        <div className={"fixed top-0 left-3"}>
        <a className={"relative"}href="" target="_blank">
          <img src={homerlogo} class="logo" alt="Homer logo final" />
        </a>
      </div>

      <div className={"Main_Landing_Page_Text text-green-500 fixed top-4 left-1/2 transform -translate-x-1/2"}> 
      <h1 className={"font-mono:"}>Homer</h1>
      <h6 className={"font-medium "}> A hub for skilled trades </h6>
      </div>
        
        </>
    )
}