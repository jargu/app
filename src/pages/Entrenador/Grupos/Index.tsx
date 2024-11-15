import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import IconoMenuMarcas from '../../../components/Icon/Menu/IconoMenuMarcas';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../../store';
import IconClock from '../../../components/Icon/IconClock';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import IconX from '../../../components/Icon/IconX';
import AnimateHeight from 'react-animate-height';


const rowData = [
    {
        id: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2004-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        phone: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1989-11-19',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        phone: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 3,
        firstName: 'Tillman',
        lastName: 'Forbes',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2016-09-05',
        address: {
            street: '240 Vandalia Avenue',
            city: 'Thynedale',
            zipcode: 8994,
            geo: {
                lat: -34.949388,
                lng: -82.958111,
            },
        },
        phone: '+1 (969) 496-2892',
        isActive: false,
        age: 26,
        company: 'APPLIDECK',
    },
    {
        id: 4,
        firstName: 'Daisy',
        lastName: 'Whitley',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1987-03-23',
        address: {
            street: '350 Pleasant Place',
            city: 'Idledale',
            zipcode: 9369,
            geo: {
                lat: -54.458809,
                lng: -127.476556,
            },
        },
        phone: '+1 (861) 564-2877',
        isActive: true,
        age: 21,
        company: 'VOLAX',
    },
    {
        id: 5,
        firstName: 'Weber',
        lastName: 'Bowman',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1983-02-24',
        address: {
            street: '154 Conway Street',
            city: 'Broadlands',
            zipcode: 8131,
            geo: {
                lat: 54.501351,
                lng: -167.47138,
            },
        },
        phone: '+1 (962) 466-3483',
        isActive: false,
        age: 26,
        company: 'ORBAXTER',
    },
    {
        id: 6,
        firstName: 'Buckley',
        lastName: 'Townsend',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2011-05-29',
        address: {
            street: '131 Guernsey Street',
            city: 'Vallonia',
            zipcode: 6779,
            geo: {
                lat: -2.681655,
                lng: 3.528942,
            },
        },
        phone: '+1 (884) 595-2643',
        isActive: true,
        age: 40,
        company: 'OPPORTECH',
    },
    {
        id: 7,
        firstName: 'Latoya',
        lastName: 'Bradshaw',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2010-11-23',
        address: {
            street: '668 Lenox Road',
            city: 'Lowgap',
            zipcode: 992,
            geo: {
                lat: 36.026423,
                lng: 130.412198,
            },
        },
        phone: '+1 (906) 474-3155',
        isActive: true,
        age: 24,
        company: 'GORGANIC',
    },
    {
        id: 8,
        firstName: 'Kate',
        lastName: 'Lindsay',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1987-07-02',
        address: {
            street: '773 Harrison Avenue',
            city: 'Carlton',
            zipcode: 5909,
            geo: {
                lat: 42.464724,
                lng: -12.948403,
            },
        },
        phone: '+1 (930) 546-2952',
        isActive: true,
        age: 24,
        company: 'AVIT',
    },
    {
        id: 9,
        firstName: 'Marva',
        lastName: 'Sandoval',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2010-11-02',
        address: {
            street: '200 Malta Street',
            city: 'Tuskahoma',
            zipcode: 1292,
            geo: {
                lat: -52.206169,
                lng: 74.19452,
            },
        },
        phone: '+1 (927) 566-3600',
        isActive: false,
        age: 28,
        company: 'QUILCH',
    },
    {
        id: 10,
        firstName: 'Decker',
        lastName: 'Russell',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1994-04-21',
        address: {
            street: '708 Bath Avenue',
            city: 'Coultervillle',
            zipcode: 1268,
            geo: {
                lat: -41.550295,
                lng: -146.598075,
            },
        },
        phone: '+1 (846) 535-3283',
        isActive: false,
        age: 27,
        company: 'MEMORA',
    },
    {
        id: 11,
        firstName: 'Odom',
        lastName: 'Mills',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2010-01-24',
        address: {
            street: '907 Blake Avenue',
            city: 'Churchill',
            zipcode: 4400,
            geo: {
                lat: -56.061694,
                lng: -130.238523,
            },
        },
        phone: '+1 (995) 525-3402',
        isActive: true,
        age: 34,
        company: 'ZORROMOP',
    },
    {
        id: 12,
        firstName: 'Sellers',
        lastName: 'Walters',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1975-11-12',
        address: {
            street: '978 Oakland Place',
            city: 'Gloucester',
            zipcode: 3802,
            geo: {
                lat: 11.732587,
                lng: 96.118099,
            },
        },
        phone: '+1 (830) 430-3157',
        isActive: true,
        age: 28,
        company: 'ORBOID',
    },
    {
        id: 13,
        firstName: 'Wendi',
        lastName: 'Powers',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1979-06-02',
        address: {
            street: '376 Greenpoint Avenue',
            city: 'Elliott',
            zipcode: 9149,
            geo: {
                lat: -78.159578,
                lng: -9.835103,
            },
        },
        phone: '+1 (863) 457-2088',
        isActive: true,
        age: 31,
        company: 'SNORUS',
    },
    {
        id: 14,
        firstName: 'Sophie',
        lastName: 'Horn',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2018-09-20',
        address: {
            street: '343 Doughty Street',
            city: 'Homestead',
            zipcode: 330,
            geo: {
                lat: 65.484087,
                lng: 137.413998,
            },
        },
        phone: '+1 (885) 418-3948',
        isActive: true,
        age: 22,
        company: 'XTH',
    },
    {
        id: 15,
        firstName: 'Levine',
        lastName: 'Rodriquez',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1973-02-08',
        address: {
            street: '643 Allen Avenue',
            city: 'Weedville',
            zipcode: 8931,
            geo: {
                lat: -63.185586,
                lng: 117.327808,
            },
        },
        phone: '+1 (999) 565-3239',
        isActive: true,
        age: 27,
        company: 'COMTRACT',
    },
    {
        id: 16,
        firstName: 'Little',
        lastName: 'Hatfield',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2012-01-03',
        address: {
            street: '194 Anthony Street',
            city: 'Williston',
            zipcode: 7456,
            geo: {
                lat: 47.480837,
                lng: 6.085909,
            },
        },
        phone: '+1 (812) 488-3011',
        isActive: false,
        age: 33,
        company: 'ZIDANT',
    },
    {
        id: 17,
        firstName: 'Larson',
        lastName: 'Kelly',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2010-06-14',
        address: {
            street: '978 Indiana Place',
            city: 'Innsbrook',
            zipcode: 639,
            geo: {
                lat: -71.766732,
                lng: 150.854345,
            },
        },
        phone: '+1 (892) 484-2162',
        isActive: true,
        age: 20,
        company: 'SUREPLEX',
    },
    {
        id: 18,
        firstName: 'Kendra',
        lastName: 'Molina',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2002-07-19',
        address: {
            street: '567 Charles Place',
            city: 'Kimmell',
            zipcode: 1966,
            geo: {
                lat: 50.765816,
                lng: -117.106499,
            },
        },
        phone: '+1 (920) 528-3330',
        isActive: false,
        age: 31,
        company: 'DANJA',
    },
    {
        id: 19,
        firstName: 'Ebony',
        lastName: 'Livingston',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1994-10-18',
        address: {
            street: '284 Cass Place',
            city: 'Navarre',
            zipcode: 948,
            geo: {
                lat: 65.271256,
                lng: -83.064729,
            },
        },
        phone: '+1 (970) 591-3039',
        isActive: false,
        age: 33,
        company: 'EURON',
    },
    {
        id: 20,
        firstName: 'Kaufman',
        lastName: 'Rush',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2011-07-10',
        address: {
            street: '408 Kingsland Avenue',
            city: 'Beaulieu',
            zipcode: 7911,
            geo: {
                lat: 41.513153,
                lng: 54.821641,
            },
        },
        phone: '+1 (924) 463-2934',
        isActive: false,
        age: 39,
        company: 'ILLUMITY',
    },
    {
        id: 21,
        firstName: 'Frank',
        lastName: 'Hays',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2005-06-15',
        address: {
            street: '973 Caton Place',
            city: 'Dargan',
            zipcode: 4104,
            geo: {
                lat: 63.314988,
                lng: -138.771323,
            },
        },
        phone: '+1 (930) 577-2670',
        isActive: false,
        age: 31,
        company: 'SYBIXTEX',
    },
    {
        id: 22,
        firstName: 'Carmella',
        lastName: 'Mccarty',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1980-03-06',
        address: {
            street: '919 Judge Street',
            city: 'Canby',
            zipcode: 8283,
            geo: {
                lat: 9.198597,
                lng: -138.809971,
            },
        },
        phone: '+1 (876) 456-3218',
        isActive: true,
        age: 21,
        company: 'ZEDALIS',
    },
    {
        id: 23,
        firstName: 'Massey',
        lastName: 'Owen',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '2012-03-01',
        address: {
            street: '108 Seaview Avenue',
            city: 'Slovan',
            zipcode: 3599,
            geo: {
                lat: -74.648318,
                lng: 99.620699,
            },
        },
        phone: '+1 (917) 567-3786',
        isActive: false,
        age: 40,
        company: 'DYNO',
    },
    {
        id: 24,
        firstName: 'Lottie',
        lastName: 'Lowery',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1982-10-10',
        address: {
            street: '557 Meserole Avenue',
            city: 'Fowlerville',
            zipcode: 4991,
            geo: {
                lat: 54.811546,
                lng: -20.996515,
            },
        },
        phone: '+1 (912) 539-3498',
        isActive: true,
        age: 36,
        company: 'MULTIFLEX',
    },
    {
        id: 25,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'Atleta 1, Atleta 2, Atleta 3, Atleta 4',
        dob: '1988-05-01',
        address: {
            street: '688 Bulwer Place',
            city: 'Harmon',
            zipcode: 7664,
            geo: {
                lat: -12.762766,
                lng: -39.924497,
            },
        },
        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
];
const atletas = [{"id":1,"firstName":"Julia Surgeoner","email":"mmela0@himex.com.mx","dob":"11/05/2024","company":"85.153.3.195"},
    {"id":2,"firstName":"Ramon Donati","email":"tdonati1@himex.com.mx","dob":"03/06/2024","company":"104.107.94.110"},
    {"id":3,"firstName":"Antonio Shufflebotham","email":"ushufflebotham2@himex.com.mx","dob":"29/06/2024","company":"55.224.199.176"},
    {"id":4,"firstName":"Jesus Finnie","email":"xfinnie3@himex.com.mx","dob":"08/02/2024","company":"113.10.132.63"},
    {"id":5,"firstName":"Carlos Markovich","email":"mmarkovich4@himex.com.mx","dob":"22/04/2024","company":"220.45.232.168"},
    {"id":6,"firstName":"Jaime Habbeshaw","email":"ahabbeshaw5@himex.com.mx","dob":"03/03/2024","company":"193.69.221.175"},
    {"id":7,"firstName":"Javier Mixhel","email":"kmixhel6@himex.com.mx","dob":"01/09/2024","company":"148.247.30.46"},
    {"id":8,"firstName":"Arturo Durnill","email":"ddurnill7@himex.com.mx","dob":"18/06/2024","company":"162.68.24.49"},
    {"id":9,"firstName":"Jose Grover","email":"rgrover8@himex.com.mx","dob":"04/08/2024","company":"208.149.187.164"},
    {"id":10,"firstName":"Dante Cudde","email":"ecudde9@himex.com.mx","dob":"10/12/2023","company":"114.19.170.123"},
    {"id":11,"firstName":"Estela Songer","email":"esongera@himex.com.mx","dob":"30/01/2024","company":"150.136.29.249"},
    {"id":12,"firstName":"Maria Uphill","email":"fuphillb@himex.com.mx","dob":"22/10/2023","company":"116.197.102.98"},
    {"id":13,"firstName":"Vianey Magill","email":"dmagillc@himex.com.mx","dob":"18/02/2024","company":"34.26.243.35"},
    {"id":14,"firstName":"Rosa Blethin","email":"hblethind@himex.com.mx","dob":"07/10/2024","company":"93.68.101.255"},
    {"id":15,"firstName":"Ana McMurtyr","email":"emcmurtyre@himex.com.mx","dob":"24/07/2024","company":"118.168.30.2"},
    {"id":16,"firstName":"Julieta Abrams","email":"aabramsf@himex.com.mx","dob":"08/11/2023","company":"102.231.149.23"},
    {"id":17,"firstName":"Juan Gittens","email":"cgittensg@himex.com.mx","dob":"13/03/2024","company":"254.104.136.207"},
    {"id":18,"firstName":"Ramon Ortet","email":"dorteth@himex.com.mx","dob":"03/12/2023","company":"235.218.231.218"},
    {"id":19,"firstName":"Pedro Border","email":"eborderi@himex.com.mx","dob":"01/01/2024","company":"44.88.119.110"},
    {"id":20,"firstName":"Ivan Allam","email":"dallamj@himex.com.mx","dob":"03/03/2024","company":"97.165.250.215"},
    {"id":21,"firstName":"Alicia Bilam","email":"abilamk@himex.com.mx","dob":"15/02/2024","company":"63.164.235.248"},
    {"id":22,"firstName":"Rosalba Cato","email":"rcatol@himex.com.mx","dob":"29/12/2023","company":"183.38.179.139"},
    {"id":23,"firstName":"Velia Augustine","email":"gaugustinem@himex.com.mx","dob":"18/12/2023","company":"66.12.9.200"},
    {"id":24,"firstName":"Marco Polo Raynard","email":"sraynardn@himex.com.mx","dob":"27/05/2024","company":"35.124.49.130"},
    {"id":25,"firstName":"Manuel Lambourn","email":"alambourno@himex.com.mx","dob":"28/09/2024","company":"197.141.220.15"}];


const UserIndex = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ver Grupos'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

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
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
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
    const navigate = useNavigate();
    const actionShow = () => {
        navigate('/catalogo/grupos/editar');
    };
    const [modal2, setModal2] = useState(false);
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
   const openModal = () => {
    setModal2(true);
};
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <Link to="/entrenador/" className="text-primary hover:underline">
                        Inicio
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Grupos</span>
                </li>
            </ul>

            <div className='panel mt-6'>
                <div>
                    <div className="flex items-center justify-between sm:justify-between mb-5 text-danger">
                        <div className='flex'>
                            <IconoMenuMarcas /><h5 className="font-semibold text-lg dark:text-white-light ml-2"> Grupos</h5>
                        </div>
                    </div>
                </div>
                <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Tabla de grupos</h5>
                    <div className="ltr:ml-auto rtl:mr-auto w-full">
                        <input type="text" className="form-input w-full" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-striped table-bordered table-compact"
                        records={recordsData}
                        columns={[
                            { accessor: 'firstName', title: 'Grupo', sortable: true },
                            { accessor: 'company', title: 'Categoria', sortable: true },
                            { accessor: 'lastName', title: 'Subcategoria', sortable: true },
                            { accessor: 'age', title: 'Atletas', sortable: true },
                            {
                                accessor: 'action',
                                title: 'Acciones',
                                titleClassName: '!text-center',
                                render: () => (

                                    <div className="flex items-center w-max mx-auto gap-2">
                                        <Tippy content="Ver">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => openModal()}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                            </button>
                                        </Tippy>
                                    </div>
                                ),
                            },

                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Mostrando  ${from} de ${to} de ${totalRecords} registros`}
                    />
                </div>
                <Transition appear show={modal2} as={Fragment}>
                    <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
                        <div className="fixed inset-0 bg-black/60 z-50 overflow-y-auto">
                            <div className="flex items-center justify-center min-h-screen px-4">
                                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                    <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                        <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                            <h5 className="font-bold text-lg"></h5>
                                            <button onClick={() => setModal2(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        <div className="p-5">
                                            <div className="mb-5 flex items-center justify-center">
                                                <div className="max-w-[22rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                                    <div className="py-4 px-4">
                                                        <div className='flex justify-between'>
                                                            <h5 className="text-[#3b3f5c] text-[18px] font-bold mb-3 dark:text-white-light">Grupo A</h5>
                                                            <p className="text-primary text-xs mb-1.5 font-bold">15 Nov 2024</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-white-dark mb-3"><strong>Atletas:</strong></p>
                                                            {atletas.map(item => (
                                                                <div key={item.id}>
                                                                    <label className="inline-flex">
                                                                        <span className="peer-checked:text-info">{item.firstName}</span>
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className='flex justify-center mt-5'>
                                                            <button onClick={() => setModal2(false)} type="button" className="btn btn-danger">
                                                                Cerrar
                                                            </button>
                                                       </div>
                                                        <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>

        </div>
    );
};

export default UserIndex;
