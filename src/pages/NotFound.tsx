import Layout from "../components/Layout"
function NotFound(){
    document.body.classList.add("cuerpoHome");
    return(
        <>
            <Layout/>
            <div className="text-center align-content-center align-items-center my-5">
                <h1 className="text-black">404 - PAGINA NO ENCONTRADA</h1>
            </div>
        </>
    )
}

export default NotFound