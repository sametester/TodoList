function TextFilter(props) {
    console.log(props)
    const handleChangeText = e => {
        props.setSearchText(e.target.value);
    };


    return (
        <div className="input-group">
            <input 
            type="text" 
            className="form-control rounded-0" 
            value={props.searchText} 
            onChange={ handleChangeText } 
        />
            <button className="btn btn-secondary rounded-0" onClick={() => props.setSearchText('')}>
                <i className="fas fa-times" />
            </button>
        </div>
    );
}

export default TextFilter;