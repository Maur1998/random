
export const Galery = ({dinhoGifs,searchValue}) =>{

    return(
        <main>
        <section className="galery">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {
                        dinhoGifs==''
                        ?null
                        :dinhoGifs.map(({images,id,title})=>(
                            <div className="col-12 col-sm-6 col-md-4  mt-5 d-flex justify-content-center" key={id}>
                                <div className="card">
                                    <img src={images['original']['url']} className="card-img-top" alt={title}/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{title}</h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </main>
    )
}