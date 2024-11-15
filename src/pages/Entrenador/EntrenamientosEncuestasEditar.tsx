import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IconX from '../../components/Icon/IconX';
import IconPlus from '../../components/Icon/IconPlus';
import Select from 'react-select';

const AddUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Encuestas Crear'));
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
                title: '¡Editado con éxito!',
                padding: '2em',
                customClass: { popup: "sweet-alerts" },
                confirmButtonText: 'Terminar',
                confirmButtonColor: '#00ab55',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/entrenador/encuestas');
                }
            });
        }
    }
    const [items, setItems] = useState<any>([
        { id: 1, title: 'Muy satisfecho'},
        { id: 2, title: 'Satisfecho'},
        { id: 3, title: 'Poco satisfecho'},
        { id: 4, title: 'Nada satisfecho'},
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
                    <Link to="/entrenador/" className="text-primary hover:underline">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/entrenador/encuestas" className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-primary hover:underline">
                        Encuestas
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Editar</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos para encuesta</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Tema general</label>
                                    <input id="name" type="text" defaultValue="Satisfacción General" placeholder="Ingresa el nombre de la pregunta" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Pregunta</label>
                                    <input id="name" type="text" defaultValue="¿Qué tan satisfecho estás con las instalaciones del club?" placeholder="Ingresa el nombre de la pregunta" className="form-input" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name">Editar opciones</label>
                            </div>
                            {items.map((item: any) => {
                                return (
                                    <div className='gap-4' key={item.id}>

                                        <div className="flex justify-start w-100">
                                            <div className='w-full md:w-1/4'>
                                                <input id="name" type="text" placeholder="Ingresa la opción" className="form-input" defaultValue={item.title} />
                                            </div>
                                            <div className="sm:mb-0 px-4">
                                                <button type="button" className="btn btn-danger btn-sm md:btn" onClick={() => removeItem(item)}>
                                                    <IconX className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                );
                            })}
                            <div className="sm:mb-0">
                                <button type="button" className="btn btn-primary btn-sm md:btn" onClick={() => addItem()}>
                                    <IconPlus className="w-5 h-5" />
                                </button>
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
