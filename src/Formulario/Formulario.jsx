export function Formulario() {
    return (
        <>

            <form>
                <div className="row">
                    <div className="col-12 col-md-6 fst-italic fw-bold">
                        <div className="mb-3">
                            <label className="form-label">
                                Nombre
                            </label>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Apellidos
                            </label>
                            <input type="text" className="form-control" placeholder="Apellidos" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Telefono
                            </label>
                            <input type="text" className="form-control" placeholder="Telefono" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label className="form-label">
                                Fecha Ingreso
                            </label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label ">
                                Fecha Egreso
                            </label>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label ">
                                Cant de Personas
                            </label>
                            <input type="number" min="1" max="10" className="form-control" />
                        </div>


                    </div>
                    <div className="text-center">
                        <button type="submit" class="btn btn-dark fst-italic fw-bold">Reservar</button>
                    </div>
                </div>

                {/* <div className="row"></div> */}
            </form >
        </>
    )
}