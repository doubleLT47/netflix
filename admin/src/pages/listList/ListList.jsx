import { DataGrid } from "@material-ui/data-grid"
import "./listList.css"
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react"
import { DeleteOutline } from "@material-ui/icons"
import { ListContext} from "../../context/listContext/ListContext";
import { getLists, deleteList } from "../../context/listContext/apiCalls";

const ListList = () => {
    const {lists, dispatch} = useContext(ListContext);

    useEffect(() =>{
      getLists(dispatch);
    },[dispatch])

	console.log(lists)

    const handleDelete = (id) => {
			deleteList(id, dispatch);
    }

    const columns = [
			{ field: '_id', headerName: 'ID', width: 250 },
			{
				field: 'title',
				headerName: 'Title',
				width: 300,
			},
			{
				field: 'genre',
				headerName: 'Genre',
				width: 150,	
			},
			{
				field: 'type',
				headerName: 'Type',
				width: 150,
			},
			{
					field: 'action',
					headerName: 'Action',
					width: 140,
					renderCell: (params) => {
							return (
									<div className="product-list__action">
											<Link to={{pathname: "/lists/" + params.row._id, list: params.row}}>
													<button className="product-list__button--edit">Edit</button>
											</Link>
											<DeleteOutline onClick={() => handleDelete(params.row._id)} className="product-list__button--remove" />
									</div>
							)
					}
			}
		];

    return (
        <div className="product-list">
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={lists.length}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r) => r._id }
            />
        </div>
    )
}

export default ListList
