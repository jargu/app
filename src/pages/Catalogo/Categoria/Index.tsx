import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const rowData = [
    { "id": 1, "name": "Fútbol", "subcategoria": "categoria 1", "clabe": 960704270286915, "creada": "17/07/2022" },
    { "id": 2, "name": "Atletismo", "subcategoria": "categoria 1", "clabe": 809457823573229, "creada": "15/08/2022" },
    { "id": 3, "name": "Baloncesto", "subcategoria": "categoria 1", "clabe": 873340701149796, "creada": "21/02/2024" },
    { "id": 4, "name": "Béisbol", "subcategoria": "categoria 1", "clabe": 119394885153188, "creada": "10/08/2022" },
    { "id": 5, "name": "Fútbol Americano", "subcategoria": "categoria 1", "clabe": 887009708273793, "creada": "09/11/2022" }
]

const UserIndex = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ver usuarios'));
    });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'firstName'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.subcategoria.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.clabe.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.creada.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);

    const [page2, setPage2] = useState(1);
    const [pageSize2, setPageSize2] = useState(PAGE_SIZES[0]);
    const [initialRecords2, setInitialRecords2] = useState(sortBy(rowData, 'firstName'));
    const [recordsData2, setRecordsData2] = useState(initialRecords2);

    const [search2, setSearch2] = useState('');
    const [sortStatus2, setSortStatus2] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        setPage2(1);
    }, [pageSize2]);

    useEffect(() => {
        const from = (page2 - 1) * pageSize2;
        const to = from + pageSize2;
        setRecordsData2([...initialRecords2.slice(from, to)]);
    }, [page2, pageSize2, initialRecords2]);

    useEffect(() => {
        setInitialRecords2(() => {
            return rowData.filter((item: any) => {
                return (
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.subcategoria.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.creada.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search2]);

    useEffect(() => {
        const data2 = sortBy(initialRecords2, sortStatus2.columnAccessor);
        setInitialRecords2(sortStatus2.direction === 'desc' ? data2.reverse() : data2);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus2]);

    const navigate = useNavigate();
    const exportEdit = () => {
        navigate('/catalogo/categoria/editar');
    };
    const showEdit = () => {
        navigate('/catalogo/categoria/ver');
    };
    const showAlert = async (type: number) => {
        if (type === 11) {
           const swalWithBootstrapButtons = Swal.mixin({
               customClass: {
                   confirmButton: 'btn btn-danger',
                   cancelButton: 'btn btn-warning ltr:mr-3 rtl:ml-3',
                   popup: 'sweet-alerts',
               },
               buttonsStyling: false,
           });
           swalWithBootstrapButtons
               .fire({
                    title: '¿Estas seguro de eliminar este registro?',
                    text: "¡Esta acción no puede revertise!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Borrar',
                    cancelButtonText: 'Cancelar',
                    reverseButtons: true,
                    padding: '2em',
               })
               .then((result) => {
                   if (result.value) {
                       swalWithBootstrapButtons.fire('¡Eliminado!', 'Tu registro se ha eliminado con éxito', 'success');
                   } else if (result.dismiss === Swal.DismissReason.cancel) {
                       swalWithBootstrapButtons.fire('Cancelado', 'Sin modificaciones', 'error');
                   }
               });
       }
   }
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Catálogo
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Categoria</span>
                </li>
            </ul>
            <div className="panel">
                <div className="flex md:items-center md:flex-row flex-col mb-5">

                </div>
                <div className="flex flex-wrap justify-between sm:justify-between items-center gap-2 w-full mb-5">
                    <div className="w-1/3">
                        <input type="text" className="form-input w-100" placeholder="Buscar..." value={search2} onChange={(e) => setSearch2(e.target.value)} />
                    </div>
                    <div className="tr:ml-auto rtl:mr-auto">
                        <Link to="/catalogo/categoria/agregar" className="btn btn-success ml-3 flex">
                            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>&nbsp;{'Agregar categoría'}
                        </Link>
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        className="whitespace-nowrap table-hover"
                        records={recordsData2}
                        columns={[
                            { accessor: 'id', title: 'No.', sortable: true },
                            {
                                accessor: 'name ',
                                title: 'Categoría',
                                sortable: true,
                                render: ({ name  }) => (
                                    <div className="flex items-center w-max">
                                        <div>{name }</div>
                                    </div>
                                ),
                            },

                            { accessor: 'subcategoria', title: 'Subcategorias', sortable: true },
                            {
                                accessor: 'creada',
                                title: 'Creado el',
                                sortable: true,
                                render: ({ creada }) => <div>{creada}</div>,
                            },
                            {
                                accessor: 'action',
                                title: 'Acciones',
                                titleClassName: '!text-center',
                                render: () => (
                                    <div className="flex items-center w-max mx-auto gap-2">
                                        <Tippy content="Ver">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => exportEdit()}>
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                            </button>
                                        </Tippy>
                                        <Tippy content="Editar">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => exportEdit()}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#283992" stroke-width="1.5" stroke-linecap="round"/>
                                                    <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#283992" stroke-width="1.5"/>
                                                    </svg>
                                            </button>
                                        </Tippy>
                                        <Tippy content="Borrar">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => showAlert(11)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="#EB4149" stroke="#EB4149" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </Tippy>
                                    </div>
                                ),
                            },


                        ]}
                        totalRecords={initialRecords2.length}
                        recordsPerPage={pageSize2}
                        page={page2}
                        onPageChange={(p) => setPage2(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize2}
                        sortStatus={sortStatus2}
                        onSortStatusChange={setSortStatus2}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Mostrando  ${from} de ${to} de ${totalRecords} registros`}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserIndex;
