import { Link } from 'react-router-dom';
import { Key, useEffect, useState } from 'react';
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
        dispatch(setPageTitle('Áreas Crear'));
    });

    const options4 = [
        { value: 'grupo', label: 'Lunes' },
        { value: 'grupo', label: 'Martes' },
        { value: 'grupo', label: 'Miércoles' },
        { value: 'grupo', label: 'Jueves' },
        { value: 'grupo', label: 'Viernes' },
        { value: 'grupo', label: 'Sábado' },
        { value: 'grupo', label: 'Domingo' },
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
                    navigate('/catalogo/grupos');
                }
            });
        }
    }
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
    const [items2, setItems2] = useState<any>([ ]);
    const addItemHour = (dayId: string | number) => {
        setItems2((prevItems2: { [x: string]: any; }) => ({
            ...prevItems2,
            [dayId]: [...(prevItems2[dayId] || []), { id: Date.now(), title: '' }],
        }));
    };
    const removeItemHour = (dayId: string | number, hourId: any) => {
        setItems2((prevItems2: { [x: string]: any[]; }) => ({
            ...prevItems2,
            [dayId]: prevItems2[dayId].filter((item: { id: any; }) => item.id !== hourId),
        }));
    };

    const mostrarMantenimiento = (selectedDay: { value: any; }) => {
        const dayId = selectedDay.value;
        setItems2((prevItems2: { [x: string]: any; }) => ({
            ...prevItems2,
            [dayId]: prevItems2[dayId] || [{ id: Date.now(), title: '' }],
        }));
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
                        Áreas de entrenamiento
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Crear</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos Áreas de entrenamiento</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Nombre del área</label>
                                    <input id="name" type="text" placeholder="Ingresa el nombre del área" defaultValue="" className="form-input" />
                                </div>
                            </div>
                            <div>

                                <div>
                                    {items.map((day: { id: Key | null | undefined; }) => (
                                        <div className='gap-4' key={day.id}>
                                            <div className='pr-4 mt-4 mb-4'>
                                                <h5 className="font-semibold text-lg dark:text-white-light">Agregar un  día</h5>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-4">
                                                <Select placeholder="Seleccione el día" options={options4} isSearchable={false} />
                                            </div>

                                            <div className='pr-4 mt-4'>
                                                <label>Agregar horarios de mantenimientos</label>
                                            </div>

                                            {(items2[day.id as string] || []).map((hour: { id: Key | null | undefined; }) => (
                                                <div className="grid grid-cols-2 md:grid-cols-4" key={hour.id}>
                                                    <div className='pr-4 mt-4'>
                                                        <Flatpickr options={{ noCalendar: true, enableTime: true, dateFormat: 'H:i' }}
                                                            value="" className="form-input" placeholder='Hora de inicio' />
                                                    </div>
                                                    <div className='pr-4 mt-4'>
                                                        <Flatpickr options={{ noCalendar: true, enableTime: true, dateFormat: 'H:i' }}
                                                            value="" className="form-input" placeholder='Hora de fin' />
                                                    </div>
                                                    <div className="sm:mb-0 px-4 mt-4">
                                                        <button type="button" className="btn btn-danger btn-sm md:btn" onClick={() => removeItemHour(day.id as string, hour.id)}>
                                                            <IconX className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="sm:mb-0 pr-4 mt-4">
                                                <button type="button" className="btn btn-primary btn-sm md:btn" onClick={() => addItemHour(day.id as string)}>
                                                    <IconPlus className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <div className='pr-4 mt-4'>
                                                <hr />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sm:mb-0 pr-4 mt-4">
                                    <button type="button" className="btn btn-primary btn-sm md:btn" onClick={() => addItem()}>
                                        <IconPlus className="w-5 h-5" /> <h5 className="font-semibold text-lg dark:text-white-light">Agrega otro día</h5>
                                    </button>
                                </div>
                            </div>


                            <div className="mb-5">
                                <div className='flex flex-end justify-end'>
                                    <button type='button' className="btn btn-success !mt-6" onClick={() => showAlert(2)}>Crear</button>
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
