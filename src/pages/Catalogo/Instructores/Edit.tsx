import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import IconX from '../../../components/Icon/IconX';
import IconPlus from '../../../components/Icon/IconPlus';
import Select from 'react-select';
import { IRootState } from '../../../store';


const AddUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Instructores Editar'));
    });

    const options4 = [
        { value: 'grupo', label: 'Grupo A' },
        { value: 'grupo', label: 'Grupo B' },
        { value: 'grupo', label: 'Grupo C' },
    ];
    const optionsAtletas = [
        { value: 'atleta', label: 'Jorge' },
        { value: 'atleta', label: 'Hugo' },
        { value: 'atleta', label: 'Diego' },
    ];



    const [date4, setDate4] = useState<any>('13:45');

    const [treeview1, setTreeview1] = useState<string[]>(['usuarios','catalogos','basesDatos','solicitudesPago','pagos','estadosCuenta','reportes']);
    const [pagesSubMenu, setPagesSubMenu] = useState(false);

    const toggleTreeview1 = (name: any) => {
        if (treeview1.includes(name)) {
            setTreeview1((value) => value.filter((d) => d !== name));
        } else {
            setTreeview1([...treeview1, name]);
        }
    };

    const [codeArr, setCodeArr] = useState<string[]>(['code1,code2,code3,code4,code5,code6,code7,code8']);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };
    const navigate = useNavigate();
    const showAlert = async (type: number) => {
        if (type === 2) {
            Swal.fire({
                icon: 'success',
                title: '¡Creado con éxito!',
                padding: '2em',
                customClass: { popup: "sweet-alerts" },
                confirmButtonText: 'Terminar',
                confirmButtonColor: '#00ab55',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/catalogo/instructores');
                }
            });
        }
    }
    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: 'GRUPO A',
        },
        {
            id: 1,
            title: 'GRUPO F',
        },
    ]);
    const addItem = () => {
        let maxId = 0;
        maxId = items?.length ? items.reduce((max: number, character: any) => (character.id > max ? character.id : max), items[0].id) : 0;

        setItems([...items, { id: maxId + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0 }]);
    };
    const removeItem = (item: any = null) => {
        setItems(items.filter((d: any) => d.id !== item.id));
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/dashboard" className="text-primary hover:underline">
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo/grupos" className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-primary hover:underline">
                        Instructores
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Editar</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos Instructores</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Nombre del entrenador</label>
                                    <input id="name" type="text" placeholder="Ingresa el nombre del instructor" defaultValue="Jorge Alberto Ruiz" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Email</label>
                                    <input id="email" type="email" placeholder="Ingresa el email" defaultValue="admin@pro-tic.mx" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Contraseña</label>
                                    <input id="name" type="password" placeholder="Ingresa la contraseña" defaultValue="mega2024" className="form-input" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name">Asignar grupos</label>
                                {items.map((item: any) => {
                                    return (
                                        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4' key={item.id}>

                                            <div>
                                                <Select placeholder="Seleccione el grupo" options={options4} defaultValue={item.id} isSearchable={false}/>
                                            </div>
                                            <div className="sm:mb-0 px-4">
                                                <button type="button" className="btn btn-danger btn-sm md:btn" onClick={() => removeItem(item)}>
                                                    <IconX className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="sm:mb-0">
                                <button type="button" className="btn btn-primary btn-sm md:btn" onClick={() => addItem()}>
                                    <IconPlus className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mb-5">
                                <div className='flex flex-end justify-end'>
                                    <button type='button' className="btn btn-success !mt-6" onClick={() => showAlert(2)}>Guardar</button>
                                </div>
                            </div>
                        </form>

                    </div>


                </div>


            </div>
        </div>
    );
};

export default AddUser;
