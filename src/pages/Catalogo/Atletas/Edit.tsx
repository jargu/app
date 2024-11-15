import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

const AddUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Atleta editar'));
    });
    const options3 = [
        { value: '1', label: 'Semanal' },
        { value: '2', label: 'Mensual' },
        { value: '3', label: 'Bimestral' },
        { value: '4', label: 'Trimestral' },
        { value: '5', label: 'Semestral' },
        { value: '6', label: 'Anual' },
    ];

    const options4 = [
        { value: 'grupo', label: 'Grupo A' },
        { value: 'grupo', label: 'Grupo B' },
        { value: 'grupo', label: 'Grupo C' },
    ];
    const options5 = [
        { value: 'atleta', label: 'Avanzado' },
        { value: 'atleta', label: 'Intermedio' },
        { value: 'atleta', label: 'Principiante' },
    ];




    const [codeArr, setCodeArr] = useState<string[]>(['code1,code2,code3,code4,code5,code6,code7,code8']);


    const navigate = useNavigate();
    const showAlert = async (type: number) => {
        if (type === 2) {
            Swal.fire({
                icon: 'success',
                title: '¡Guardado con éxito!',
                padding: '2em',
                customClass: { popup: "sweet-alerts" },
                confirmButtonText: 'Terminar',
                confirmButtonColor: '#00ab55',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/catalogo/atletas');
                }
            });
        }
    }
    const actionReturn = () => {
        navigate('/catalogo/atletas');
    };
    const [items, setItems] = useState<any>([
        {
            id: 1,
            title: '',
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
                    <Link to="/catalogo/atleta" className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-primary hover:underline">
                        Atletas
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Editar</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos del Atleta</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Nombre del Atleta</label>
                                    <input id="name" type="text" placeholder="Nombre completo del Atleta" defaultValue="Jonathan Cruz" className="form-input" />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label htmlFor="name">Peso</label>
                                        <input id="name" type="text" placeholder="Peso" defaultValue="89" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="name">Altura</label>
                                        <input id="name" type="text" placeholder="Altura" defaultValue="1.85" className="form-input" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="name">Email</label>
                                    <input id="email" type="email" placeholder="Ingresa el email" defaultValue="admin@pro-tic.mx" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Contraseña</label>
                                    <input id="name" type="text" placeholder="Ingresa la contraseña" defaultValue="" className="form-input" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name">Domicilio completo</label>
                                    <input id="name" type="text" placeholder="Calle, número, etc." defaultValue="Toltecas 166, Carola Alvaro Obregon, CDMX" className="form-input" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Datos de pago</h5>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">No. de tarjeta</label>
                                    <input id="name" type="text" placeholder="Número de la tarjeta" defaultValue="4578 4578 1478 0123" className="form-input" />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div>
                                        <label htmlFor="name">Vigencia</label>
                                        <input id="name" type="text" placeholder="Vigencia" defaultValue="2024" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="name">CVC</label>
                                        <input id="name" type="password" placeholder="CVC" defaultValue="758" className="form-input" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="name">Código postal </label>
                                    <input id="name" type="text" placeholder="Código postal" defaultValue="01900" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Frecuencia de pago </label>
                                    <Select placeholder="Seleccione..." options={options3} defaultValue={options3[5]} isSearchable={false}/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-5">
                                <h5 className="font-semibold text-lg dark:text-white-light">Datos adicionales</h5>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Subcategoria</label>
                                    <Select placeholder="Seleccione..." options={options5} defaultValue={options5[1]} isSearchable={false}/>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Grupo</label>
                                    <Select placeholder="Seleccione..." options={options4} defaultValue={options4[0]} isSearchable={false}/>
                                </div>
                            </div>
                            <div className="mb-5">
                                <div className='flex flex-end justify-end'>
                                    <button type='button' className="btn btn-danger !mt-6 mr-6" onClick={() => actionReturn()}>Cancelar </button>
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
