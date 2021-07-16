import "../../styles/list-item.scss";

const listItem = (props) => {
    const {item} = props;

    return (
        <div className="row list-item">
            <div className="col-10">
                <i className="fa fa-check item-icon"></i> <label>{item.title}</label>
            </div>
            <div className="col">
                <span className={`list-badge badge-${item.priority}`}>{item.priority}</span>
            </div>
        </div>
    );
};

export default listItem;
