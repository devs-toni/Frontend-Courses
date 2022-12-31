import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Switch, Route } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader';
import LoaderMessage from './LoaderMessage';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let url = "http://localhost:5000/santos";
    let api = helpHttp();
    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res) => {
            if (!res.err) {
                setDb(res);
                setError(null);
            } else {
                setError(res);
                setDb(null)
            }
            setLoading(false);
        });
    }, [url]);




    const createData = (data) => {
        data.id = Date.now();
        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        }
        api.post(url, options).then(res => {
            console.log(res);
            if (!res.err) {
                setDb([...db, res]);
                setError(null);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        }

        api.put(endpoint, options).then(res => {
            if (!res.err) {
                let newData = db.map((el) => el.id === data.id ? data : el);
                setDb(newData);
                setError(null);
            } else {
                setError(res);
            }
        });

    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id ${id}?`)

        let options = {
            headers: { "content-type": "application/json" }
        }

        if (isDelete) {
            let endpoint = `${url}/${id}`;
            api.del(endpoint, options).then(res => {
                if (!res.err) {
                    let del = db.filter((el) => el.id !== id);
                    setDb(del);
                    setError(null);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    }

    return (
        <div>
            <HashRouter basename='pokemon'>
                <h2>API de Pokemon con JSON Server</h2>
                <NavLink to='/' activeClassName='active'>Pokemon</NavLink>
                <NavLink to='/add' activeClassName='active'>Agregar</NavLink>

                <Switch>
                    <Route exact path='/'>
                        {loading && <Loader />}
                        {error && <LoaderMessage sms={`Error ${error.status}: ${error.statusText}`} color="#ff0000" />}
                        {db && <CrudTable
                            data={db}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />}
                    </Route>
                    <Route exact path='/add'>
                        <CrudForm
                            createData={createData}
                            updateData={updateData}
                            dataToEdit={null}
                            setDataToEdit={setDataToEdit} />
                    </Route>
                    <Route exact path='/edit/:id'>
                    <CrudForm
                            createData={createData}
                            updateData={updateData}
                            dataToEdit={dataToEdit}
                            setDataToEdit={setDataToEdit} />
                    </Route>
                    <Route exact path='/delete/:id'>Delete</Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default CrudApi
