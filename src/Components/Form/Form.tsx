const Form = () => {
    return(
        <div>
            <label htmlFor="movieInput" className="form-label">Type a movie</label>
            <div className="input-container d-flex gap-3">
                <input type="text" className="form-control" id="movieInput" />
                <button className="btn btn-success">Add</button>
            </div>
        </div>
    )
}

export default Form;