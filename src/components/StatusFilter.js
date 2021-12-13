function StatusFilter() {
    return (
        <div className="btn-group ms-3">
            <input type="radio" className="btn-check" id="all" name="status" defaultCheck />
            <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
                <i className="fas fa-tasks" />
            </label>
            <input type="radio" className="btn-check" id="done" name="status" />
            <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
                <i className="fas fa-clipboard-check" />
            </label>
            <input type="radio" className="btn-check" id="doing" name="status" />
            <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
                <i className="fas fa-clipboard" />
            </label>
        </div>
    );

}
export default StatusFilter;

