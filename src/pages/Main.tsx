import Header from '../components/header/Header';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// @ts-ignore
import {useQuery} from "react-query";
import axios from 'axios';

export default function Main() {
    
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        console.log("Data... ");
        return response.json();
    };
    
    /*
    const fetchCharacters = async () => {
        axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => res.data);
    }
    */
    const {isLoading, error, data, isFetching, status} = useQuery(['characters'], fetchCharacters);

    console.log(isLoading, error, data, isFetching);

    const columnDefs = [
        {field: 'id',sortable:true},
        {field: 'name',sortable:true, filter:true},
        {field: 'status',sortable:true, filter:true},
        {field: 'species',sortable:true, filter:true}
    ];

    if (status === "loading"){
        return <div>Loading... </div> 
    }

    if(status === "error")
    {
        return <div>{error}</div>
    }

    return (
    <div style={{width: "100%"}}>
        <Header/>
        <div className='ag-theme-balham' style={{height:500}}>
            <AgGridReact rowData={data.results} columnDefs={columnDefs} pagination={true}/>
        </div>
    </div>
    );
}
