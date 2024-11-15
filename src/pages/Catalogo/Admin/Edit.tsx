import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import 'file-upload-with-preview/dist/file-upload-with-preview.min.css';

const AddUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Administradores Crear'));
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
                    navigate('/catalogo/administradores');
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
    const [images2, setImages2] = useState<any>([]);
    const maxNumber = 69;

    const onChange2 = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        setImages2(imageList as never[]);
    };
    const imageUrl = '/assets/images/file-preview.svg';
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/dashboard" className="text-primary hover:underline">
                        Catálogo
                    </Link>
                </li>
                <li>
                    <Link to="/catalogo/administradores" className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-primary hover:underline">
                        Administradores
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Editar</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos del administrador</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="name">Nombre del administrador</label>
                                    <input id="name" type="text" placeholder="Nombre completo del administrador" defaultValue="Jonathan Cruz" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="ctnTextarea">Email</label>
                                    <input id="email" type="email" placeholder="Ingresa el email" defaultValue="admin@pro-tic.mx" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="ctnTextarea">Contraseña</label>
                                    <input id="email" type="text" placeholder="Ingresa la contraseña" defaultValue="" className="form-input" />
                                </div>
                            </div>
                            <div>
                                <small className="ltr:text-left rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1"><cite className="italic">Nota: Se le enviará un correo al admin, para que pueda colocar una nueva contraseña y que pueda acceder</cite>
                                </small>
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
