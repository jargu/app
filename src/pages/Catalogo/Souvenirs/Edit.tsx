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
import IconX from '../../../components/Icon/IconX';


const AddUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Souvenirs Editar'));
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
                title: '¡Guardado con éxito!',
                padding: '2em',
                customClass: { popup: "sweet-alerts" },
                confirmButtonText: 'Terminar',
                confirmButtonColor: '#00ab55',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/catalogo/souvenirs');
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
                    <Link to="/catalogo/souvenirs" className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2 text-primary hover:underline">
                        Souvenirs
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Editar</span>
                </li>
            </ul>

            <div className="pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6">

                <div className="panel lg:col-span-2" id="forms_grid">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Datos del Souvenirs</h5>
                    </div>
                    <div className="mb-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name">Nombre del Souvenirs</label>
                                    <input id="name" type="text" placeholder="Nombre completo del Souvenirs" defaultValue="Chamarra Onboard" className="form-input" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="ctnTextarea">Descripción</label>
                                    <textarea id="ctnTextarea" rows={3} className="form-textarea" defaultValue="Chamarra Onboard, Modelo: 003019616-0000" placeholder="Descripción"></textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="ctnTextarea">Especificaciones</label>
                                    <textarea id="ctnTextarea" rows={3} className="form-textarea" defaultValue="Prepárate para el invierno con la nueva chamarra Voleth para mujer de la marca Onboard. Esta chamarra cuenta con un ajuste normal, un cierre frontal a la altura del cuello y puños elásticos. Su tejido es transpirable, suave y sumamente ligero para que puedas entrenar en todo momento y a cada hora. No dejes pasar esta increíble chamarra y cómprala ahora mismo." placeholder="Especificaciones"></textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <label htmlFor="name">Precio</label>
                                    <input id="email" type="text" placeholder="Ingresa el precio" defaultValue="$599.00" className="form-input" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="custom-file-container" data-upload-id="mySecondImage">
                                    <div className="label-container">
                                        <label>Upload </label>
                                        <button
                                            type="button"
                                            className="custom-file-container__image-clear"
                                            title="Clear Image"
                                            onClick={() => {
                                                setImages2([]);
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <label className="custom-file-container__custom-file"></label>
                                    <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                    <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                    <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
                                        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                            <div className="upload__image-wrapper">
                                                <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                    Choose File...
                                                </button>
                                                &nbsp;
                                                <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                                                    {imageList.map((image, index) => (
                                                        <div key={index} className="custom-file-container__image-preview relative">
                                                            <button
                                                                type="button"
                                                                className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                                                title="Clear Image"
                                                                onClick={() => onImageRemove(index)}
                                                            >
                                                                <IconX className="w-3 h-3"/>
                                                            </button>
                                                            <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </ImageUploading>
                                    {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
                                </div>
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
