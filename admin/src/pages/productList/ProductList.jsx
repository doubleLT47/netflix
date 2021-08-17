import { DataGrid } from "@material-ui/data-grid"
import "./productList.css"
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData"
import { useState } from "react"
import  { DeleteOutline } from "@material-ui/icons"

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        const newData = data.filter(item => item.id !== id);

        setData(newData);
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'Name',
          width: 280,
          renderCell:(params) => {
              return (
                  <div className="product-list__product">
                      <img src={params.row.avatar} alt="" className="product-list__img" />
                        {params.row.name}
                  </div>
              )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 160,
          editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          sortable: false,
          width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 140,
            renderCell: (params) => {
                return (
                    <div className="product-list__action">
                        <Link to={"/product/" + params.row.id}>
                            <button className="product-list__button--edit">Edit</button>
                        </Link>
                        <DeleteOutline onClick={() => handleDelete(params.row.id)} className="product-list__button--remove" />
                    </div>
                )
            }
        }
      ];

    return (
        <div className="product-list">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
