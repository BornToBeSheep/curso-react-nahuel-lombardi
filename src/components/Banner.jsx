const Banner = () =>{
    return(
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={"./img/camaras.jpg"} className="d-block carousel__img  " alt="..." />
                    <div className="carousel-caption d-none d-md-block fs-2">
                        <h3 className="animate__animated animate__heartBeat fs-1 ">Asegura tu empresa</h3>
                        <p>Contamos con sistemas de intrusión, video vigilancia y control de acceso</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={"./img/familia.jpg"} className="d-block carousel__img " alt="..." />
                    <div className="carousel-caption d-none d-md-block fs-2">
                        <h3 className="animate__animated animate__heartBeat fs-1 ">Protege a tu familia</h3>
                        <p>No hay nada mas importante que tu hogar</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={"./img/casa.jpg"} className="d-block carousel__img " alt="..." />
                    <div className="carousel-caption d-none d-md-block fs-2">
                        <h3 className="animate__animated animate__heartBeat fs-1 ">Disfruta de tus vacaciones</h3>
                        <p>Es hora de que tu mascota tambien se tome un descanso</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default Banner