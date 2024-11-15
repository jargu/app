import { Link } from 'react-router-dom';
import { Fragment, SetStateAction, useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import 'flatpickr/dist/flatpickr.css';
import Dropdown from '../../components/Dropdown';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import { IRootState } from '../../store';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';
import Select from 'react-select';

const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Intentar pago'));
    });
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };
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
    const options3 = [
        { value: '1', label: 'Mastercard' },
        { value: '2', label: 'American Express' },
        { value: '3', label: 'Visa' },
        { value: '4', label: 'Discover' },
        { value: '5', label: 'PayPal' },
        { value: '6', label: 'Transferencia' },
    ];
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [modal5, setModal5] = useState(false);
    const [modal1, setModal1] = useState(false);

    const [principalCard, setPrincipalCard] = useState(2);
    const [selectedCard, setSelectedCard] = useState(null);
    const navigate = useNavigate();
    const showAlert = async (id: SetStateAction<number>) => {
        Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro?',
            text: "¿Deseas cambiar el método de pago?",
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Cambiar',
            confirmButtonColor: '#00ab55',
            cancelButtonColor: '#e7515a',
            padding: '2em',
            customClass: { popup: "sweet-alerts" },
        }).then((result) => {
            if (result.isConfirmed) {
                setPrincipalCard(id);
                Swal.fire({
                    title: '¡Cambiada!',
                    text: 'La tarjeta ahora es principal.',
                    icon: 'success',
                    customClass: { popup: "sweet-alerts" },
                });
            }
        });
    };
    const showAlert2 = async () => {
        Swal.fire({
            icon: 'warning',
            title: '¿Quieres pagar?',
            text: "¿Estas seguro que deseas intentar el pago?",
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar',
            confirmButtonColor: '#00ab55',
            cancelButtonColor: '#e7515a',
            padding: '2em',
            customClass: { popup: "sweet-alerts" },
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Éxito!',
                    text: 'Se envío un intento de pago, en unos minutos recibiras una confirmación',
                    icon: 'success',
                    customClass: { popup: "sweet-alerts" },
                });
            }
        });
    };

    const paymentMethods = [
        {
            id: 1,
            name: 'American Express',
            img: '/assets/images/card-americanexpress.svg',
            validUntil: '12/2025',
        },
        {
            id: 2,
            name: 'Mastercard',
            img: '/assets/images/card-mastercard.svg',
            validUntil: '03/2025',
        },
        {
            id: 3,
            name: 'Visa',
            img: '/assets/images/card-visa.svg',
            validUntil: '10/2025',
        },
    ];

    const handleSetPrincipal = (id: number) => {
        showAlert(id);
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/dashboard" className="text-primary hover:underline">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/pagos" className="text-primary hover:underline before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        Pagos
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Intentar pago</span>
                </li>
            </ul>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 pt-5'>
                <div className="panel">
                    <div className="mb-5">
                        <h5 className="font-semibold text-lg mb-4">Verifica el método de pago</h5>
                        <p>
                            Se intento un pago a: <br /> <span className="text-primary">Mastercad terminación 5296</span>.
                        </p>
                    </div>
                    <div className="mb-5">
                        <form>
                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="payBrand">Marca de Tarjeta</label>
                                    <Select placeholder="Seleccione el día" options={options3} defaultValue={options3[0]} isSearchable={false}/>

                                </div>
                                <div>
                                    <label htmlFor="payNumber">Número de Tarjeta</label>
                                    <input id="payNumber" type="text" value="4256 1102 5800 5296" placeholder="Número de Tarjeta" className="form-input" />
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="payHolder">Nombre del Titular</label>
                                    <input id="payHolder" type="text" placeholder="Nombre del Titular" value="Jonathan Cruz" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="payCvv">CVC</label>
                                    <input id="payCvv" type="text" placeholder="CVC" className="form-input" />
                                    <small>Introduce el cvc</small>
                                </div>
                            </div>
                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="payExp">Vencimiento de la Tarjeta</label>
                                    <input id="payExp" type="text" placeholder="Vencimiento de la Tarjeta"  value="03/2025" className="form-input" />
                                </div>
                            </div>
                            <div className="mt-8 flex items-center justify-end">
                                {/* <button type="button" className="btn btn-outline-danger" onClick={() => setModal5(false)}>
                                    Cancelar
                                </button> */}
                                <button type="button" className="btn btn-success ltr:ml-4 rtl:mr-4" onClick={() => showAlert2()}>
                                    Pagar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Historial de pagos</h5>
                    </div>
                    <div>
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-center justify-between py-2">
                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                    Marzo
                                    <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <p className="font-semibold">Pagado</p>
                                    <div className="dropdown ltr:ml-4 rtl:mr-4">
                                        <Dropdown
                                            offset={[0, 5]}
                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                            btnClassName="hover:text-primary"
                                            button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                        >
                                            <ul className="!min-w-[150px]">
                                                <li>
                                                    <button type="button">Ver Factura</button>
                                                </li>
                                                <li>
                                                    <button type="button">Descargar Factura</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-center justify-between py-2">
                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                    Febrero
                                    <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <p className="font-semibold">Pagado</p>
                                    <div className="dropdown ltr:ml-4 rtl:mr-4">
                                        <Dropdown
                                            offset={[0, 5]}
                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                            button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                        >
                                            <ul className="!min-w-[150px]">
                                                <li>
                                                    <button type="button">Ver Factura</button>
                                                </li>
                                                <li>
                                                    <button type="button">Descargar Factura</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between py-2">
                                <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                    Enero
                                    <span className="block text-white-dark dark:text-white-light">Membresía Pro</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <p className="font-semibold">Pagado</p>
                                    <div className="dropdown ltr:ml-4 rtl:mr-4">
                                        <Dropdown
                                            offset={[0, 5]}
                                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                            button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                        >
                                            <ul className="!min-w-[150px]">
                                                <li>
                                                    <button type="button">Ver Factura</button>
                                                </li>
                                                <li>
                                                    <button type="button">Descargar Factura</button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Cambiar método de pago</h5>
                    </div>
                    <div className='mb-5'>
                        {paymentMethods.map((method) => (
                            <div key={method.id} className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex-none">
                                        <img src={method.img} alt={`${method.name} logo`} />
                                    </div>
                                    <div className="flex items-center justify-between flex-auto ltr:ml-4 rtl:mr-4">
                                        <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                            {method.name}
                                            <span className="block text-white-dark dark:text-white-light">Válida hasta {method.validUntil}</span>
                                        </h6>
                                        {principalCard === method.id ? (
                                            <span className="badge bg-success ltr:ml-auto rtl:mr-auto">Principal</span>
                                        ) : (
                                            <button onClick={() => handleSetPrincipal(method.id)}>
                                                <span className="badge bg-warning ltr:ml-auto rtl:mr-auto">Cambiar</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" onClick={() => setModal5(true)}>Agregar nuevo</button>
                    <Transition appear show={modal5} as={Fragment}>
                        <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0" />
                            </Transition.Child>
                            <div className="fixed inset-0 bg-[black]/60 z-[999]">
                                <div className="flex items-start justify-center min-h-screen h-[100vh]">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full h-full max-w-full text-black dark:text-white-dark">
                                            <div className="flex items-center justify-end px-5 pt-3 dark:bg-[#121c2c]">
                                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal5(false)}>
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <div className="panel">
                                                    <div className="mb-5">
                                                        <h5 className="font-semibold text-lg mb-4">Agregar Método de Pago</h5>
                                                        <p>
                                                            Cambios en tu Nueva <span className="text-primary">Información del Método de Pago</span>.
                                                        </p>
                                                    </div>
                                                    <div className="mb-5">
                                                        <form>
                                                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label htmlFor="payBrand">Marca de Tarjeta</label>
                                                                    <select id="payBrand" className="form-select text-white-dark">
                                                                        <option value="Mastercard">Mastercard</option>
                                                                        <option value="American Express">American Express</option>
                                                                        <option value="Visa">Visa</option>
                                                                        <option value="Discover">Discover</option>
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="payNumber">Número de Tarjeta</label>
                                                                    <input id="payNumber" type="text" placeholder="Número de Tarjeta" className="form-input" />
                                                                </div>
                                                            </div>
                                                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label htmlFor="payHolder">Nombre del Titular</label>
                                                                    <input id="payHolder" type="text" placeholder="Nombre del Titular" className="form-input" />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="payCvv">CVC</label>
                                                                    <input id="payCvv" type="text" placeholder="CVC" className="form-input" />
                                                                </div>
                                                            </div>
                                                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div>
                                                                    <label htmlFor="payExp">Vencimiento de la Tarjeta</label>
                                                                    <input id="payExp" type="text" placeholder="Vencimiento de la Tarjeta" className="form-input" />
                                                                </div>
                                                            </div>
                                                            <div className="mt-8 flex items-center justify-end">
                                                                <button type="button" className="btn btn-outline-danger" onClick={() => setModal5(false)}>
                                                                    Cancelar
                                                                </button>
                                                                <button type="button" className="btn btn-success ltr:ml-4 rtl:mr-4" onClick={() => setModal5(false)}>
                                                                    Agregar
                                                                </button>
                                                            </div>
                                                        </form>
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
                <div className="panel">
                    <div className="mb-5">
                        <h5 className="font-semibold text-lg mb-4">Dirección de Facturación</h5>
                        <p>
                            Los cambios en tu <span className="text-primary">información de facturación</span> se aplicarán a partir del próximo pago programado y se reflejarán en tu próxima factura.
                        </p>

                    </div>
                    <div className="mb-5">
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                    Dirección #1
                                    <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Editar</button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                    Dirección #2
                                    <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Editar</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start justify-between py-3">
                                <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                    Dirección #3
                                    <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">Toltecas 166, Carola Alvaro Obregon, CDMX</span>
                                </h6>
                                <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                    <button className="btn btn-dark">Editar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => setModal1(true)}>Agregar nuevo</button>
                    <Transition appear show={modal1} as={Fragment}>
                        <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0" />
                            </Transition.Child>
                            <div className="fixed inset-0 bg-[black]/60 z-[999]">
                                <div className="flex items-start justify-center min-h-screen h-[100vh]">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full h-full max-w-full text-black dark:text-white-dark">
                                            <div className="flex items-center justify-end px-5 pt-3 dark:bg-[#121c2c]">
                                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal1(false)}>
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="panel">
                                                <div className="mb-5">
                                                    <h5 className="font-semibold text-lg mb-4">Agregar Dirección de Facturación</h5>
                                                    <p>
                                                        Cambios en tu Nueva <span className="text-primary">Información de Facturación</span>.
                                                    </p>
                                                </div>
                                                <div className="mb-5">
                                                    <form>
                                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div>
                                                                <label htmlFor="billingName">Nombre</label>
                                                                <input id="billingName" type="text" placeholder="Ingresa Nombre" className="form-input" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="billingEmail">Correo Electrónico</label>
                                                                <input id="billingEmail" type="email" placeholder="Ingresa Correo Electrónico" className="form-input" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="billingAddress">Dirección</label>
                                                            <input id="billingAddress" type="text" placeholder="Ingresa Dirección" className="form-input" />
                                                        </div>
                                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                                            <div className="md:col-span-2">
                                                                <label htmlFor="billingCity">Ciudad</label>
                                                                <input id="billingCity" type="text" placeholder="Ingresa Ciudad" className="form-input" />
                                                            </div>
                                                            <div>
                                                                <label htmlFor="billingState">Estado</label>
                                                                <select id="billingState" className="form-select text-white-dark">
                                                                    <option>Elige...</option>
                                                                    <option>...</option>
                                                                </select>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="billingZip">Código Postal</label>
                                                                <input id="billingZip" type="text" placeholder="Ingresa Código Postal" className="form-input" />
                                                            </div>
                                                        </div>
                                                        <button type="button" className="btn btn-primary">
                                                            Agregar
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
                {/* <div className="panel">
                    <div className="mb-5">
                        <h5 className="font-semibold text-lg mb-4">Agregar Dirección de Facturación</h5>
                        <p>
                            Cambios en tu Nueva <span className="text-primary">Información de Facturación</span>.
                        </p>
                    </div>
                    <div className="mb-5">
                        <form>
                            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="billingName">Nombre</label>
                                    <input id="billingName" type="text" placeholder="Ingresa Nombre" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="billingEmail">Correo Electrónico</label>
                                    <input id="billingEmail" type="email" placeholder="Ingresa Correo Electrónico" className="form-input" />
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="billingAddress">Dirección</label>
                                <input id="billingAddress" type="text" placeholder="Ingresa Dirección" className="form-input" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                <div className="md:col-span-2">
                                    <label htmlFor="billingCity">Ciudad</label>
                                    <input id="billingCity" type="text" placeholder="Ingresa Ciudad" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="billingState">Estado</label>
                                    <select id="billingState" className="form-select text-white-dark">
                                        <option>Elige...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="billingZip">Código Postal</label>
                                    <input id="billingZip" type="text" placeholder="Ingresa Código Postal" className="form-input" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AccountSetting;
